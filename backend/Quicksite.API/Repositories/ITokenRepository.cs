using Microsoft.AspNetCore.Identity;

namespace Quicksite.API.Repositories
{
    public interface ITokenRepository
    {
        string CreateJWTToken(IdentityUser user);

    }
}
