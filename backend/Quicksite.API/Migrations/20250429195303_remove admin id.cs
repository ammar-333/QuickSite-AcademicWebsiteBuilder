using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Quicksite.API.Migrations
{
    /// <inheritdoc />
    public partial class removeadminid : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Customers_Admins_AdminId",
                table: "Customers");

            migrationBuilder.DropIndex(
                name: "IX_Customers_AdminId",
                table: "Customers");

            migrationBuilder.DropColumn(
                name: "AdminId",
                table: "Customers");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "AdminId",
                table: "Customers",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_Customers_AdminId",
                table: "Customers",
                column: "AdminId");

            migrationBuilder.AddForeignKey(
                name: "FK_Customers_Admins_AdminId",
                table: "Customers",
                column: "AdminId",
                principalTable: "Admins",
                principalColumn: "AdminId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
