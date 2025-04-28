using System;
using System.Collections.Generic;

namespace backend.API.Models;

public partial class Website
{
    public int WebsiteId { get; set; }

    public int CustomerId { get; set; }

    public int TemplateId { get; set; }

    public string HostUrl { get; set; } = null!;

    public string? MetaData { get; set; }

    public string? Theme { get; set; }

    public DateTime? CreationDate { get; set; }

    public DateTime? LastModified { get; set; }

    public virtual Customer Customer { get; set; } = null!;

    public virtual Template Template { get; set; } = null!;
}
