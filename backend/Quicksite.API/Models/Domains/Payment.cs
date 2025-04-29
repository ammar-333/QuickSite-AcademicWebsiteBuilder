namespace Quicksite.API.Models.Domains
{
    public class Payment
    {
        public Guid PaymentId { get; set; }

        public Guid CustomerId { get; set; }

        public decimal Amount { get; set; }

        public string Status { get; set; } = null!;

        public string? PaymentHistory { get; set; }

        public virtual Customer Customer { get; set; } = null!;
    }
}
