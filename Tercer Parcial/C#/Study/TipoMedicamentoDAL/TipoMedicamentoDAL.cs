using CapaEntidad;

namespace CapaDatos
{
    public class TipoMedicamentoDAL
    {
        public List<TipoMedicamentoCLS> listarTipoMedicamento()
        {
          List<TipoMedicamentoCLS> lista = new List<TipoMedicamentoCLS>();

            lista.Add(new TipoMedicamentoCLS
            {
                idTipoMedicamento = 1,
                nombre = "Pastillas",
                descripcion = "Medicamento en forma de pastillas",
                estado = 1
            });
            lista.Add(new TipoMedicamentoCLS
            {
                idTipoMedicamento = 2,
                nombre = "Jarabe",
                descripcion = "Medicamento en forma de jarabe",
                estado = 1
            });
            lista.Add(new TipoMedicamentoCLS
            {
                idTipoMedicamento = 3,
                nombre = "Inyección",
                descripcion = "Medicamento en forma de inyección",
                estado = 1
            });
            lista.Add(new TipoMedicamentoCLS
            {
                idTipoMedicamento = 4,
                nombre = "Gotas",
                descripcion = "Medicamento en forma de gotas",
                estado = 1
            });
            return lista;
        }
    }
}
