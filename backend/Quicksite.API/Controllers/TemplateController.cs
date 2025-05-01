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
    public class TemplateController : ControllerBase
    {
        private readonly QuicksiteDbContext dbContext;
        private readonly IMapper mapper;

        public TemplateController(QuicksiteDbContext dbContext, IMapper mapper)
        {
            this.dbContext = dbContext;
            this.mapper = mapper;
        }

        // get All Templates
        // Get: https://localhost:portnumber/api/Template
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var TemplateModel = await dbContext.Templates.ToListAsync();

            var TemplateDto = mapper.Map<List<TemplateDto>>(TemplateModel);

            return Ok(TemplateDto);
        }

        //get one Template by id
        //Get: https://localhost:portnumber/api/Templates/{id}
        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetById([FromRoute] Guid id)
        {

            var TemplateModel = await dbContext.Templates.FirstOrDefaultAsync(x => x.TemplateId == id);

            if (TemplateModel == null)
            {
                return NotFound();
            }

            var TemplateDto = mapper.Map<TemplateDto>(TemplateModel);

            return Ok(TemplateDto);
        }

        //create new Template 
        //Post https://localhost:portnumber/api/Template
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] AddTemplateDto addTemplateDto)
        {

            var TemplateModel = mapper.Map<Template>(addTemplateDto);

            await dbContext.Templates.AddAsync(TemplateModel);
            await dbContext.SaveChangesAsync();

            var TemplateDto = mapper.Map<TemplateDto>(TemplateModel);

            return Ok(TemplateDto);
        }

        //Update an existing Template
        //Put: https://localhost:portnumber/api/Template/{id}
        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> Update([FromRoute] Guid id, [FromBody] UpdateTemplateDto updateTemplateDto)
        {
            var TemplateModel = await dbContext.Templates.FindAsync(id);

            if (TemplateModel == null)
                return NotFound();

            TemplateModel.Description = updateTemplateDto.Description;

            await dbContext.SaveChangesAsync();

            var TemplateDto = mapper.Map<TemplateDto>(TemplateModel);

            return Ok(TemplateDto);
        }

        //Delete a Template
        //Delete: https://localhost:portnumber/api/Template/{id}
        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> Delete([FromRoute] Guid id)
        {
            var TemplateModel = dbContext.Templates.Find(id);

            if (TemplateModel == null) return NotFound();

            dbContext.Templates.Remove(TemplateModel);
            await dbContext.SaveChangesAsync();

            return Ok();
        }
    }
}
