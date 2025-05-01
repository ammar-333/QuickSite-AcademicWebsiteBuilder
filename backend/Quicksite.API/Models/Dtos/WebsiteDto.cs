using Quicksite.API.Models.Domains;

namespace Quicksite.API.Models.Dtos
{
    public class WebsiteDto
    {
        public Guid WebsiteId { get; set; }

        public string HostUrl { get; set; } = null!;

        public string? MetaData { get; set; }

        public string? Theme { get; set; }

        public DateTime? CreationDate { get; set; }

        public DateTime? LastModified { get; set; }

        public virtual Customer Customer { get; set; } = null!;

        public virtual Template? Template { get; set; }
    }
}
