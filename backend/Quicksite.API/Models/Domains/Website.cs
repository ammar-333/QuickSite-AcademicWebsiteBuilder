namespace Quicksite.API.Models.Domains
{
    public class Website
    {
        public Guid WebsiteId { get; set; }

        public Guid CustomerId { get; set; }

        public Guid TemplateId { get; set; }

        public string HostUrl { get; set; } = null!;

        public string? MetaData { get; set; }

        public string? Theme { get; set; }

        public DateTime? CreationDate { get; set; }

        public DateTime? LastModified { get; set; }

        public virtual Customer Customer { get; set; } = null!;

        public virtual Template Template { get; set; } = null!;
    }
}
