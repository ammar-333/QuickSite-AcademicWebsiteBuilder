using AutoMapper;
using Quicksite.API.Models.Domains;
using Quicksite.API.Models.Dtos;

namespace Quicksite.API.Mapping
{
    public class AutoMapperProfiles: Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Customer, CustomerDto>().ReverseMap();
            CreateMap<Customer, AddCustomerDto>().ReverseMap();
            CreateMap<Customer, UpdateCustomerDto>().ReverseMap();
        }
    }
}
