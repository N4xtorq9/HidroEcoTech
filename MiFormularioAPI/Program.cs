using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);

// 1️⃣ Habilitar CORS para permitir peticiones desde el frontend
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()   // Permite solicitudes desde cualquier origen (frontend)
              .AllowAnyMethod()   // Permite cualquier método HTTP (GET, POST, etc.)
              .AllowAnyHeader();  // Permite cualquier encabezado
    });
});

// 2️⃣ Agregar soporte para controladores API
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


// 3️⃣ Aplicar la configuración de CORS
app.UseCors("AllowAll");

// 4️⃣ Habilitar el enrutamiento y los controladores
app.UseRouting();
app.UseAuthorization();
app.MapControllers();

// 5️⃣ Ejecutar la aplicación
app.Run();
