using System.ComponentModel.DataAnnotations;

namespace Quicksite.API.Models.Dtos
{
    public class AddTemplateDto
    {
        [StringLength(500)]
        public string? Description { get; set; }

    }
}
