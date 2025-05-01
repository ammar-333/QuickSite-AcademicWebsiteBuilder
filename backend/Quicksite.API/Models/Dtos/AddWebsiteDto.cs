using Quicksite.API.Models.Domains;

namespace Quicksite.API.Models.Dtos
{
    public class AddWebsiteDto
    {
        public Guid CustomerId { get; set; }

        public Guid? TemplateId { get; set; }

        public string HostUrl { get; set; } = null!;

        public string? MetaData { get; set; }

        public string? Theme { get; set; }

        public DateTime? CreationDate { get; set; }

        public DateTime? LastModified { get; set; }
    }
}
