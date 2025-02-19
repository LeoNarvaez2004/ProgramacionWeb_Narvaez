using CapaDatos;
using CapaEntidad;
using Microsoft.AspNetCore.Mvc;

namespace Clase31Enero.Controllers
{
    public class Sucursal : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public List<SucursalCLS> ListarSucursal()
        {
            SucursalDAL obj = new SucursalDAL();
            return obj.ListarSucursal();
        }
        public List<SucursalCLS> FiltrarSucursal(SucursalCLS objSuc)
        {
            SucursalDAL obj = new SucursalDAL();
            return obj.FiltrarSucursal(objSuc);
        }

    }
}
