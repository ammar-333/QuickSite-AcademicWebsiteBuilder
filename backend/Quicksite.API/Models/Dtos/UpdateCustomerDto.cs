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

        [Required]
        [MinLength(8)]
        public string CustomerPass { get; set; }

        [Required]
        [RegularExpression("Male|Female", ErrorMessage = "Gender must be 'Male' or 'Female'.")]
        public string? Gender { get; set; }

        [Range(18, 100, ErrorMessage = "Age must be between 18 and 100")]
        public int? Age { get; set; }
    }
}
