using System.Data.SqlClient;
using CapaEntidad;
using Microsoft.Extensions.Configuration;

namespace CapaDatos
{
    public class TipoMedicamentoDAL
    {
        public List<TipoMedicamentoCLS> listarTipoMedicamento()
        {
            List < TipoMedicamentoCLS > lista = null;
            IConfigurationBuilder cfg = new ConfigurationBuilder();
            cfg.AddJsonFile(Path.Combine(Directory.GetCurrentDirectory(), "appsettings.json"));
            var root = cfg.Build();
            var cadenaDato = root.GetConnectionString("cn");

            using(SqlConnection cn = new SqlConnection(cadenaDato))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("SELECT IIDTIPOMEDICAMENTO, NOMBRE, DESCRIPCION FROM TipoMedicamento WHERE BHABILITADO = 1;", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.Text;
                        SqlDataReader dr = cmd.ExecuteReader();
                        if (dr != null)
                        {
                            TipoMedicamentoCLS medCLS;
                            lista = new List<TipoMedicamentoCLS>();
                            while (dr.Read())
                            {
                                medCLS = new TipoMedicamentoCLS();
                                medCLS.idTipoMedicamento = dr.GetInt32(0);
                                medCLS.nombre = dr.GetString(1);
                                medCLS.descripcion = dr.GetString(2);
                                lista.Add(medCLS);
                            }

                        }
                    }

                }
                catch (Exception)
                {
                    
                }
            }
            /*List<TipoMedicamentoCLS> lista = new List<TipoMedicamentoCLS>();
            lista.Add(new TipoMedicamentoCLS
            {
                idTipoMedicamento = 1,
                nombre = "Analgesicos",
                descripcion = "Desc 1",
                stock = 1
            });
            lista.Add(new TipoMedicamentoCLS
            {
                idTipoMedicamento = 2,
                nombre = "Aspirina",
                descripcion = "Desc 2",
                stock = 3
            });
            lista.Add(new TipoMedicamentoCLS
            {
                idTipoMedicamento = 3,
                nombre = "Paracetamol",
                descripcion = "Desc 2",
                stock = 3
            });
            return lista;
            */
            return lista;

        }
    }
}
