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
    }
}
