using System;
using System.IO;
using System.Net.Http;
using System.Threading.Tasks;
using PdfSharpCore.Drawing;
using PdfSharpCore.Pdf;
using Microsoft.AspNetCore.WebUtilities;
using Quicksite.API.Models.Domains;
using Microsoft.AspNetCore.Identity;

namespace Quicksite.API.Services
{
    public class ScholarService
    {
        private readonly HttpClient _httpClient;
        private readonly string _apiKey = "b0e3a608a96eb4d78b6681063397eada8d320cf5f144f4282563c6bf2fa2fb19";

        public ScholarService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public string GetScholarApiUrl(string authorId)
        {
            return $"https://serpapi.com/search.json?engine=google_scholar_author&author_id={authorId}&hl=en&start=0&num=20&api_key={_apiKey}";
        }

        public Task<string> FetchScholarJsonAsync(string scholarApiUrl)
         => _httpClient.GetStringAsync(scholarApiUrl);

        public byte[] ConvertJsonToPdf(string json)
        {
            var doc = new PdfDocument();
            var page = doc.AddPage();
            var gfx = XGraphics.FromPdfPage(page);
            var font = new XFont("Verdana", 10);

            var rect = new XRect(20, 20, page.Width - 40, page.Height - 40);
            gfx.DrawString(json, font, XBrushes.Black, rect, XStringFormats.TopLeft);

            using var ms = new MemoryStream();
            doc.Save(ms, false);
            return ms.ToArray();
        }

        /// <summary>
        /// Fetch the scholar JSON, convert to PDF, and update the AppUser entity.
        /// </summary>
        public async Task SaveScholarProfileAsync(AppUser user, string scholarUrl, UserManager<AppUser> userManager)
        {
            // 1) Extract author ID
            var uri = new Uri(scholarUrl);
            var query = QueryHelpers.ParseQuery(uri.Query);
            var authorId = query["user"].ToString();
            if (string.IsNullOrWhiteSpace(authorId))
                throw new ArgumentException("Missing user= ID in Google Scholar URL");

            // 2) Fetch JSON
            var json = await FetchScholarJsonAsync(GetScholarApiUrl(authorId));

            // 3) Store
            user.googleScholar = scholarUrl;
            user.ScholarJson = json;
            user.ScholarPdf = ConvertJsonToPdf(json);

            await userManager.UpdateAsync(user);
        }
    }
}
