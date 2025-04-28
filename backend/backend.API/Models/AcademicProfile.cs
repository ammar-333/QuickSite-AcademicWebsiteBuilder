using System;
using System.Collections.Generic;

namespace backend.API.Models;

public partial class AcademicProfile
{
    public int ProfileId { get; set; }

    public int CustomerId { get; set; }

    public string? Orcidurl { get; set; }

    public string? GoogleScholarUrl { get; set; }

    public string? ProfileList { get; set; }

    public virtual Customer Customer { get; set; } = null!;
}
