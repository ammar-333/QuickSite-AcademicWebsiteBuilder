namespace Quicksite.API.Models.Domains
{
    public class Template
    {
        public Guid TemplateId { get; set; }

        public string? Description { get; set; }

        public virtual ICollection<Website> Websites { get; set; } = new List<Website>();
    }
}
