using System.Data.SqlClient;
using CapaEntidad;
using Microsoft.Extensions.Configuration;

namespace CapaDatos
{
    public class TipoMedicamentoDAL : CadenaDAL
    {
        public List<TipoMedicamentoCLS> listarTipoMedicamento()
        {
            List < TipoMedicamentoCLS > lista = null;

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
                                medCLS.idTipoMedicamento = dr.IsDBNull(0) ? 0 : dr.GetInt32(0);
                                medCLS.nombre = dr.IsDBNull(1) ? "" : dr.GetString(1);
                                medCLS.descripcion = dr.IsDBNull(2) ? "" : dr.GetString(2);
                                lista.Add(medCLS);
                            }

                        }
                    }

                }
                catch (Exception ex)
                {
                    throw new Exception("Error al listar tipo medicamento: " + ex.Message);
                }
            }
            return lista;
        }

        /*
        public void EliminarMedicamento(int id)
        {
           

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
                catch (Exception ex)
                {
                    throw new Exception("Error al eliminar medicamento: " + ex.Message);
                }
            }
        }
        */

        public List<TipoMedicamentoCLS> FiltrarTipoMedicamento(string nombre)
        {
            List<TipoMedicamentoCLS> lista = null;
           

            using (SqlConnection cn = new SqlConnection(cadenaDato))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspFiltrarTipoMedicamento", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        if (nombre == null)
                        {
                            nombre = "";
                        }
                        cmd.Parameters.AddWithValue("@nombretipomedicamento", nombre);
                        SqlDataReader dr = cmd.ExecuteReader();
                        if (dr != null)
                        {
                            TipoMedicamentoCLS medCLS;
                            lista = new List<TipoMedicamentoCLS>();
                            while (dr.Read())
                            {
                                medCLS = new TipoMedicamentoCLS();
                                medCLS.idTipoMedicamento = dr.IsDBNull(0) ? 0 : dr.GetInt32(0);
                                medCLS.nombre = dr.IsDBNull(1) ? "" : dr.GetString(1);
                                medCLS.descripcion = dr.IsDBNull(2) ? "" : dr.GetString(2);
                                lista.Add(medCLS);
                            }

                        }
                    }

                }
                catch (Exception ex)
                {
                    throw new Exception("Error al filtrar tipo medicamento: " + ex.Message);
                }
            }
            return lista;
        }
        
        public int GuardarTipoMedicamento(TipoMedicamentoCLS objTM)
        {
            using (SqlConnection cn = new SqlConnection(cadenaDato))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("INSERT INTO TipoMedicamento (NOMBRE, DESCRIPCION, BHABILITADO) VALUES (@nombre, @descripcion, 1)", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.Text;
                        cmd.Parameters.AddWithValue("@nombre", objTM.nombre == null ? "" : objTM.nombre);
                        cmd.Parameters.AddWithValue("@descripcion", objTM.descripcion == null ? "":objTM.descripcion);

                        int ans = cmd.ExecuteNonQuery();
                        return ans;
                    }
                }
                catch (Exception e)
                {
                    cn.Close();
                    throw new Exception("Error al guardar tipo medicamento: " + e.Message);
                }
            }

        }
       
    }
}
