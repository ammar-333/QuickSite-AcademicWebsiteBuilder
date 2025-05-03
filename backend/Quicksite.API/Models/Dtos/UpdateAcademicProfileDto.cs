using System.ComponentModel.DataAnnotations;

namespace Quicksite.API.Models.Dtos
{
    public class UpdateAcademicProfileDto
    {
        [Required(ErrorMessage = "Customer ID is required.")]
        public Guid CustomerId { get; set; }

        [Required(ErrorMessage = "Google Scholar URL is required.")]
        [Url(ErrorMessage = "Please enter a valid URL.")]
        public string? GoogleScholarUrl { get; set; }
    }
}
