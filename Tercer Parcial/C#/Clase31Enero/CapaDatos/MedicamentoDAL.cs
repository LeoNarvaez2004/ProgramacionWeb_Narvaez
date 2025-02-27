using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CapaEntidad;

namespace CapaDatos
{
    public class MedicamentoDAL : CadenaDAL
    {
        public List<MedicamentoCLS> listarMedicamento()
        {
            List<MedicamentoCLS> lista = null;

            using (SqlConnection cn = new SqlConnection(cadenaDato))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspListarMedicamento", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        SqlDataReader dr = cmd.ExecuteReader();
                        if (dr != null)
                        {
                            MedicamentoCLS medCLS;
                            lista = new List<MedicamentoCLS>();
                            while (dr.Read())
                            {
                                medCLS = new MedicamentoCLS();
                                medCLS.idMedicamento = dr.IsDBNull(0) ? 0 : dr.GetInt32(0);
                                medCLS.nombre = dr.IsDBNull(1) ? "" : dr.GetString(1);
                                medCLS.idLaboratorio = dr.IsDBNull(2) ? "" : dr.GetString(2);
                                medCLS.idTipoMedicamento = dr.IsDBNull(3) ? "" : dr.GetString(3);
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
        public List<MedicamentoCLS> FiltrarMedicamento(int idMed, string nombre, int idLab, int idTip)
        {
            List<MedicamentoCLS> lista = null;


            using (SqlConnection cn = new SqlConnection(cadenaDato))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspFiltrarMedicamento", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@idmedicamento", idMed);
                        cmd.Parameters.AddWithValue("@nombre", string.IsNullOrEmpty(nombre) ? "" : nombre);
                        cmd.Parameters.AddWithValue("@idlaboratorio", idLab);
                        cmd.Parameters.AddWithValue("@idtipomedicamento", idTip);

                        SqlDataReader dr = cmd.ExecuteReader();
                        if (dr != null)
                        {
                            MedicamentoCLS medCLS;
                            lista = new List<MedicamentoCLS>();
                            while (dr.Read())
                            {
                                medCLS = new MedicamentoCLS();
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
    }
}
