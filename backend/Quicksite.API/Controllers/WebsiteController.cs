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
    public class WebsiteController : ControllerBase
    {
        private readonly QuicksiteDbContext dbContext;
        private readonly IMapper mapper;

        public WebsiteController(QuicksiteDbContext dbContext, IMapper mapper)
        {
            this.dbContext = dbContext;
            this.mapper = mapper;
        }

        //get all Websites
        //Get: https://Localhost:portnumber/api/Website?filterOn=Name&FilterQuery=Track&pageNumber=1&pageSize=10
        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery] string? filterOn, [FromQuery] string? filterQuery,
            [FromQuery] int pageNumber = 1, [FromQuery] int PageSize = 10)
        {
            var Website = dbContext.Websites.Include("Template").Include("Customer").AsQueryable();

            //filtering
            if (string.IsNullOrWhiteSpace(filterQuery) == false && string.IsNullOrWhiteSpace(filterOn) == false)
            {
                if (filterOn.Equals("Name", StringComparison.OrdinalIgnoreCase))
                {
                    Website = Website.Where(x => x.Name.Contains(filterQuery));
                }
            }

            //pagination
            var skipResults = (pageNumber - 1) * PageSize;

            var WebsiteModel = await Website.Skip(skipResults).Take(PageSize).ToListAsync();

            //map model to Dto
            var WebsiteDto = mapper.Map<List<WebsiteDto>>(WebsiteModel);

            return Ok(WebsiteDto);
        }

        //Get one Website
        //Get: https://Localhost:portnumber/api/Website/{id}
        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetBuId([FromRoute] Guid id)
        {
            var WebsiteModel = await dbContext.Websites.Include("Template").Include("Customer").FirstOrDefaultAsync(x => x.WebsiteId == id);

            if (WebsiteModel == null)
                return NotFound();

            //map model tp Dto
            var WebsiteDto = mapper.Map<WebsiteDto>(WebsiteModel);

            return Ok(WebsiteDto);
        }

        //Create Website
        //Post: https://Localhost:portnumber/api/Website
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] AddWebsiteDto addWebsiteDto)
        {
            //map Dto into model
            var WebsiteModel = mapper.Map<Website>(addWebsiteDto);

            await dbContext.Websites.AddAsync(WebsiteModel);
            await dbContext.SaveChangesAsync();

            //map model to Dto
            var WebsiteDto = mapper.Map<WebsiteDto>(WebsiteModel);

            return Ok();
        }

        //Update a Website
        //Put: https://Localhost:portnumber/api/Website/{id}
        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> Update([FromRoute] Guid id, [FromBody] UpdateWebsiteDto updateWebsiteDto)
        {
            var WebsiteModel = await dbContext.Websites.FirstOrDefaultAsync(x => x.WebsiteId == id);

            if (WebsiteModel == null) return NotFound();

            //map dto to model
            WebsiteModel.Name = updateWebsiteDto.Name;
            WebsiteModel.HostUrl = updateWebsiteDto.HostUrl;
            WebsiteModel.MetaData = updateWebsiteDto.MetaData;
            WebsiteModel.Theme = updateWebsiteDto.Theme;
            WebsiteModel.CreationDate = updateWebsiteDto.CreationDate;
            WebsiteModel.LastModified = updateWebsiteDto.LastModified;
            WebsiteModel.TemplateId = updateWebsiteDto.TemplateId;

            await dbContext.SaveChangesAsync();

            //map model to dto
            var WebsiteDto = mapper.Map<WebsiteDto>(WebsiteModel);

            return Ok(WebsiteDto);
        }

        //Delete Website
        //Delete: https://Localhost:portnumber/api/Website/{id}
        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var WebsiteModel = await dbContext.Websites.FindAsync(id);

            if (WebsiteModel == null) return NotFound();

            dbContext.Websites.Remove(WebsiteModel);
            await dbContext.SaveChangesAsync();

            return Ok();
        }
    }
}
