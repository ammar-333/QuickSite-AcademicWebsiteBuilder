using System.ComponentModel.DataAnnotations;

namespace Quicksite.API.Models.Dtos
{
    public class UpdateTemplateDto
    {
        [StringLength(500)]
        public string? Description { get; set; }

    }
}
