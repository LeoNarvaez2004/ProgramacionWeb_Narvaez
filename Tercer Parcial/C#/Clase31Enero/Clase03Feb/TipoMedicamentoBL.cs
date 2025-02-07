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
    }
}
