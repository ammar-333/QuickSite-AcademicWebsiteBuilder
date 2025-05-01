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
    public class AcademicProfileController : ControllerBase
    {
        private readonly QuicksiteDbContext dbContext;
        private readonly IMapper mapper;

        public AcademicProfileController(QuicksiteDbContext dbContext, IMapper mapper)
        {
            this.dbContext = dbContext;
            this.mapper = mapper;
        }

        //GetAll AcademicProfiles
        // GET: https://Localhost:portnumbrt//api/AcademicProfile
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            //get all the AcademicProfiles
            var AcademicProfileModel = await dbContext.AcademicProfiles.Include("Customer").ToListAsync();

            //map model to Dto
            var AcademicProfileDto = mapper.Map<List<AcademicProfileDto>>(AcademicProfileModel);

            return Ok(AcademicProfileDto);
        }

        //Get one AcademicProfile
        // GET: https://Localhost:portnumbrt//api/AcademicProfile/{id}
        [HttpGet("{id:Guid}")]
        public async Task<IActionResult> GetById([FromRoute] Guid id)
        {
            var AcademicProfileModel = await dbContext.AcademicProfiles.Include("Customer").FirstOrDefaultAsync(x => x.AcademicProfileId == id);

            if (AcademicProfileModel == null) return NotFound();

            var AcademicProfileDto = mapper.Map<AcademicProfileDto>(AcademicProfileModel);

            return Ok(AcademicProfileDto);
        }

        //create new AcademicProfiles
        //POST:  https://localhost:portnumber/api/AcademicProfile
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] AddAcademicProfileDto addAcademicProfileDto)
        {

            var AcademicProfileModel = mapper.Map<AcademicProfile>(addAcademicProfileDto);

            //map to the db
            await dbContext.AcademicProfiles.AddAsync(AcademicProfileModel);
            await dbContext.SaveChangesAsync();

            var AcademicProfileDto = mapper.Map<AcademicProfileDto>(AcademicProfileModel);

            return Ok(AcademicProfileDto);
        }

        //Update an existing AcademicProfile
        // PUT: https://localhost:portnumber/api/AcademicProfile/{id}
        [HttpPut("{id:Guid}")]
        public async Task<IActionResult> Update([FromRoute] Guid id, [FromBody] UpdateAcademicProfileDto updateAcademicProfileDto)
        {
            //Check if AcademicProfile exists
            var AcademicProfileModel = await dbContext.AcademicProfiles.FindAsync(id);

            if (AcademicProfileModel == null)
                return NotFound();
            //make the changes
            AcademicProfileModel.GoogleScholarUrl = updateAcademicProfileDto.GoogleScholarUrl;

            await dbContext.SaveChangesAsync();

            var AcademicProfileDto = mapper.Map<AcademicProfileDto>(AcademicProfileModel);

            return Ok(AcademicProfileDto);
        }

        //Delete a AcademicProfile
        // DELETE: https://localhost:portnumber/api/AcademicProfile/{id}
        [HttpDelete("{id:Guid}")]
        public async Task<IActionResult> Delete([FromRoute] Guid id)
        {
            //Check if region exists
            var AcademicProfileModel = await dbContext.AcademicProfiles.FindAsync(id);

            if (AcademicProfileModel == null) return NotFound();

            //delete
            dbContext.AcademicProfiles.Remove(AcademicProfileModel);
            await dbContext.SaveChangesAsync();

            return Ok();
        }

    }
}
