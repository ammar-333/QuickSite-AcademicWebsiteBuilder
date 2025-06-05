using AutoMapper;
using Quicksite.API.Models.Domains;
using Quicksite.API.Models.Dtos;

namespace Quicksite.API.Mapping
{
    public class AutoMapperProfiles: Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<AppUser, CustomerDto>().ReverseMap();
            CreateMap<AppUser, AddCustomerDto>().ReverseMap();
            CreateMap<AppUser, UpdateCustomerDto>().ReverseMap();

            CreateMap<Website, WebsiteDto>().ReverseMap();
            CreateMap<Website, AddWebsiteDto>().ReverseMap();
            CreateMap<Website, UpdateWebsiteDto>().ReverseMap();

            CreateMap<Payment, PaymentDto>().ReverseMap();
            CreateMap<Payment, AddPaymentDto>().ReverseMap();
        }
    }
}
