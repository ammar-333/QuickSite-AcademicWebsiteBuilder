using Microsoft.EntityFrameworkCore;
using Quicksite.API.Models.Domains;

namespace Quicksite.API.Data
{
    public class QuicksiteDbContext : DbContext
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


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // 1-to-1 relationship configuration
            modelBuilder.Entity<Customer>()
                .HasOne(c => c.AcademicProfile)
                .WithOne(a => a.Customer)
                .HasForeignKey<AcademicProfile>(a => a.CustomerId);

            modelBuilder.Entity<Customer>()
            .HasOne(c => c.Payment)
            .WithOne(p => p.Customer)
            .HasForeignKey<Payment>(p => p.CustomerId);

            modelBuilder.Entity<Customer>()
            .HasOne(c => c.Website)
            .WithOne(w => w.Customer)
            .HasForeignKey<Website>(w => w.CustomerId);

            base.OnModelCreating(modelBuilder);
        }

    }
}
