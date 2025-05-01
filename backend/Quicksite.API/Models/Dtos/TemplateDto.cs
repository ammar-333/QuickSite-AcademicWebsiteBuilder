using Quicksite.API.Models.Domains;

namespace Quicksite.API.Models.Dtos
{
    public class TemplateDto
    {
        public Guid TemplateId { get; set; }

        public string? Description { get; set; }
    }
}
