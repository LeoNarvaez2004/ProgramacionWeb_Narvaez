using Microsoft.AspNetCore.Mvc;
using CapaDatos;
using CapaEntidad;

namespace Clase31Enero.Controllers
{
    public class TipoMedicamentoController : Controller
    {
        public IActionResult Inicio()
        {
            return View();
        }
        public string saludos()
        {
            return "Hola Mundo! ";
        }
        public int numeroEntero()
        {
            return 10;
        }
        public double numeroDecimal()
        {
            return 5.6;
        }
        public string saludosNombreCompleto(string nombre, string apellido)
        {
            return ("Bienvenido " + nombre+ " " + apellido); 
        }
        public List<TipoMedicamentoCLS> listarMedicamento()
        {
            TipoMedicamentoDAL obj = new TipoMedicamentoDAL();
            return obj.listarTipoMedicamento();
        }
        public string cadena()
        {
            IConfigurationBuilder cfg = new ConfigurationBuilder();
            cfg.AddJsonFile(Path.Combine(Directory.GetCurrentDirectory(),"appsettings.json"));
            var root = cfg.Build();
            var cadenaDato = root.GetConnectionString("cn");
            return cadenaDato;
        }
        /*
        public void eliminarMed(int id)
        {
            TipoMedicamentoDAL obj = new TipoMedicamentoDAL();
            obj.EliminarMedicamento(id);
        }*/
        
        public List<TipoMedicamentoCLS> FiltrarTipoMedicamento(string nombre)
        {
            TipoMedicamentoDAL obj = new TipoMedicamentoDAL();
            return obj.FiltrarTipoMedicamento(nombre);
        }
        public int GuardarTipoMedicamento(TipoMedicamentoCLS objTM)
        {
            TipoMedicamentoDAL obj = new TipoMedicamentoDAL();
            return obj.GuardarTipoMedicamento(objTM);
        }
    }
}
