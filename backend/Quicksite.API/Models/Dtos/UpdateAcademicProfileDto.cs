namespace Quicksite.API.Models.Dtos
{
    public class UpdateAcademicProfileDto
    {
        public Guid CustomerId { get; set; }

        public string? GoogleScholarUrl { get; set; }
    }
}
