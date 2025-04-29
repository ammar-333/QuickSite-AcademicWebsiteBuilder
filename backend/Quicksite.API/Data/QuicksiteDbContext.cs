using Microsoft.EntityFrameworkCore;
using Quicksite.API.Models.Domains;

namespace Quicksite.API.Data
{
    public class QuicksiteDbContext: DbContext
    {
        public QuicksiteDbContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
        {
            
        }

        public virtual DbSet<AcademicProfile> AcademicProfiles { get; set; }

        public virtual DbSet<Admin> Admins { get; set; }

        public virtual DbSet<Customer> Customers { get; set; }

        public virtual DbSet<Payment> Payments { get; set; }

        public virtual DbSet<Template> Templates { get; set; }

        public virtual DbSet<Website> Websites { get; set; }
    }
}
