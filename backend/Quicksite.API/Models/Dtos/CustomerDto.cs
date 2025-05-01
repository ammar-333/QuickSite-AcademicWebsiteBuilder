using Quicksite.API.Models.Domains;

namespace Quicksite.API.Models.Dtos
{
    public class CustomerDto
    {
        public Guid CustomerId { get; set; }
        public string CustomerEmail { get; set; }
        public string CustomerName { get; set; }
        public string CustomerPass { get; set; }
        public string? Gender { get; set; }
        public int? Age { get; set; }
        public virtual AcademicProfile AcademicProfile { get; set; } = null!;
        public virtual Payment? Payment { get; set; }
        public virtual Website? Website { get; set; }
    }
}
