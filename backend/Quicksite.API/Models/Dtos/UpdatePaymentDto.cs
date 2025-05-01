namespace Quicksite.API.Models.Dtos
{
    public class UpdatePaymentDto
    {
        public Guid CustomerId { get; set; }

        public decimal Amount { get; set; }

        public string Status { get; set; } = null!;

        public string? PaymentHistory { get; set; }
    }
}
