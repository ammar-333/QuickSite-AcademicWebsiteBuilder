using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace backend.API.Models;

public partial class QuickSiteDbContext : DbContext
{
    public QuickSiteDbContext()
    {
    }

    public QuickSiteDbContext(DbContextOptions<QuickSiteDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<AcademicProfile> AcademicProfiles { get; set; }

    public virtual DbSet<Admin> Admins { get; set; }

    public virtual DbSet<Customer> Customers { get; set; }

    public virtual DbSet<Payment> Payments { get; set; }

    public virtual DbSet<Template> Templates { get; set; }

    public virtual DbSet<Website> Websites { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=MYLAPTOP\\SQLEXPRESS;Database=QuickSiteDb;Trusted_Connection=True;TrustServerCertificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<AcademicProfile>(entity =>
        {
            entity.HasKey(e => e.ProfileId).HasName("PK__Academic__7D417C79B8B0EFB5");

            entity.Property(e => e.ProfileId).HasColumnName("profileId");
            entity.Property(e => e.CustomerId).HasColumnName("customerId");
            entity.Property(e => e.GoogleScholarUrl)
                .HasMaxLength(255)
                .HasColumnName("googleScholarUrl");
            entity.Property(e => e.Orcidurl)
                .HasMaxLength(255)
                .HasColumnName("ORCIDUrl");
            entity.Property(e => e.ProfileList).HasColumnName("profileList");

            entity.HasOne(d => d.Customer).WithMany(p => p.AcademicProfiles)
                .HasForeignKey(d => d.CustomerId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__AcademicP__custo__46E78A0C");
        });

        modelBuilder.Entity<Admin>(entity =>
        {
            entity.HasKey(e => e.AdminId).HasName("PK__Admin__AD0500A614B7B4F2");

            entity.ToTable("Admin");

            entity.HasIndex(e => e.AdminEmail, "UQ__Admin__9A3ED53FA53F9172").IsUnique();

            entity.Property(e => e.AdminId).HasColumnName("adminId");
            entity.Property(e => e.AdminEmail)
                .HasMaxLength(255)
                .HasColumnName("adminEmail");
            entity.Property(e => e.AdminName)
                .HasMaxLength(100)
                .HasColumnName("adminName");
            entity.Property(e => e.AdminPass)
                .HasMaxLength(255)
                .HasColumnName("adminPass");

            entity.HasMany(d => d.Customers).WithMany(p => p.Admins)
                .UsingEntity<Dictionary<string, object>>(
                    "Manage",
                    r => r.HasOne<Customer>().WithMany()
                        .HasForeignKey("CustomerId")
                        .OnDelete(DeleteBehavior.ClientSetNull)
                        .HasConstraintName("FK__Manage__customer__48CFD27E"),
                    l => l.HasOne<Admin>().WithMany()
                        .HasForeignKey("AdminId")
                        .OnDelete(DeleteBehavior.ClientSetNull)
                        .HasConstraintName("FK__Manage__adminId__47DBAE45"),
                    j =>
                    {
                        j.HasKey("AdminId", "CustomerId").HasName("PK__Manage__66641C115BB22744");
                        j.ToTable("Manage");
                        j.IndexerProperty<int>("AdminId").HasColumnName("adminId");
                        j.IndexerProperty<int>("CustomerId").HasColumnName("customerId");
                    });
        });

        modelBuilder.Entity<Customer>(entity =>
        {
            entity.HasKey(e => e.CustomerId).HasName("PK__Customer__B611CB7D3F7C3838");

            entity.ToTable("Customer");

            entity.HasIndex(e => e.CustomerEmail, "UQ__Customer__FFE82D72E41E4F7E").IsUnique();

            entity.Property(e => e.CustomerId).HasColumnName("customerId");
            entity.Property(e => e.Age).HasColumnName("age");
            entity.Property(e => e.CustomerEmail)
                .HasMaxLength(255)
                .HasColumnName("customerEmail");
            entity.Property(e => e.CustomerName)
                .HasMaxLength(100)
                .HasColumnName("customerName");
            entity.Property(e => e.CustomerPass)
                .HasMaxLength(255)
                .HasColumnName("customerPass");
            entity.Property(e => e.Gender)
                .HasMaxLength(10)
                .HasColumnName("gender");
        });

        modelBuilder.Entity<Payment>(entity =>
        {
            entity.HasKey(e => e.PaymentId).HasName("PK__Payment__A0D9EFC6A4E4A0D2");

            entity.ToTable("Payment");

            entity.Property(e => e.PaymentId).HasColumnName("paymentId");
            entity.Property(e => e.Amount)
                .HasColumnType("decimal(10, 2)")
                .HasColumnName("amount");
            entity.Property(e => e.CustomerId).HasColumnName("customerId");
            entity.Property(e => e.PaymentHistory).HasColumnName("paymentHistory");
            entity.Property(e => e.Status)
                .HasMaxLength(50)
                .HasColumnName("status");

            entity.HasOne(d => d.Customer).WithMany(p => p.Payments)
                .HasForeignKey(d => d.CustomerId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Payment__custome__49C3F6B7");
        });

        modelBuilder.Entity<Template>(entity =>
        {
            entity.HasKey(e => e.TemplateId).HasName("PK__Template__530F3800B2A5CEFE");

            entity.ToTable("Template");

            entity.Property(e => e.TemplateId).HasColumnName("templateId");
            entity.Property(e => e.Description).HasColumnName("description");
        });

        modelBuilder.Entity<Website>(entity =>
        {
            entity.HasKey(e => e.WebsiteId).HasName("PK__Website__638058DFF4A280DF");

            entity.ToTable("Website");

            entity.Property(e => e.WebsiteId).HasColumnName("websiteId");
            entity.Property(e => e.CreationDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime")
                .HasColumnName("creationDate");
            entity.Property(e => e.CustomerId).HasColumnName("customerId");
            entity.Property(e => e.HostUrl)
                .HasMaxLength(255)
                .HasColumnName("hostUrl");
            entity.Property(e => e.LastModified)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime")
                .HasColumnName("lastModified");
            entity.Property(e => e.MetaData).HasColumnName("metaData");
            entity.Property(e => e.TemplateId).HasColumnName("templateId");
            entity.Property(e => e.Theme)
                .HasMaxLength(100)
                .HasColumnName("theme");

            entity.HasOne(d => d.Customer).WithMany(p => p.Websites)
                .HasForeignKey(d => d.CustomerId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Website__custome__4AB81AF0");

            entity.HasOne(d => d.Template).WithMany(p => p.Websites)
                .HasForeignKey(d => d.TemplateId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Website__templat__4BAC3F29");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
