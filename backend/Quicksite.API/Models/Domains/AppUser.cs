using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Identity;

namespace Quicksite.API.Models.Domains
{
    public class AppUser : IdentityUser
    {
        public string? College { get; set; }
        public string? Major {  get; set; }
        public string? isWebsiteCreated { get; set; }
        public string? googleScholar { get; set; }
        public string? ScholarJson { get; set; }
        public byte[]? ScholarPdf { get; set; }
        public virtual Payment? Payment { get; set; }
        public virtual Website? Website { get; set; }
    }
}
