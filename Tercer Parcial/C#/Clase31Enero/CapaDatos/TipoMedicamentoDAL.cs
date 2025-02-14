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
            return lista;
        }

        public void EliminarMedicamento(int id)
        {
            IConfigurationBuilder cfg = new ConfigurationBuilder();
            cfg.AddJsonFile(Path.Combine(Directory.GetCurrentDirectory(), "appsettings.json"));
            var root = cfg.Build();
            var cadenaDato = root.GetConnectionString("cn");

            using (SqlConnection cn = new SqlConnection(cadenaDato))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspEliminarMedicamento", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@iidmedicamento", id);

                        cmd.ExecuteNonQuery();
                       
                    }

                }
                catch (Exception)
                {

                }
            }
        }
        public List<FiltrarMedicamentoCLS> FiltrarMedicamento(int idMed,string nombre,int idLab,int idTip)
        {
            List<FiltrarMedicamentoCLS> lista = null;
            IConfigurationBuilder cfg = new ConfigurationBuilder();
            cfg.AddJsonFile(Path.Combine(Directory.GetCurrentDirectory(), "appsettings.json"));
            var root = cfg.Build();
            var cadenaDato = root.GetConnectionString("cn");

            using (SqlConnection cn = new SqlConnection(cadenaDato))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspFiltrarMedicamento", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@idmedicamento",idMed);
                        cmd.Parameters.AddWithValue("@nombre", string.IsNullOrEmpty(nombre) ? "" : nombre);
                        cmd.Parameters.AddWithValue("@idlaboratorio", idLab);
                        cmd.Parameters.AddWithValue("@idtipomedicamento", idTip);

                        SqlDataReader dr = cmd.ExecuteReader();
                        if (dr != null)
                        {
                            FiltrarMedicamentoCLS medCLS;
                            lista = new List<FiltrarMedicamentoCLS>();
                            while (dr.Read())
                            {
                                medCLS = new FiltrarMedicamentoCLS();
                                medCLS.idMedicamento = dr.GetInt32(0);
                                medCLS.nombre = dr.GetString(1);
                                medCLS.idLaboratorio = dr.GetString(2);
                                medCLS.idTipoMedicamento = dr.GetString(3);
                                lista.Add(medCLS);
                            }

                        }
                    }

                }
                catch (Exception ex)
                {
                    throw new Exception("Error al filtrar medicamentos: " + ex.Message);
                }

            }
            return lista;
        }
    }
}
