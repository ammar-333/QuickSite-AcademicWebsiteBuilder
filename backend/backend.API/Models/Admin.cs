using System;
using System.Collections.Generic;

namespace backend.API.Models;

public partial class Admin
{
    public int AdminId { get; set; }

    public string AdminEmail { get; set; } = null!;

    public string AdminName { get; set; } = null!;

    public string AdminPass { get; set; } = null!;

    public virtual ICollection<Customer> Customers { get; set; } = new List<Customer>();
}
