using Microsoft.AspNetCore.Mvc;
using OfficeOpenXml;
using System.IO;

namespace TuProyecto.Controllers
{
    [Route("api/form")]
    [ApiController]
    public class FormController : ControllerBase
    {
        private const string excelFile = "contactos.xlsx";

        [HttpPost("submit")]
        public IActionResult SubmitForm([FromBody] FormData data)
        {
            if (data == null || string.IsNullOrWhiteSpace(data.Name) || data.Cel == 0 ||
                string.IsNullOrWhiteSpace(data.Email) || string.IsNullOrWhiteSpace(data.Message))
            {
                return BadRequest(new { message = "Todos los campos son requeridos" });
            }

            try
            {
                SaveToExcel(data.Name, data.Cel, data.Email, data.Message);
                return Ok(new { message = "Datos guardados correctamente en Excel" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Error al guardar en Excel", error = ex.Message });
            }
        }

        private void SaveToExcel(string name, long Cel, string email, string message )
        {
            var currentDirectory = Directory.GetCurrentDirectory();
            var parentDirectory = Directory.GetParent(currentDirectory);
            var excelPath = $"{parentDirectory}\\{excelFile}";
            var file = new FileInfo(excelPath);
            ExcelPackage.LicenseContext = LicenseContext.NonCommercial;

            using (ExcelPackage package = file.Exists ? new ExcelPackage(file) : new ExcelPackage())
            {
                ExcelWorksheet worksheet = package.Workbook.Worksheets.Count > 0 
                    ? package.Workbook.Worksheets[0] 
                    : package.Workbook.Worksheets.Add("Contactos");

                int lastRow = worksheet.Dimension?.End.Row ?? 0;
                if (lastRow == 0)
                {
                    worksheet.Cells[1, 1].Value = "Nombre";
                    worksheet.Cells[1, 2].Value = "Celular";
                    worksheet.Cells[1, 3].Value = "Email";
                    worksheet.Cells[1, 4].Value = "Mensaje";
                    lastRow = 1;
                }

                worksheet.Cells[lastRow + 1, 1].Value = name;
                worksheet.Cells[lastRow + 1, 2].Value = Cel;
                worksheet.Cells[lastRow + 1, 3].Value = email;
                worksheet.Cells[lastRow + 1, 4].Value = message;
                              
                package.SaveAs(file);
            }
        }
    }

    public class FormData
    {
        public string Name { get; set; }
        public long Cel { get; set; }
        public string Email { get; set; }
        public string Message { get; set; }
    }
}
