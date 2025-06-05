using System.Text.Json.Serialization;

namespace Quicksite.API.Models.Domains
{
    public class Website
    {
        public Guid WebsiteId { get; set; }
        public string AppUserId { get; set; } = null!;
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
