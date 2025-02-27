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
        public int GuardarLaboratorio(LaboratorioCLS objLab)
        {
            LaboratorioDAL obj = new LaboratorioDAL();
            return obj.GuardarLaboratorio(objLab);
        }
        public LaboratorioCLS recuperarLaboratorio(int idLab)
        {
            LaboratorioDAL obj = new LaboratorioDAL();
            return obj.recuperarLaboratorio(idLab);
        }
        public void eliminarLab(int idLab)
        {
            LaboratorioDAL obj = new LaboratorioDAL();
            obj.EliminarLab(idLab);
        }
    }
}
