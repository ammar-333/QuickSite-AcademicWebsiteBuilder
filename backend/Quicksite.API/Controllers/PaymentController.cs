using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Quicksite.API.Data;
using Quicksite.API.Models.Domains;
using Quicksite.API.Models.Dtos;

namespace Quicksite.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentController : ControllerBase
    {
        private readonly QuicksiteDbContext dbContext;
        private readonly IMapper mapper;

        public PaymentController(QuicksiteDbContext dbContext, IMapper mapper)
        {
            this.dbContext = dbContext;
            this.mapper = mapper;
        }

        //GetAll Payments
        // GET: https://Localhost:portnumbrt//api/Payment
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            //get all the Payments
            var PaymentModel = await dbContext.Payments.Include("Customer").ToListAsync();

            //map model to Dto
            var PaymentDto = mapper.Map<List<PaymentDto>>(PaymentModel);

            return Ok(PaymentDto);
        }

        //Get one Payment
        // GET: https://Localhost:portnumbrt//api/Payment/{id}
        [HttpGet("{id:Guid}")]
        public async Task<IActionResult> GetById([FromRoute] Guid id)
        {
            var PaymentModel = await dbContext.Payments.Include("Customer").FirstOrDefaultAsync(x => x.PaymentId == id);

            if (PaymentModel == null) return NotFound();

            var PaymentDto = mapper.Map<PaymentDto>(PaymentModel);

            return Ok(PaymentDto);
        }

        //create new Payments
        //POST:  https://localhost:portnumber/api/Payment
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] AddPaymentDto addPaymentDto)
        {

            var PaymentModel = mapper.Map<Payment>(addPaymentDto);

            //map to the db
            await dbContext.Payments.AddAsync(PaymentModel);
            await dbContext.SaveChangesAsync();

            var PaymentDto = mapper.Map<PaymentDto>(PaymentModel);

            return Ok(PaymentDto);
        }

        //Update an existing Payment
        // PUT: https://localhost:portnumber/api/Payment/{id}
        [HttpPut("{id:Guid}")]
        public async Task<IActionResult> Update([FromRoute] Guid id, [FromBody] UpdatePaymentDto updatePaymentDto)
        {
            //Check if Payment exists
            var PaymentModel = await dbContext.Payments.FindAsync(id);

            if (PaymentModel == null)
                return NotFound();
            //make the changes
            PaymentModel.Amount = updatePaymentDto.Amount;
            PaymentModel.Status = updatePaymentDto.Status;
            PaymentModel.PaymentHistory = updatePaymentDto.PaymentHistory;

            await dbContext.SaveChangesAsync();

            var PaymentDto = mapper.Map<PaymentDto>(PaymentModel);

            return Ok(PaymentDto);
        }

        //Delete a Payment
        // DELETE: https://localhost:portnumber/api/Payment/{id}
        [HttpDelete("{id:Guid}")]
        public async Task<IActionResult> Delete([FromRoute] Guid id)
        {
            //Check if region exists
            var PaymentModel = await dbContext.Payments.FindAsync(id);

            if (PaymentModel == null) return NotFound();

            //delete
            dbContext.Payments.Remove(PaymentModel);
            await dbContext.SaveChangesAsync();

            return Ok();
        }

    }
}
