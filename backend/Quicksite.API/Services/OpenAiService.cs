using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.ApiExplorer;
using Microsoft.Extensions.Configuration;
using OpenAI;
using OpenAI.Chat;
using OpenAI.Models;
using PdfSharpCore.Pdf.AcroForms;
using PdfSharpCore.Pdf.Content;
using PdfSharpCore.Pdf.IO;
using Quicksite.API.Models.Dtos;
using Quicksite.API.Models.Domains;
using Microsoft.EntityFrameworkCore;

namespace Quicksite.API.Services
{
    public class OpenAIService
    {
        private readonly HttpClient _httpClient;
        private const string _endpoint = "https://api.openai.com/v1/chat/completions";

        public OpenAIService()
        {
            _httpClient = new HttpClient();
            _httpClient.DefaultRequestHeaders.Add("Authorization", $"Bearer {apiKey}");
            _httpClient.Timeout = TimeSpan.FromMinutes(5);
        }

        /// <summary>
        /// Sends the provided scholar JSON to ChatGPT and returns a full HTML portfolio page.
        /// </summary>
        public async Task<string> GeneratePortfolioHtmlAsync(string scholarJson, string bio, string preferences)
        {
            if (string.IsNullOrWhiteSpace(scholarJson))
                throw new ArgumentException(nameof(scholarJson));


            // Build the chat messages
            var requestBody = new
            {
                model = "gpt-4.1",  // Use "gpt-3.5-turbo" for lower cost
                temperature = 0,
                max_completion_tokens = 32768,
                top_p = 1,
                frequency_penalty = 0,
                presence_penalty = 0,
                messages = new[]
                       {
                new { role = "system",   content =
                "You are a world-class web developer. Produce a fully responsive, multi-page academic portfolio site in pure HTML5/CSS3. " +
                "Use semantic HTML and modern CSS (Grid/Flexbox). Include an embedded <style> block with a light & dark theme and a toggle switch. " +
                "Search the author name using the web and return any useful data about him like cv,linkedIn,etc...."+
                "Structure the site into these pages (all linked in a nav bar):\n" +
                "  • Home (banner + name/title)\n" +
                "  • About (bio, affiliations, photo)\n" +
                "  • Research (interests, projects list)\n" +
                "  • Publications (table or cards of papers)\n" +
                "  • Contact (email link(give the real email if not sure do not return it) + social icons)\n" +
                "Extract data from the provided JSON; ignore “cited_by”, “co_authors”, “serpapi_pagination”. " +
                "Do NOT output commentary—only the HTML/CSS code."+
                "website should have a clean, modern, and minimalist design with a well-balanced color palette—typically a primary color like deep blue or indigo, an accent color such as vibrant cyan or orange, and neutral tones like white or charcoal for readability."+
                "The typography should be professional, using fonts like Poppins or Playfair Display for headings and Inter or Roboto for body text."+
                "The layout must be fully responsive and mobile-first, with smooth scroll navigation, a sticky top bar, and subtle animations for section transitions."+
                "The homepage (hero section) should introduce the individual with their name, title, a strong tagline, and clear call-to-action buttons such as “Contact Me.”"+
                "The site should include an About Me section detailing background, education, and interests; a Skills section with icons or visual indicators for technical and soft skills; and a Projects section with cards showing project titles, images, tech stack, descriptions, and links to demos or GitHub. "+
                "Additionally, there should be a section for Experience and Education presented in a timeline, and optionally a Testimonials section with feedback from colleagues or mentors."+
                " For added depth, a blog can be included for writing or tutorials. The Contact section should offer a form along with visible links to email and social media. "+
                "Optional enhancements include dark mode support, and basic SEO and accessibility features."},

                new { role = "user", content =$"Here is the author’s notes:\n\n" +
                            $"— Bio:\n{bio}\n\n" +
                            $"— Website Preferences:\n{preferences}\n\n" +
                            $"— Scholar JSON:\n{scholarJson}"  }
            }
            };

            var body = new StringContent(
                JsonSerializer.Serialize(requestBody),
                Encoding.UTF8,
                "application/json"
             );

            var response = await _httpClient.PostAsync(_endpoint, body);
            var txt = await response.Content.ReadAsStringAsync();

            if (!response.IsSuccessStatusCode)
            {
                throw new HttpRequestException($"OpenAI failed: {txt}");
            }

            using var doc = JsonDocument.Parse(txt);
            var generatedHtml = doc.RootElement
                      .GetProperty("choices")[0]
                      .GetProperty("message")
                      .GetProperty("content")
                      .GetString()!;

            if (generatedHtml.StartsWith("```html"))
                generatedHtml = generatedHtml.Replace("```html", "").TrimStart();

            if (generatedHtml.EndsWith("```"))
                generatedHtml = generatedHtml.Substring(0, generatedHtml.LastIndexOf("```")).TrimEnd();

            // Inject download button into the HTML before </body>
            var downloadButtonScript = @"
             <button onclick=""downloadWebsite()"" style=""position: fixed; bottom: 20px; right: 20px; padding: 10px 20px; background: #007BFF; color: white; border: none; border-radius: 5px; cursor: pointer; z-index: 9999;"">
             Download Website
             </button>

             <script>
             function downloadWebsite() {
             const button = document.querySelector('[onclick=""downloadWebsite()""]');
             if (button) button.style.display = ""none"";

             setTimeout(() => {
             const html = document.documentElement.outerHTML;
             const blob = new Blob([html], { type: 'text/html' });
             const link = document.createElement('a');
             link.href = URL.createObjectURL(blob);
             link.download = 'website.html';
             link.click();

             if (button) button.style.display = ""block"";
             }, 50);
             }
             </script>
             </body>";

            // If OpenAI's response has </body>, insert before it
            if (generatedHtml.Contains("</body>"))
                generatedHtml = generatedHtml.Replace("</body>", downloadButtonScript);
            else
                generatedHtml += downloadButtonScript; // fallback if </body> is missing

            return generatedHtml;

        }
    }
}