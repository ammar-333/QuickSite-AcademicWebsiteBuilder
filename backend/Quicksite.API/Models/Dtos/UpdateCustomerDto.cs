using System.ComponentModel.DataAnnotations;

namespace Quicksite.API.Models.Dtos
{
    public class UpdateCustomerDto
    {
        [Required]
        [EmailAddress]
        public string CustomerEmail { get; set; }

        [Required]
        [StringLength(20)]
        public string CustomerName { get; set; }

        public string? College { get; set; }

        public string? Major { get; set; }

        public string? googleScholar { get; set; }

        public string? isWebsiteCreated { get; set; }

    }
}
