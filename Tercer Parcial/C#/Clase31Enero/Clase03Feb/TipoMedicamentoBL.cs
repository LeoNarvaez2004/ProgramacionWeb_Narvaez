using CapaDatos;
using CapaEntidad;

namespace Clase03Feb
{
    public class TipoMedicamentoBL
    {
        public List<TipoMedicamentoCLS> listarTipoMedicamento()
        {
            TipoMedicamentoDAL obj = new TipoMedicamentoDAL();
            return obj.listarTipoMedicamento();
        }
        public List<TipoMedicamentoCLS> FiltrarTipoMedicamento(string nombre)
        {
            TipoMedicamentoDAL obj = new TipoMedicamentoDAL();
            return obj.FiltrarTipoMedicamento(nombre);
        }
        /*
        public void eliminarMed(int id)
        {
            TipoMedicamentoDAL obj = new TipoMedicamentoDAL();
            obj.EliminarMedicamento(id);
        } 
        
        public List<FiltrarMedicamentoCLS> filtrarMedicamento(int idMed,string nombre,int idLab,int idTip)
        {
            TipoMedicamentoDAL obj = new TipoMedicamentoDAL();
            return obj.FiltrarMedicamento(idMed,nombre,idLab,idTip);
        }*/
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
    }
}
