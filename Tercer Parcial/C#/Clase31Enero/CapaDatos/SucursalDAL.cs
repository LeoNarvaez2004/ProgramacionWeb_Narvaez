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
    public class SucursalDAL
    {
        public List<SucursalCLS> ListarSucursal()
        {
            List<SucursalCLS> lista = null;
            IConfigurationBuilder cfg = new ConfigurationBuilder();
            cfg.AddJsonFile(Path.Combine(Directory.GetCurrentDirectory(), "appsettings.json"));
            var root = cfg.Build();
            var cadenaDato = root.GetConnectionString("cn");

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
            IConfigurationBuilder cfg = new ConfigurationBuilder();
            cfg.AddJsonFile(Path.Combine(Directory.GetCurrentDirectory(), "appsettings.json"));
            var root = cfg.Build();
            var cadenaDato = root.GetConnectionString("cn");
            
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
        
    }
}
