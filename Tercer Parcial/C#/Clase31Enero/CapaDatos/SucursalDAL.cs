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
    public class SucursalDAL : CadenaDAL
    {
        public List<SucursalCLS> ListarSucursal()
        {
            List<SucursalCLS> lista = null;

            using (SqlConnection cn = new SqlConnection(cadenaDato))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspListarSucursal", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        SqlDataReader dr = cmd.ExecuteReader();
                        if (dr != null)
                        {
                            SucursalCLS medCLS;
                            lista = new List<SucursalCLS>();
                            while (dr.Read())
                            {
                                medCLS = new SucursalCLS();
                                medCLS.idSucursal = dr.GetInt32(0);
                                medCLS.nombre = dr.GetString(1);
                                medCLS.direccion = dr.GetString(2);
                                lista.Add(medCLS);
                            }

                        }
                    }

                }
                catch (Exception ex)
                {
                    throw new Exception("Error al listar sucursal: " + ex.Message);
                }
            }
            return lista;
        }
        public List<SucursalCLS> FiltrarSucursal(SucursalCLS obj)
        {
            List<SucursalCLS> lista = null;

            using (SqlConnection cn = new SqlConnection(cadenaDato))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspFiltrarSucursal", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        
                        cmd.Parameters.AddWithValue("@nombresucursal", obj.nombre == null ? "" : obj.nombre);
                        cmd.Parameters.AddWithValue("@direccion", obj.direccion == null ? "" : obj.direccion);
                        SqlDataReader dr = cmd.ExecuteReader();
                        if (dr != null)
                        {
                            SucursalCLS medCLS;
                            lista = new List<SucursalCLS>();
                            while (dr.Read())
                            {
                                medCLS = new SucursalCLS();
                                medCLS.idSucursal = dr.GetInt32(0);
                                medCLS.nombre = dr.GetString(1);
                                medCLS.direccion = dr.GetString(2);
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
        public int GuardarSucursal(SucursalCLS obj)
        {
            using (SqlConnection cn = new SqlConnection(cadenaDato))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspGuardarSucursal", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@iidsucursal", obj.idSucursal == 0 ? 0 : obj.idSucursal);
                        cmd.Parameters.AddWithValue("@nombre", obj.nombre == null ? "" : obj.nombre);
                        cmd.Parameters.AddWithValue("@direccion", obj.direccion == null ? "" : obj.direccion);

                        int ans = cmd.ExecuteNonQuery();
                        return ans;
                    }
                }
                catch (Exception e)
                {
                    cn.Close();
                    throw new Exception("Error al guardar sucursal: " + e.Message);
                }
            }

        }
        public SucursalCLS recuperarSucursal(int idSuc)
        {
            SucursalCLS medCLS = null;


            using (SqlConnection cn = new SqlConnection(cadenaDato))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspRecuperarSucursal", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;

                        cmd.Parameters.AddWithValue("@iidsucursal", idSuc);
                        SqlDataReader dr = cmd.ExecuteReader();
                        if (dr != null)
                        {
                            while (dr.Read())
                            {
                                medCLS = new SucursalCLS();
                                medCLS.idSucursal = dr.IsDBNull(0) ? 0 : dr.GetInt32(0);
                                medCLS.nombre = dr.IsDBNull(1) ? "" : dr.GetString(1);
                                medCLS.direccion = dr.IsDBNull(2) ? "" : dr.GetString(2);
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
        public void EliminarSucursal(int id)
        {
            using (SqlConnection cn = new SqlConnection(cadenaDato))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspEliminarSucursal", cn))
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
