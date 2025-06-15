using System.Text.Json.Serialization;

namespace Quicksite.API.Models.Domains
{
    public class Payment
    {
        public Guid PaymentId { get; set; }

        public string AppUserId { get; set; } = null!;

        public decimal Amount { get; set; }

        public string Status { get; set; } = null!;

        public string Currency { get; set; } = "USD";

        public string? PaymentHistory { get; set; }

        [JsonIgnore]
        public virtual AppUser AppUser { get; set; } = null!;
    }
}
