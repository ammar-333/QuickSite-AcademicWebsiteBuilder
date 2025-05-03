using System.ComponentModel.DataAnnotations;

namespace Quicksite.API.Models.Dtos
{
    public class UpdateAdminDto
    {
        [Required]
        [EmailAddress]
        public string AdminEmail { get; set; } = null!;

        [Required]
        [StringLength(20)]
        public string AdminName { get; set; } = null!;

        [Required]
        [MinLength(6)]
        public string AdminPass { get; set; } = null!;
    }
}
