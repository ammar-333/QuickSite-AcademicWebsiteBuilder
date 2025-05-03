namespace Quicksite.API.Models.Dtos
{
    public class UpdateWebsiteDto
    {
        public Guid? TemplateId { get; set; }

        public string Name { get; set; } = null!;

        public string HostUrl { get; set; } = null!;

        public string? MetaData { get; set; }

        public string? Theme { get; set; }

        public DateTime? CreationDate { get; set; }

        public DateTime? LastModified { get; set; }
    }
}
