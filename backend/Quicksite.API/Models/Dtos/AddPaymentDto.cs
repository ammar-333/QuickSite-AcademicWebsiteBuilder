using System.ComponentModel.DataAnnotations;

namespace Quicksite.API.Models.Dtos
{
    public class AddPaymentDto
    {
        [Required]
        public string AppUserId { get; set; } = null!;

        [Required]
        public decimal Amount { get; set; }

        [Required]
        [RegularExpression("Success|Pending|Failed", ErrorMessage = "Status must be Success, Pending, or Failed.")]
        public string Status { get; set; } = null!;


        public string? PaymentHistory { get; set; }
    }
}
