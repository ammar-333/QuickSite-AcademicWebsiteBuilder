using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Quicksite.API.Data;
using Quicksite.API.Models.Domains;
using Quicksite.API.Models.Dtos;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.Data;
using Quicksite.API.Repositories;
using System.Security.Claims;
using Quicksite.API.Services;
using System.Threading.Tasks;

namespace Quicksite.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly QuicksiteDbContext dbContext;
        private readonly IMapper mapper;
        private readonly UserManager<AppUser> userManager;
        private readonly ITokenRepository tokenRepository;
        private readonly ScholarService _scholarService;

        public CustomerController(UserManager<AppUser> userManager, ITokenRepository tokenRepository, QuicksiteDbContext dbContext, IMapper mapper, ScholarService scholarService)
        {
            this.userManager = userManager;
            this.tokenRepository = tokenRepository;
            this.dbContext = dbContext;
            this.mapper = mapper;
            _scholarService = scholarService;

        }

        //GetAll customers
        //Get: https://Localhost:portnumbrt//api/Customer
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var users = await userManager.Users
            .Include(u => u.Website)
            .Include(u => u.Payment)
            .ToListAsync();

            var customerDtos = mapper.Map<List<CustomerDto>>(users); 

            return Ok(customerDtos);
        }


        [Authorize]
        [HttpGet("profile")]
        public async Task<IActionResult> GetProfile()
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

            var user = await userManager.FindByIdAsync(userId);
            if (user == null) return NotFound();

            return Ok(new
            {
                Id = user.Id,
                Username = user.UserName,
                Email = user.Email,
                Major = user.Major,
                College = user.College,
                googleScholar = user.googleScholar,
                isWebsiteCreated = user.isWebsiteCreated,
            });
        }


        //create new customer 
        //Post https://localhost:portnumber/api/Customer
        [HttpPost]
        [Route("Register")]
        public async Task<IActionResult> Create([FromBody] AddCustomerDto addCustomerDto)
        {
            var identityUser = new AppUser
            {
                UserName = addCustomerDto.CustomerName,
                Email = addCustomerDto.CustomerEmail,
                College = addCustomerDto.College,
                Major = addCustomerDto.Major,
                googleScholar = addCustomerDto.googleScholar
            };

            var identityResult = await userManager.CreateAsync(identityUser, addCustomerDto.CustomerPass);

            if (identityResult.Succeeded)
            {

                return Ok("you were registered successfully");
            }

            else
            {
                var errors = identityResult.Errors.Select(e => e.Description);
                return BadRequest(errors);
            }

        }

        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> Login([FromBody] LoginRequestDto LoginRequestDto)
        {
            var user = await userManager.FindByEmailAsync(LoginRequestDto.Email);

            if (user != null)
            {
                var checkPasswordResult = await userManager.CheckPasswordAsync(user, LoginRequestDto.Password);

                if (checkPasswordResult)
                {
                    // Creat Token
                    var jwtToken = tokenRepository.CreateJWTToken(user);

                    var response = new LoginResponseDto
                    {
                        JwtToken = jwtToken
                    };

                    return Ok(response);
                }
            }
            return BadRequest("Username or password incorrect");
        }

        [Authorize]
        [HttpGet("scholar-json-url")]
        public async Task<IActionResult> SaveScholar([FromQuery] string scholarUrl)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var user = await userManager.FindByIdAsync(userId);
            if (user == null) return Unauthorized();

            try
            {
                await _scholarService.SaveScholarProfileAsync(user, scholarUrl, userManager);
                user.isWebsiteCreated = "true";
                var result = await userManager.UpdateAsync(user);
                return Ok(new { message = "Scholar profile saved." });
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }


        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> Update([FromRoute] Guid id, [FromBody] UpdateCustomerDto updateCustomerDto)
        {
            // Check if AppUser exists
            var appUser = await userManager.Users.FirstOrDefaultAsync(u => u.Id == id.ToString());
            if (appUser == null)
                return NotFound();

            // Check if email is already taken by another user
            var existingUser = await userManager.FindByEmailAsync(appUser.Email);
            if (existingUser != null && existingUser.Id != appUser.Id)
                return Conflict("Email already registered.");

            // Make the changes (manual mapping from UpdateCustomerDto to AppUser)
            appUser.UserName = updateCustomerDto.CustomerName;
            appUser.Email = updateCustomerDto.CustomerEmail;
            appUser.College = updateCustomerDto.College;
            appUser.Major = updateCustomerDto.Major;
            appUser.googleScholar = updateCustomerDto.googleScholar;
            appUser.isWebsiteCreated = updateCustomerDto.isWebsiteCreated;

            var result = await userManager.UpdateAsync(appUser);
            if (!result.Succeeded)
                return BadRequest(result.Errors);

            return Ok();
        }


        //Delete a customer
        //Delete: https://localhost:portnumber/api/Customer/{id}
        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete([FromRoute] Guid id)
        {
            var appUser = await userManager.FindByIdAsync(id.ToString());

            if (appUser == null)
                return NotFound();

            // Delete the user
            var result = await userManager.DeleteAsync(appUser);

            if (!result.Succeeded)
                return BadRequest(result.Errors);

            return Ok();
        }
    }
}