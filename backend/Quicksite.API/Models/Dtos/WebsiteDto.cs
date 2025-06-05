using System.Text.Json.Serialization;
using Quicksite.API.Models.Domains;

namespace Quicksite.API.Models.Dtos
{
    public class WebsiteDto
    {
        public Guid WebsiteId { get; set; }

        public string Name { get; set; } = null!;

        public string HostUrl { get; set; } = null!;

        public string? MetaData { get; set; }

        public string? Theme { get; set; }

        public DateTime? CreationDate { get; set; }

        public DateTime? LastModified { get; set; }

        [JsonIgnore]
        public virtual AppUser AppUser { get; set; } = null!;
    }
}
