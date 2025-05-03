using Quicksite.API.Models.Domains;
using System.ComponentModel.DataAnnotations;

namespace Quicksite.API.Models.Dtos
{
    public class AddWebsiteDto
    {
        [Required]
        public Guid CustomerId { get; set; }

        public Guid? TemplateId { get; set; }

        [Required]
        [StringLength(50)]
        public string Name { get; set; } = null!;

        [Required]
        [Url(ErrorMessage = "HostUrl must be a valid URL.")]
        public string HostUrl { get; set; } = null!;

        [StringLength(250)]
        public string? MetaData { get; set; }

        [StringLength(100)]
        public string? Theme { get; set; }

        public DateTime? CreationDate { get; set; }

        public DateTime? LastModified { get; set; }
    }
}
