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
    public class AdminController : ControllerBase
    {
        private readonly QuicksiteDbContext dbContext;
        private readonly IMapper mapper;

        public AdminController(QuicksiteDbContext dbContext, IMapper mapper)
        {
            this.dbContext = dbContext;
            this.mapper = mapper;
        }

        //GetAll admins
        // GET: https://Localhost:portnumbrt//api/Admin
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            //get all the admins
            var adminsModel = await dbContext.Admins.ToListAsync();

            //map model to Dto
            var adminDto = mapper.Map<List<AdminDto>>(adminsModel);

            return Ok(adminDto);
        }

        //Get one admin
        // GET: https://Localhost:portnumbrt//api/Admin/{id}
        [HttpGet("{id:Guid}")]
        public async Task<IActionResult> GetById([FromRoute] Guid id)
        {
            var adminModel = await dbContext.Admins.FindAsync(id);

            if (adminModel == null) return NotFound();

            var adminDto = mapper.Map<AdminDto>(adminModel);

            return Ok(adminDto);
        }

        //create new admins
        //POST:  https://localhost:portnumber/api/Admin
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] AddAdminDto addAdminDto)
        {

            var adminModel = mapper.Map<Admin>(addAdminDto);

            //map to the db
            await dbContext.Admins.AddAsync(adminModel);
            await dbContext.SaveChangesAsync();

            var adminDto = mapper.Map<AdminDto>(adminModel);

            return Ok(adminDto);
        }

        //Update an existing admin
        // PUT: https://localhost:portnumber/api/Admin/{id}
        [HttpPut("{id:Guid}")]
        public async Task<IActionResult> Update([FromRoute] Guid id, [FromBody] UpdateAdminDto updateAdminDto)
        {
            //Check if admin exists
            var adminModel = await dbContext.Admins.FindAsync(id);

            if (adminModel == null)
                return NotFound();
            //make the changes
            adminModel.AdminName = updateAdminDto.AdminName;
            adminModel.AdminEmail = updateAdminDto.AdminEmail;
            adminModel.AdminPass = updateAdminDto.AdminPass;

            await dbContext.SaveChangesAsync();

            var adminDto = mapper.Map<AdminDto>(adminModel);

            return Ok(adminDto);
        }

        //Delete a admin
        // DELETE: https://localhost:portnumber/api/Admin/{id}
        [HttpDelete("{id:Guid}")]
        public async Task<IActionResult> Delete([FromRoute] Guid id)
        {
            //Check if region exists
            var adminModel = await dbContext.Admins.FindAsync(id);

            if (adminModel == null) return NotFound();

            //delete
            dbContext.Admins.Remove(adminModel);
            await dbContext.SaveChangesAsync();

            return Ok();
        }

    }
}
