using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Quicksite.API.Migrations
{
    /// <inheritdoc />
    public partial class newgit : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "HtmlContent",
                table: "Websites",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Slug",
                table: "Websites",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<byte[]>(
                name: "ScholarPdf",
                table: "AspNetUsers",
                type: "varbinary(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "HtmlContent",
                table: "Websites");

            migrationBuilder.DropColumn(
                name: "Slug",
                table: "Websites");

            migrationBuilder.DropColumn(
                name: "ScholarPdf",
                table: "AspNetUsers");
        }
    }
}
