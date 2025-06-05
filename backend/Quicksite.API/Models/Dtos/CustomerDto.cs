using Quicksite.API.Models.Domains;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Quicksite.API.Models.Dtos
{
    public class CustomerDto
    {
        public string Id { get; set; }  
        public string UserName { get; set; }  
        public string Email { get; set; } // Maps from AppUser.Email
        public string? College { get; set; }
        public string? Major { get; set; }
        public string? googleScholar { get; set; }

        public string? isWebsiteCreated { get; set; }
        [JsonIgnore]
        public WebsiteDto? Website { get; set; }
        [JsonIgnore]
        public virtual Payment? Payment { get; set; }
    }
}
