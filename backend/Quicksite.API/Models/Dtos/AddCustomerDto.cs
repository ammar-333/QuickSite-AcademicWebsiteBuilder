namespace Quicksite.API.Models.Dtos
{
    public class AddCustomerDto
    {
        public string CustomerEmail { get; set; }
        public string CustomerName { get; set; }
        public string CustomerPass { get; set; }
        public string? Gender { get; set; }
        public int? Age { get; set; }
    }
}
