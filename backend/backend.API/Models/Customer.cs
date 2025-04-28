using System;
using System.Collections.Generic;

namespace backend.API.Models;

public partial class Customer
{
    public int CustomerId { get; set; }

    public string CustomerEmail { get; set; } = null!;

    public string CustomerName { get; set; } = null!;

    public string CustomerPass { get; set; } = null!;

    public string? Gender { get; set; }

    public int? Age { get; set; }

    public virtual ICollection<AcademicProfile> AcademicProfiles { get; set; } = new List<AcademicProfile>();

    public virtual ICollection<Payment> Payments { get; set; } = new List<Payment>();

    public virtual ICollection<Website> Websites { get; set; } = new List<Website>();

    public virtual ICollection<Admin> Admins { get; set; } = new List<Admin>();
}
