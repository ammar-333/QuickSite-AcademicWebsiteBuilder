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

namespace Quicksite.API.Services
{
    public class OpenAIService
    {
        private readonly HttpClient _httpClient;
        private const string apiKey = "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"; // Replace with your OpenAI API Key
        private const string _endpoint = "https://api.openai.com/v1/chat/completions";

        public OpenAIService()
        {
            _httpClient = new HttpClient();
            _httpClient.DefaultRequestHeaders.Add("Authorization", $"Bearer {apiKey}");
        }

        /// <summary>
        /// Sends the provided scholar JSON to ChatGPT and returns a full HTML portfolio page.
        /// </summary>
        public async Task<string> GeneratePortfolioHtmlAsync(string scholarJson)
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
                new { role = "system", content = "You are an expert web developer and designer. " +
                 "Create a fully responsive, professional academic portfolio in pure HTML5 and CSS3. " +
                 "Use semantic markup and modern layout techniques (Flexbox or CSS Grid), clean typography, and a cohesive color palette. " +
                 "Base the entire page on the provided JSON data—extract name, title, affiliations, research interests, and publications. " +
                 "Do NOT include any ‘cited_by’, ‘co_authors’, or ‘serpapi_pagination’ sections. " +
                 "give it more stylish style and add images that relate to the data"+
                 "Return only the final, standalone HTML document (with internal CSS in a <style> block), no commentary." },
                new { role = "user", content =  scholarJson  }
            }
            };

            var body = new StringContent(
                JsonSerializer.Serialize(requestBody),
                Encoding.UTF8,
                "application/json"
             );

            var response = await _httpClient.PostAsync(_endpoint, body);
            var txt =await response.Content.ReadAsStringAsync();

            if (!response.IsSuccessStatusCode)
            {
                throw new HttpRequestException($"OpenAI failed: {txt}");
            }

            using var doc = JsonDocument.Parse(txt);
            return doc.RootElement
                      .GetProperty("choices")[0]
                      .GetProperty("message")
                      .GetProperty("content")
                      .GetString()!;
        }
    }
}