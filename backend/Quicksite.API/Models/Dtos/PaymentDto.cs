using System.Text.Json.Serialization;
using Quicksite.API.Models.Domains;

namespace Quicksite.API.Models.Dtos
{
    public class PaymentDto
    {
        public Guid PaymentId { get; set; }

        public decimal Amount { get; set; }

        public string Status { get; set; } = null!;

        public string? PaymentHistory { get; set; }
        [JsonIgnore]
        public virtual AppUser AppUser { get; set; } = null!;
    }
}
