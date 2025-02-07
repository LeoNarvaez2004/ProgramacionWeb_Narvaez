using CapaDatos;
using CapaEntidad;
using Microsoft.AspNetCore.Mvc;

namespace Clase31Enero.Controllers
{
    public class MedicamentoController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public string saludos()
        {
            return "Hola OwO! ";
        }
        public int numeroEntero()
        {
            return 10;
        }
        public double numeroDecimal()
        {
            return 5.6;
        }
        
    }
}
