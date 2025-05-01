namespace Quicksite.API.Models.Dtos
{
    public class AddPaymentDto
    {
        public Guid CustomerId { get; set; }

        public decimal Amount { get; set; }

        public string Status { get; set; } = null!;

        public string? PaymentHistory { get; set; }
    }
}
