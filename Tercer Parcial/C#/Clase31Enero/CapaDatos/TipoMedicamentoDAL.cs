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
                    using (SqlCommand cmd = new SqlCommand("uspGuardarTipoMedicamento", cn))
                    {

                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@nombre", objTM.nombre == null ? "" : objTM.nombre);
                        cmd.Parameters.AddWithValue("@descripcion", objTM.descripcion == null ? "":objTM.descripcion);
                        cmd.Parameters.AddWithValue("@id", objTM.idTipoMedicamento == 0 ? 0 : objTM.idTipoMedicamento);
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

        public TipoMedicamentoCLS recuperarTipoMedicamento(int idTM)
        {
            TipoMedicamentoCLS medCLS = null;


            using (SqlConnection cn = new SqlConnection(cadenaDato))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("select IIDTIPOMEDICAMENTO as idTipoMedicamento,NOMBRE,DESCRIPCION " +
                                                           "from TipoMedicamento " +
                                                           "where BHABILITADO = 1 and IIDTIPOMEDICAMENTO = @iidtipomedicamento ", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.Text;
                        
                        cmd.Parameters.AddWithValue("@iidtipomedicamento",idTM);
                        SqlDataReader dr = cmd.ExecuteReader();
                        if (dr != null)
                        {
                            while (dr.Read())
                            {
                                medCLS = new TipoMedicamentoCLS();
                                medCLS.idTipoMedicamento = dr.IsDBNull(0) ? 0 : dr.GetInt32(0);
                                medCLS.nombre = dr.IsDBNull(1) ? "" : dr.GetString(1);
                                medCLS.descripcion = dr.IsDBNull(2) ? "" : dr.GetString(2);
                            }

                        }
                    }

                }
                catch (Exception ex)
                {
                    throw new Exception("Error al recuperar tipo medicamento: " + ex.Message);
                }
            }
            return medCLS;
        }
        public void EliminarTipoMedicamento(int id)
        {


            using (SqlConnection cn = new SqlConnection(cadenaDato))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspEliminarTipoMedicamento", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@id", id);

                        cmd.ExecuteNonQuery();

                    }

                }
                catch (Exception ex)
                {
                    throw new Exception("Error al eliminar medicamento: " + ex.Message);
                }
            }
        }

    }
}
