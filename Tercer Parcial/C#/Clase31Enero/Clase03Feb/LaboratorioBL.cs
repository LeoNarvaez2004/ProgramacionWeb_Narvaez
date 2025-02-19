using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CapaDatos;
using CapaEntidad;

namespace Clase03Feb
{
    public class LaboratorioBL
    {
        public List<LaboratorioCLS> ListarLaboratorios()
        {
            LaboratorioDAL obj = new LaboratorioDAL();
            return obj.ListarLaboratorio();
        }
        public List<LaboratorioCLS> FiltrarLaboratorio(string nombre, string direccion, string persona)
        {
            LaboratorioDAL obj = new LaboratorioDAL();
            return obj.FiltrarLaboratorio(nombre, direccion, persona);
        }
    }
}
