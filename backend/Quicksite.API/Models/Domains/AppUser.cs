using Microsoft.AspNetCore.Identity;

namespace Quicksite.API.Models.Domains
{
    public class AppUser : IdentityUser
    {
        public string College { get; set; }
        public string Major {  get; set; }
        public virtual Customer Customer { get; set; }
    }
}
