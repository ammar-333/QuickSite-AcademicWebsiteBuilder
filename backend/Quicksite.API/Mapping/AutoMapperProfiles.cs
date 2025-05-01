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

            CreateMap<Website, WebsiteDto>().ReverseMap();
            CreateMap<Website, AddWebsiteDto>().ReverseMap();
            CreateMap<Website, UpdateWebsiteDto>().ReverseMap();

            CreateMap<Template, TemplateDto>().ReverseMap();
            CreateMap<Template, AddTemplateDto>().ReverseMap();
            CreateMap<Template, UpdateTemplateDto>().ReverseMap();

            CreateMap<Admin, AdminDto>().ReverseMap();
            CreateMap<Admin, AddAdminDto>().ReverseMap();
            CreateMap<Admin, UpdateAdminDto>().ReverseMap();

            CreateMap<AcademicProfile, AcademicProfileDto>().ReverseMap();
            CreateMap<AcademicProfile, AddAcademicProfileDto>().ReverseMap();
            CreateMap<AcademicProfile, UpdateAcademicProfileDto>().ReverseMap();

            CreateMap<Payment, PaymentDto>().ReverseMap();
            CreateMap<Payment, AddPaymentDto>().ReverseMap();
            CreateMap<Payment, UpdatePaymentDto>().ReverseMap();
        }
    }
}
