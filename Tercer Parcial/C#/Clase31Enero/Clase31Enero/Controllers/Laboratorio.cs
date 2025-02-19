using CapaDatos;
using CapaEntidad;
using Microsoft.AspNetCore.Mvc;

namespace Clase31Enero.Controllers
{
    public class Laboratorio : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public List<LaboratorioCLS> ListarLaboratorios()
        {
            LaboratorioDAL obj = new LaboratorioDAL();
            return obj.ListarLaboratorio();
        }
        public List<LaboratorioCLS> FiltrarLaboratorio(LaboratorioCLS objLab)
        {
            LaboratorioDAL obj = new LaboratorioDAL();
            return obj.FiltrarLaboratorio(objLab);
        }
    }
}
