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
                                medCLS.nombreLaboratorio = dr.IsDBNull(2) ? "" : dr.GetString(2);
                                medCLS.nombreTipoMedicamento = dr.IsDBNull(3) ? "" : dr.GetString(3);
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

        public List<MedicamentoCLS> listaActualizada()
        {
            List<MedicamentoCLS> lista = null;

            using (SqlConnection cn = new SqlConnection(cadenaDato))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("SELECT IIDMEDICAMENTO, CODIGO,NOMBREMEDICAMENTO,IIDLABORATORIO,IIDTIPOMEDICAMENTO,USOMEDICAMENTO,CONTENIDO FROM Medicamento WHERE BHABILITADO = 1;", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.Text;
                        SqlDataReader dr = cmd.ExecuteReader();
                        if (dr != null)
                        {
                            MedicamentoCLS medCLS;
                            lista = new List<MedicamentoCLS>();
                            while (dr.Read())
                            {
                                medCLS = new MedicamentoCLS();
                                medCLS.idMedicamento = dr.IsDBNull(0) ? 0 : dr.GetInt32(0);
                                medCLS.codigo = dr.IsDBNull(1) ? "" : dr.GetString(1);
                                medCLS.nombre = dr.IsDBNull(2) ? "" : dr.GetString(2);
                                medCLS.idLab = dr.IsDBNull(3) ? 0 : dr.GetInt32(3);
                                medCLS.idTipoMed = dr.IsDBNull(4) ? 0 : dr.GetInt32(4);
                                medCLS.uso = dr.IsDBNull(5) ? "" : dr.GetString(5);
                                medCLS.contenido = dr.IsDBNull(6) ? "" : dr.GetString(6);
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

        public List<MedicamentoCLS> FiltrarMedicamento(MedicamentoCLS obj)
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
                        cmd.Parameters.AddWithValue("@idmedicamento", obj.idMedicamento == 0 ? 0 : obj.idMedicamento);
                        cmd.Parameters.AddWithValue("@nombre", string.IsNullOrEmpty(obj.nombre) ? "" : obj.nombre);
                        cmd.Parameters.AddWithValue("@idlaboratorio", obj.idLab == 0 ? 0 : obj.idLab);
                        cmd.Parameters.AddWithValue("@idtipomedicamento", obj.idTipoMed == 0 ? 0 : obj.idTipoMed);

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
                                medCLS.nombreLaboratorio = dr.GetString(2);
                                medCLS.nombreTipoMedicamento = dr.GetString(3);
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
        public MedicamentoCLS recuperarMedicamento(int idMed)
        {
            MedicamentoCLS medCLS = null;


            using (SqlConnection cn = new SqlConnection(cadenaDato))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspRecuperarMedicamento", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;

                        cmd.Parameters.AddWithValue("@idmedicamento", idMed);
                        SqlDataReader dr = cmd.ExecuteReader();
                        if (dr != null)
                        {
                            while (dr.Read())
                            {
                                medCLS = new MedicamentoCLS();
                                medCLS.idMedicamento = dr.IsDBNull(0) ? 0 : dr.GetInt32(0);
                                medCLS.codigo = dr.IsDBNull(1) ? "" : dr.GetString(1);
                                medCLS.nombre = dr.IsDBNull(2) ? "" : dr.GetString(2);
                                medCLS.idLab = dr.IsDBNull(3) ? 0 : dr.GetInt32(3);
                                medCLS.idTipoMed = dr.IsDBNull(4) ? 0 : dr.GetInt32(4);
                                medCLS.uso = dr.IsDBNull(5) ? "" : dr.GetString(5);
                                medCLS.contenido = dr.IsDBNull(6) ? "" : dr.GetString(6);
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

        public int GuardarMedicamento(MedicamentoCLS objMed)
        {
            using (SqlConnection cn = new SqlConnection(cadenaDato))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspGuardarMedicamento", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@iidmedicamento", objMed.idMedicamento == 0 ? 0 : objMed.idMedicamento);
                        cmd.Parameters.AddWithValue("@nombremedicamento", objMed.nombre == null ? "" : objMed.nombre);
                        cmd.Parameters.AddWithValue("@iidlaboratorio", objMed.idLab == 0 ? 0 : objMed.idLab);
                        cmd.Parameters.AddWithValue("@iidtipomedicamento", objMed.idTipoMed == 0 ? 0 : objMed.idTipoMed);
                        cmd.Parameters.AddWithValue("@usomedicamento", objMed.uso == null ? "" : objMed.uso);
                        cmd.Parameters.AddWithValue("@contenido", objMed.contenido == null ? "" : objMed.contenido);
                        cmd.Parameters.AddWithValue("@codigo", objMed.codigo == null ? "" : objMed.codigo);

                        int ans = cmd.ExecuteNonQuery();
                        return ans;
                    }
                }
                catch (Exception e)
                {
                    cn.Close();
                    throw new Exception("Error al guardar medicamento: " + e.Message);
                }
            }

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
