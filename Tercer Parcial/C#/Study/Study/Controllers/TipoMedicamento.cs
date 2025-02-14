using Microsoft.AspNetCore.Mvc;
using CapaDatos;
using CapaEntidad;

namespace Study.Controllers
{
    public class TipoMedicamento : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public List<TipoMedicamentoCLS> listarMedicamento()
        {
            TipoMedicamentoDAL obj = new TipoMedicamentoDAL();
            return obj.listarTipoMedicamento();
        }

    }
}
