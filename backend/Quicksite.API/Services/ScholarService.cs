using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

namespace Quicksite.API.Services
{
    public class ScholarService
    {
        private readonly HttpClient _httpClient;
        private readonly IConfiguration _configuration;

        public ScholarService(HttpClient httpClient, IConfiguration configuration)
        {
            _httpClient = httpClient;
            _configuration = configuration;
        }

        public async Task<string?> GetScholarProfileAsync(string authorName)
        {
            string apiKey = _configuration["SerpApi:Key"];

            var url = $"https://serpapi.com/search.json?engine=google_scholar_profiles&q={authorName}&api_key={apiKey}";

            var response = await _httpClient.GetAsync(url);

            if (!response.IsSuccessStatusCode) return null;

            var result = await response.Content.ReadAsStringAsync();
            return result;
        }
    }
}
