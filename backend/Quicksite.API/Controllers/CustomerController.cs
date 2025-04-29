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
    public class CustomerController : ControllerBase
    {
        private readonly QuicksiteDbContext dbContext;
        private readonly IMapper mapper;

        public CustomerController(QuicksiteDbContext dbContext, IMapper mapper)
        {
            this.dbContext = dbContext;
            this.mapper = mapper;
        }

        //GetAll customers
        //Get: https://Localhost:portnumbrt//api/Customer
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            //get all the customers
            var customersModel = await dbContext.Customers.ToListAsync();

            //map model to Dto
            var customerDto = mapper.Map<List<CustomerDto>>(customersModel);

            return Ok(customerDto);
        }

        //Get one customers
        //Get: https://Localhost:portnumbrt//api/Customer/{id}
        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetById([FromRoute] Guid id)
        {
            var customerModel = await dbContext.Customers.FindAsync(id);

            if (customerModel == null) return NotFound();

            var customerDto = mapper.Map<CustomerDto>(customerModel);

            return Ok(customerDto);
        }

        //create new customer 
        //Post https://localhost:portnumber/api/Customer
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] AddCustomerDto addCustomerDto)
        {

            var customerModel = mapper.Map<Customer>(addCustomerDto);

            //map to the db
            await dbContext.Customers.AddAsync(customerModel);
            await dbContext.SaveChangesAsync();

            var customerDto = mapper.Map<CustomerDto>(customerModel);

            return Ok(customerDto);
        }

        //Update an existing customer
        //Put: https://localhost:portnumber/api/Customer/{id}
        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> Update([FromRoute] Guid id, [FromBody] UpdateCustomerDto updateCustomerDto)
        {
            //Check if customer exists 
            var customerModel = await dbContext.Customers.FindAsync(id);

            if (customerModel == null)
                return NotFound();

            //make the changes
            customerModel.CustomerName = updateCustomerDto.CustomerName;
            customerModel.CustomerEmail = updateCustomerDto.CustomerEmail;
            customerModel.CustomerPass = updateCustomerDto.CustomerPass;
            customerModel.Gender = updateCustomerDto.Gender;
            customerModel.Age = updateCustomerDto.Age;

            await dbContext.SaveChangesAsync();

            var customerDto = mapper.Map<CustomerDto>(customerModel);

            return Ok(customerDto);
        }


        //Delete a customer
        //Delete: https://localhost:portnumber/api/Customer/{id}
        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete([FromRoute] Guid id)
        {
            //Check if region exists
            var customerModel = await dbContext.Customers.FindAsync(id);

            if (customerModel == null) return NotFound();

            //delete
            dbContext.Customers.Remove(customerModel);
            await dbContext.SaveChangesAsync();

            return Ok();
        }
    }
}
