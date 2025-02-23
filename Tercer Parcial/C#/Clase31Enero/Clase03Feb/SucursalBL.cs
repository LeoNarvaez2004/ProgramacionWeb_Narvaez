using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CapaDatos;
using CapaEntidad;

namespace Clase03Feb
{
    public class SucursalBL
    {
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
        public int GuardarSucursal(SucursalCLS objTM)
        {
            SucursalDAL obj = new SucursalDAL();
            return obj.GuardarSucursal(objTM);
        }
    }
}
