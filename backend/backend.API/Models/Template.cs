using System;
using System.Collections.Generic;

namespace backend.API.Models;

public partial class Template
{
    public int TemplateId { get; set; }

    public string? Description { get; set; }

    public virtual ICollection<Website> Websites { get; set; } = new List<Website>();
}
