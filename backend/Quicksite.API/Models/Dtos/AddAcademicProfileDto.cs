namespace Quicksite.API.Models.Dtos
{
    public class AddAcademicProfileDto
    {
        public Guid CustomerId { get; set; }

        public string? GoogleScholarUrl { get; set; }
    }
}
