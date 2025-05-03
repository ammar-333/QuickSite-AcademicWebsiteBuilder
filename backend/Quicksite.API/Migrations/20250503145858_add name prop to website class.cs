using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Quicksite.API.Migrations
{
    /// <inheritdoc />
    public partial class addnameproptowebsiteclass : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Websites",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "Websites");
        }
    }
}
