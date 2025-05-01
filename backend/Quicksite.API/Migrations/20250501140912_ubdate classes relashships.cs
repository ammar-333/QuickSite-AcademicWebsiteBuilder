using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Quicksite.API.Migrations
{
    /// <inheritdoc />
    public partial class ubdateclassesrelashships : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Websites_Templates_TemplateId",
                table: "Websites");

            migrationBuilder.AlterColumn<Guid>(
                name: "TemplateId",
                table: "Websites",
                type: "uniqueidentifier",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier");

            migrationBuilder.AddForeignKey(
                name: "FK_Websites_Templates_TemplateId",
                table: "Websites",
                column: "TemplateId",
                principalTable: "Templates",
                principalColumn: "TemplateId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Websites_Templates_TemplateId",
                table: "Websites");

            migrationBuilder.AlterColumn<Guid>(
                name: "TemplateId",
                table: "Websites",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Websites_Templates_TemplateId",
                table: "Websites",
                column: "TemplateId",
                principalTable: "Templates",
                principalColumn: "TemplateId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
