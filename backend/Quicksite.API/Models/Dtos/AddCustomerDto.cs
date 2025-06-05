using System.ComponentModel.DataAnnotations;

namespace Quicksite.API.Models.Dtos
{
    public class AddCustomerDto
    {
        [Required]
        [EmailAddress]
        public string CustomerEmail { get; set; }
        
        [Required]
        [StringLength(20)]
        public string CustomerName { get; set; }

        [Required]
        [MinLength(8)]
        public string CustomerPass { get; set; }
        
        public string? College { get; set; }

        public string? Major { get; set; }
        public string? googleScholar { get; set; }

    }
}
