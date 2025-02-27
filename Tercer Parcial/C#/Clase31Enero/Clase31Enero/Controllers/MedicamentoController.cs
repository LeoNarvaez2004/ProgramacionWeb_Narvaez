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
        public List<MedicamentoCLS> ListarMedicamentos()
        {
            MedicamentoDAL obj = new MedicamentoDAL();
            return obj.listarMedicamento();
        }
        public List<MedicamentoCLS> filtrarMedicamento(int idMed, string nombre, int idLab, int idTip)
        {
            MedicamentoDAL obj = new MedicamentoDAL();
            return obj.FiltrarMedicamento(idMed, nombre, idLab, idTip);
        }
    }
}
