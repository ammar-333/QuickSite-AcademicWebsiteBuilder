using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Quicksite.API.Models.Domains;

namespace Quicksite.API.Data
{
    public class QuicksiteDbContext : IdentityDbContext<AppUser>
    {
        public QuicksiteDbContext(DbContextOptions<QuicksiteDbContext> dbContextOptions) : base(dbContextOptions)
        {

        }


        //public virtual DbSet<Customer> Customers { get; set; }

        public virtual DbSet<Payment> Payments { get; set; }

        public virtual DbSet<Website> Websites { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // 1-to-1 relationship configuration

            modelBuilder.Entity<AppUser>()
            .HasOne(c => c.Payment)
            .WithOne(p => p.AppUser)
            .HasForeignKey<Payment>(p => p.AppUserId);

            modelBuilder.Entity<AppUser>()
            .HasOne(u => u.Website)
            .WithOne(w => w.AppUser)
            .HasForeignKey<Website>(w => w.AppUserId);

            base.OnModelCreating(modelBuilder);
        }
        public override async Task<int> SaveChangesAsync(bool acceptAllChangesOnSuccess, CancellationToken cancellationToken = default)
        {
            return await base.SaveChangesAsync(acceptAllChangesOnSuccess, cancellationToken);
        }

        //public override async Task<int> SaveChangesAsync(bool acceptAllChangesOnSuccess, CancellationToken cancellationToken = default)
        //{
        //    // Get users that are added or modified
        //    var users = ChangeTracker.Entries<AppUser>()
        //        .Where(e => e.State == EntityState.Added || e.State == EntityState.Modified)
        //        .Select(e => e.Entity)
        //        .ToList();

        //    // First save changes to get IDs for new users
        //    var result = await base.SaveChangesAsync(acceptAllChangesOnSuccess, cancellationToken);

        //    //foreach (var user in users)
        //    //{
        //    //    var customer = await Customers.FirstOrDefaultAsync(c => c.UserId == user.Id);

        //    //    if (customer == null)
        //    //    {
        //    //        // Create new customer record
        //    //        customer = new Customer
        //    //        {
        //    //            UserId = user.Id,
        //    //            CustomerEmail = user.Email,
        //    //            CustomerName = user.UserName,
        //    //            College = user.College,
        //    //            Major = user.Major
        //    //            // Password shouldn't be stored here - use Identity for auth
        //    //        };
        //    //        Customers.Add(customer);
        //    //    }
        //    //    else
        //    //    {
        //    //        // Update existing customer
        //    //        customer.CustomerEmail = user.Email;
        //    //        customer.CustomerName = user.UserName;
        //    //        customer.College = user.College;
        //    //        customer.Major = user.Major;
        //    //    }
        //    //}

        //    if (users.Any())
        //    {
        //        await base.SaveChangesAsync(acceptAllChangesOnSuccess, cancellationToken);
        //    }

        //    return result;
        //}
    }

    }

