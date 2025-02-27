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
        
        public List<TipoMedicamentoCLS> listarMedicamento()
        {
            TipoMedicamentoDAL obj = new TipoMedicamentoDAL();
            return obj.listarTipoMedicamento();
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
        public TipoMedicamentoCLS recuperarTipoMedicamento(int idTM)
        {
            TipoMedicamentoDAL obj = new TipoMedicamentoDAL();
            return obj.recuperarTipoMedicamento(idTM);
        }
        public void eliminarTipoMedicamento(int idTM)
        {
            TipoMedicamentoDAL obj = new TipoMedicamentoDAL();
            obj.EliminarTipoMedicamento(idTM);
        }
    }
}
