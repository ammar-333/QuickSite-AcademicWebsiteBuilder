using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Quicksite.API.Data;
using Quicksite.API.Models.Domains;
using Quicksite.API.Models.Dtos;
using Quicksite.API.Services;
using System.Security.Claims;
using System.Text;

namespace Quicksite.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WebsiteController : ControllerBase
    {
        private readonly QuicksiteDbContext dbContext;
        private readonly IMapper mapper;
        private readonly OpenAIService _openAIService;
        private readonly UserManager<AppUser> userManager;

        public WebsiteController(QuicksiteDbContext dbContext, IMapper mapper, UserManager<AppUser> userManager)
        {
            this.dbContext = dbContext;
            this.mapper = mapper;
            _openAIService = new OpenAIService();
            this.userManager = userManager;

        }

        //get all Websites
        //Get: https://Localhost:portnumber/api/Website?filterOn=Name&FilterQuery=Track&pageNumber=1&pageSize=10
        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery] string? filterOn, [FromQuery] string? filterQuery,
            [FromQuery] int pageNumber = 1, [FromQuery] int PageSize = 10)
        {
            var Website = dbContext.Websites.Include(w => w.AppUser).AsQueryable();

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
            var WebsiteModel = await dbContext.Websites.Include(w => w.AppUser).FirstOrDefaultAsync(x => x.WebsiteId == id);

            if (WebsiteModel == null)
                return NotFound();

            //map model tp Dto
            var WebsiteDto = mapper.Map<WebsiteDto>(WebsiteModel);

            return Ok(WebsiteDto);
        }

        // GET: https://localhost:portnumber/api/Website/user/{userId}
        [HttpGet("user/{userId}")]
        public async Task<IActionResult> GetByUserId([FromRoute] string userId)
        {
            var website = await dbContext.Websites
                .Include(w => w.AppUser)
                .FirstOrDefaultAsync(w => w.AppUserId == userId);

            if (website == null)
                return NotFound();

            var websiteDto = mapper.Map<WebsiteDto>(website);
            return Ok(websiteDto);
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

        [Authorize]
        [HttpPost("generate")]
        public async Task<IActionResult> GenerateWebsite([FromBody] GenerateRequest req)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var user = await userManager.FindByIdAsync(userId);
            if (user == null || string.IsNullOrWhiteSpace(user.ScholarJson))
                return BadRequest("No scholar profile data found.");

            user.Bio = req.Bio;
            user.Preferences = req.Preferences;
            var updateResult = await userManager.UpdateAsync(user);
            if (!updateResult.Succeeded)
                return BadRequest(updateResult.Errors);

            try
            {
                // 1) Generate HTML
                var html = await _openAIService.GeneratePortfolioHtmlAsync(user.ScholarJson, user.Bio, user.Preferences);

                // 2) Build or update slug + record
                var slug = $"{user.UserName.Replace(" ", "-")}-{Guid.NewGuid():N}".Substring(0, 30);
                var existing = await dbContext.Websites
                    .FirstOrDefaultAsync(w => w.AppUserId == userId);

                if (existing != null)
                {
                    existing.HtmlContent = html;
                    existing.LastModified = DateTime.UtcNow;
                    await dbContext.SaveChangesAsync();
                    return Ok(new { message = "Website updated!", url = existing.HostUrl });
                }

                var ws = new Website
                {
                    WebsiteId = Guid.NewGuid(),
                    AppUserId = userId,
                    Name = $"{user.UserName}'s Portfolio",
                    HtmlContent = html,
                    Slug = slug,
                    HostUrl = $"https://localhost:7138/api/Website/{slug}",
                    CreationDate = DateTime.UtcNow,
                    LastModified = DateTime.UtcNow
                };

                dbContext.Websites.Add(ws);
                await dbContext.SaveChangesAsync();

                return Ok(new { message = "Website generated!", url = ws.HostUrl });
            }
            catch (Exception ex)
            {
                Console.WriteLine("EXCEPTION FULL: " + ex.ToString());
                return StatusCode(500, "Internal Error: " + ex.Message);
            }
        }

        [HttpGet("{slug}")]
        [AllowAnonymous]
        public async Task<IActionResult> GetBySlug(string slug)
        {
            var site = await dbContext.Websites
                                .FirstOrDefaultAsync(w => w.Slug == slug);
            if (site == null) return NotFound();
            return Content(site.HtmlContent, "text/html");
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
