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
using Microsoft.OpenApi.Models;
using PaypalServerSdk.Standard;
using Quicksite.API.Configuration;
using Microsoft.Extensions.Options;
using PaypalServerSdk.Standard.Authentication;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c => {
    c.SwaggerDoc("v1", new() { Title = "QuickSite API", Version = "v1" });
    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Name = "Authorization",
        Type = SecuritySchemeType.ApiKey,
        Scheme = "Bearer",
        In = ParameterLocation.Header,
        Description = "Enter ‘Bearer {token}’"
    });
    c.AddSecurityRequirement(new OpenApiSecurityRequirement {
    {
      new OpenApiSecurityScheme {
        Reference = new OpenApiReference {
          Type = ReferenceType.SecurityScheme,
          Id   = "Bearer"
        }
      },
      new string[] { }
    }
  });
});


// Allow react Frontend to access via port number
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        builder => builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
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

builder.Services.Configure<PayPalOptions>(
    builder.Configuration.GetSection("Paypal"));

builder.Services.AddSingleton(svc => {
    var opts = svc.GetRequiredService<IOptions<PayPalOptions>>().Value;

    return new PaypalServerSdkClient.Builder()
        .Environment(PaypalServerSdk.Standard.Environment.Sandbox)
        .ClientCredentialsAuth(
            new ClientCredentialsAuthModel.Builder(
                opts.ClientId,
                opts.ClientSecret
            ).Build()
        )
        .LoggingConfig(cfg => cfg
        .LogLevel(LogLevel.Information)
        .RequestConfig(r => r.Body(true))
        .ResponseConfig(r => r.Headers(true))
        )
        .Build();
});

builder.Services.AddHttpClient<ScholarService>();
builder.Services.AddScoped<ScholarService>();

builder.Services
  .AddHttpClient<OpenAIService>(client => {
      client.Timeout = TimeSpan.FromMinutes(5);
  }); 
builder.Services.AddScoped<OpenAIService>();


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
