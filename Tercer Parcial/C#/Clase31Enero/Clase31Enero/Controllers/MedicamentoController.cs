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
        public List<MedicamentoCLS> filtrarMedicamento(MedicamentoCLS filtro)
        {
            MedicamentoDAL obj = new MedicamentoDAL();
            return obj.FiltrarMedicamento(filtro);
        }
        public MedicamentoCLS recuperarMedicamento(int idMed)
        {
            MedicamentoDAL obj = new MedicamentoDAL();
            return obj.recuperarMedicamento(idMed);
        }
        public int GuardarMedicamento(MedicamentoCLS objM)
        {
            MedicamentoDAL obj = new MedicamentoDAL();
            return obj.GuardarMedicamento(objM);
        }
        public List<MedicamentoCLS> ListarGuardar()
        {
            MedicamentoDAL obj = new MedicamentoDAL();
            return obj.listaActualizada();
        }
        public void eliminarMedicamento(int idMed)
        {
            MedicamentoDAL obj = new MedicamentoDAL();
            obj.EliminarMedicamento(idMed);
        }
    }
}
