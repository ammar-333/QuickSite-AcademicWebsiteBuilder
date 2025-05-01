namespace Quicksite.API.Models.Dtos
{
    public class UpdateAdminDto
    {
        public string AdminEmail { get; set; } = null!;
        public string AdminName { get; set; } = null!;
        public string AdminPass { get; set; } = null!;
    }
}
