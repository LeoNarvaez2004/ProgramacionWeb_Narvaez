using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CapaEntidad;
using Microsoft.Extensions.Configuration;

namespace CapaDatos
{
    public class LaboratorioDAL : CadenaDAL
    {
        public List<LaboratorioCLS> ListarLaboratorio()
        {
            List<LaboratorioCLS> lista = null;

            using (SqlConnection cn = new SqlConnection(cadenaDato))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspListarLaboratorio", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        SqlDataReader dr = cmd.ExecuteReader();
                        if (dr != null)
                        {
                            LaboratorioCLS medCLS;
                            lista = new List<LaboratorioCLS>();
                            while (dr.Read())
                            {
                                medCLS = new LaboratorioCLS();
                                medCLS.idLaboratorio = dr.GetInt32(0);
                                medCLS.nombre = dr.GetString(1);
                                medCLS.direccion = dr.GetString(2);
                                medCLS.contacto = dr.GetString(3);
                                medCLS.numcontacto = dr.GetString(4);
                                lista.Add(medCLS);
                            }

                        }
                    }

                }
                catch (Exception ex)
                {
                    throw new Exception("Error al listar laboratorios: " + ex.Message);
                }
            }
            return lista;
        }
        public List<LaboratorioCLS> FiltrarLaboratorio(LaboratorioCLS obj)
        {
            List<LaboratorioCLS> lista = null;

            using (SqlConnection cn = new SqlConnection(cadenaDato))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspFiltrarLaboratorio", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@nombre", string.IsNullOrEmpty(obj.nombre) ? "" : obj.nombre);
                        cmd.Parameters.AddWithValue("@direccion", string.IsNullOrEmpty(obj.direccion) ? "" : obj.direccion);
                        cmd.Parameters.AddWithValue("@personacontacto", string.IsNullOrEmpty(obj.contacto) ? "" : obj.contacto);

                        SqlDataReader dr = cmd.ExecuteReader();
                        if (dr != null)
                        {
                            LaboratorioCLS medCLS;
                            lista = new List<LaboratorioCLS>();
                            while (dr.Read())
                            {
                                medCLS = new LaboratorioCLS();
                                medCLS.idLaboratorio = dr.GetInt32(0);
                                medCLS.nombre = dr.GetString(1);
                                medCLS.direccion = dr.GetString(2);
                                medCLS.contacto = dr.GetString(3);
                                lista.Add(medCLS);
                            }

                        }
                    }

                }
                catch (Exception ex)
                {
                    throw new Exception("Error al filtrar laboratorios: " + ex.Message);
                }

            }
            return lista;
        }
        public int GuardarLaboratorio(LaboratorioCLS objLab)
        {
            using (SqlConnection cn = new SqlConnection(cadenaDato))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspGuardarLaboratorio", cn))
                    {

                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@idlaboratorio", objLab.idLaboratorio == 0 ? 0 : objLab.idLaboratorio);
                        cmd.Parameters.AddWithValue("@nombre", objLab.nombre == null ? "" : objLab.nombre);
                        cmd.Parameters.AddWithValue("@direccion", objLab.direccion == null ? "" : objLab.direccion);
                        cmd.Parameters.AddWithValue("@personacontacto", objLab.contacto == null ? "" : objLab.contacto);
                        cmd.Parameters.AddWithValue("@numerocontacto", objLab.numcontacto == null ? "" : objLab.numcontacto);
                        int ans = cmd.ExecuteNonQuery();
                        return ans;
                    }
                }
                catch (Exception e)
                {
                    cn.Close();
                    throw new Exception("Error al guardar laboratorio: " + e.Message);
                }
            }

        }
        public LaboratorioCLS recuperarLaboratorio(int idLab)
        {
            LaboratorioCLS objLab = null;


            using (SqlConnection cn = new SqlConnection(cadenaDato))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspRecuperarLaboratorio", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;

                        cmd.Parameters.AddWithValue("@id", idLab);
                        SqlDataReader dr = cmd.ExecuteReader();
                        if (dr != null)
                        {
                            while (dr.Read())
                            {
                                objLab = new LaboratorioCLS();
                                objLab.idLaboratorio = dr.IsDBNull(0) ? 0 : dr.GetInt32(0);
                                objLab.nombre = dr.IsDBNull(1) ? "" : dr.GetString(1);
                                objLab.direccion = dr.IsDBNull(2) ? "" : dr.GetString(2);
                                objLab.contacto = dr.IsDBNull(3) ? "" : dr.GetString(3);
                                objLab.numcontacto = dr.IsDBNull(4) ? "" : dr.GetString(4);
                            }

                        }
                    }

                }
                catch (Exception ex)
                {
                    throw new Exception("Error al recuperar tipo medicamento: " + ex.Message);
                }
            }
            return objLab;
        }

        public void EliminarLab(int id)
        {


            using (SqlConnection cn = new SqlConnection(cadenaDato))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspEliminarLaboratorio", cn))
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
