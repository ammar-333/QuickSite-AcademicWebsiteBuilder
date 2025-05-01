using Quicksite.API.Models.Domains;

namespace Quicksite.API.Models.Dtos
{
    public class AcademicProfileDto
    {
        public Guid AcademicProfileId { get; set; }

        public string? GoogleScholarUrl { get; set; }

        public virtual Customer Customer { get; set; } = null!;
    }
}
