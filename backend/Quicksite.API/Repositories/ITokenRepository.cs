using Microsoft.AspNetCore.Identity;
using Quicksite.API.Models.Domains;

namespace Quicksite.API.Repositories
{
    public interface ITokenRepository
    {
        string CreateJWTToken(AppUser user);

    }
}
