namespace Quicksite.API.Models.Dtos
{
    public class AdminDto
    {
        public Guid AdminId { get; set; }
        public string AdminEmail { get; set; } = null!;
        public string AdminName { get; set; } = null!;
        public string AdminPass { get; set; } = null!;
    }
}
