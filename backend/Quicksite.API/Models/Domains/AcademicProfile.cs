namespace Quicksite.API.Models.Domains
{
    public class AcademicProfile
    {
        public Guid AcademicProfileId { get; set; }

        public Guid CustomerId { get; set; }

        public string? GoogleScholarUrl { get; set; }

        public virtual Customer Customer { get; set; } = null!;
    }
}
