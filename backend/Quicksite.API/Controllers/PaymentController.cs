using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using PaypalServerSdk.Standard;
using PaypalServerSdk.Standard.Controllers;
using PaypalServerSdk.Standard.Http.Response;
using PaypalServerSdk.Standard.Models;
using Quicksite.API.Data;
using Quicksite.API.Models.Domains;
using Quicksite.API.Models.Dtos;
using System.Security.Claims;



namespace Quicksite.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentController : ControllerBase
    {
        private readonly QuicksiteDbContext dbContext;
        private readonly IMapper mapper;
        private readonly OrdersController _ordersCtrl;
        private readonly PaymentsController _paymentsCtrl;

        public PaymentController(QuicksiteDbContext dbContext, IMapper mapper, PaypalServerSdkClient client)
        {
            this.dbContext = dbContext;
            this.mapper = mapper;
            _ordersCtrl = client.OrdersController;
            _paymentsCtrl = client.PaymentsController;
        }

        //GetAll Payments
        // GET: https://Localhost:portnumbrt//api/Payment
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            //get all the Payments
            var PaymentModel = await dbContext.Payments.Include(w => w.AppUser).ToListAsync();

            //map model to Dto
            var PaymentDto = mapper.Map<List<PaymentDto>>(PaymentModel);

            return Ok(PaymentDto);
        }

        //Get one Payment
        // GET: https://Localhost:portnumbrt//api/Payment/{id}
        [HttpGet("{id:Guid}")]
        public async Task<IActionResult> GetById([FromRoute] Guid id)
        {
            var PaymentModel = await dbContext.Payments.Include(w => w.AppUser).FirstOrDefaultAsync(x => x.PaymentId == id);

            if (PaymentModel == null) return NotFound();

            var PaymentDto = mapper.Map<PaymentDto>(PaymentModel);

            return Ok(PaymentDto);
        }


        [Authorize]
        [HttpPost("make")]
        public async Task<IActionResult> Make([FromBody] AddPaymentDto dto)
        {
            var input = new CreateOrderInput
            {
                Body = new OrderRequest
                {
                    Intent = CheckoutPaymentIntent.Capture,
                    PurchaseUnits = new List<PurchaseUnitRequest>
                    {
                      new PurchaseUnitRequest 
                      {
                        Amount = new AmountWithBreakdown 
                        {
                          CurrencyCode = dto.Currency,
                          MValue = dto.Amount.ToString("F2")
                        }
                      }
                    }
                }
            };

            ApiResponse<Order> result = await _ordersCtrl.CreateOrderAsync(input);

            var code = (int)result.StatusCode;
            if (code < 200 || code >= 300)
                // return whatever PayPal sent back in its Data
                return StatusCode(code, result.Data);

            var approvalLink = result.Data.Links
                .FirstOrDefault(l =>
                    l.Rel.Equals("approve", StringComparison.OrdinalIgnoreCase)
                 )?
                .Href;


            return Ok(new
            {
                orderId = result.Data.Id,
                approvalUrl = approvalLink
            });
        }

        [Authorize]
        [HttpPost("capture/{orderId}")]
        public async Task<IActionResult> Capture([FromQuery] string orderId)
        {
            var captureInput = new CaptureOrderInput { Id = orderId };
            ApiResponse<Order> result = await _ordersCtrl.CaptureOrderAsync(captureInput);

            var code = (int)result.StatusCode;
            if (code < 200 || code >= 300)
                return StatusCode(code, new { error = result.Data });

            var unit = result.Data.PurchaseUnits.First();
            var amt = decimal.Parse(unit.Amount.MValue!);
            var statusString = result.Data.Status?.ToString() ?? "UNKNOWN";

            var userId = User.FindFirst(ClaimTypes.NameIdentifier)!.Value;
            var payment = new Payment
            {
                PaymentId = Guid.NewGuid(),
                AppUserId = userId,
                Amount = amt,
                Currency = unit.Amount.CurrencyCode!,
                Status = statusString,
                PaymentHistory = JsonConvert.SerializeObject(result.Data)
            };

            dbContext.Payments.Add(payment);
            await dbContext.SaveChangesAsync();

            return Ok(new
            {
                message = "Payment captured",
                status = statusString
            });
        }


    }
}
