using System.Text.Json.Serialization;

namespace Quicksite.API.Models.Domains
{
    public class AcademicProfile
    {
        public Guid AcademicProfileId { get; set; }

        public Guid CustomerId { get; set; }

        public string? GoogleScholarUrl { get; set; }

        [JsonIgnore]
        public virtual Customer Customer { get; set; } = null!;
    }
}
