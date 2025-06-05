using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Quicksite.API.Data;
using Quicksite.API.Mapping;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.AspNetCore.Identity;
using Quicksite.API.Repositories;
using Quicksite.API.Services;
using Quicksite.API.Models.Domains;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Allow react Frontend to access via port number
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        Policy => Policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
});

//Debendency injection to DbContext class
builder.Services.AddDbContext<QuicksiteDbContext>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("QuickSiteConnectionString")));


builder.Services.AddScoped<ITokenRepository, TokenRepository>();

builder.Services.AddAutoMapper(typeof(AutoMapperProfiles));

//builder.Services.AddIdentityCore<IdentityUser>()
//    .AddTokenProvider<DataProtectorTokenProvider<IdentityUser>>("QuickSite")
//    .AddEntityFrameworkStores<QuicksiteDbContext>()
//    .AddDefaultTokenProviders();

builder.Services.AddIdentityCore<AppUser>()
.AddRoles<IdentityRole>()
.AddTokenProvider<DataProtectorTokenProvider<AppUser>>("QuickSite")
.AddEntityFrameworkStores<QuicksiteDbContext>()
.AddDefaultTokenProviders();

builder.Services.Configure<IdentityOptions>(options =>
{
    options.Password.RequireDigit = false;
    options.Password.RequireLowercase = false;
    options.Password.RequireNonAlphanumeric = false;
    options.Password.RequireUppercase = false;
    options.Password.RequiredLength = 6;
    options.Password.RequiredUniqueChars = 1;
    options.User.AllowedUserNameCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012345678 9";
});


builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = builder.Configuration["Jwt:Issuer"],
        ValidAudience = builder.Configuration["Jwt:Audience"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
    });


builder.Services.AddHttpClient();
builder.Services.AddScoped<ScholarService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors("AllowAll");

app.UseHttpsRedirection();

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();
