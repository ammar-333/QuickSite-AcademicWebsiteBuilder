namespace Quicksite.API.Models.Domains
{
    public class Admin
    {
        public Guid AdminId { get; set; }

        public string AdminEmail { get; set; } = null!;

        public string AdminName { get; set; } = null!;

        public string AdminPass { get; set; } = null!;

    }
}
