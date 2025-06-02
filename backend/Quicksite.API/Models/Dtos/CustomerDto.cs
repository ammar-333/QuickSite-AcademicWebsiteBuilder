using Quicksite.API.Models.Domains;
using System.ComponentModel.DataAnnotations;

namespace Quicksite.API.Models.Dtos
{
    public class CustomerDto
    {
        public Guid CustomerId { get; set; }
        public string CustomerEmail { get; set; }
        public string CustomerName { get; set; }
        public string CustomerPass { get; set; }
        public string? College { get; set; }
        public string? Major { get; set; }
        public virtual AcademicProfile AcademicProfile { get; set; } = null!;
        public virtual Payment? Payment { get; set; }
        public virtual Website? Website { get; set; }
    }
}
