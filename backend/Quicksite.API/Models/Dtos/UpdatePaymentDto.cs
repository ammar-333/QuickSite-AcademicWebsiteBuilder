using System.ComponentModel.DataAnnotations;

namespace Quicksite.API.Models.Dtos
{
    public class UpdatePaymentDto
    {
        [Required]
        public Guid CustomerId { get; set; }

        [Required]
        public decimal Amount { get; set; }

        [Required]
        [RegularExpression("Success|Pending|Failed", ErrorMessage = "Status must be Success, Pending, or Failed.")]
        public string Status { get; set; } = null!;


        public string? PaymentHistory { get; set; }
    }
}
