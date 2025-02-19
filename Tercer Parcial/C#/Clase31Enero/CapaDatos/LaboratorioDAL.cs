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
    public class LaboratorioDAL
    {
        public List<LaboratorioCLS> ListarLaboratorio()
        {
            List<LaboratorioCLS> lista = null;
            IConfigurationBuilder cfg = new ConfigurationBuilder();
            cfg.AddJsonFile(Path.Combine(Directory.GetCurrentDirectory(), "appsettings.json"));
            var root = cfg.Build();
            var cadenaDato = root.GetConnectionString("cn");

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
        public List<LaboratorioCLS> FiltrarLaboratorio(string nombre, string direccion, string personaCont)
        {
            List<LaboratorioCLS> lista = null;
            IConfigurationBuilder cfg = new ConfigurationBuilder();
            cfg.AddJsonFile(Path.Combine(Directory.GetCurrentDirectory(), "appsettings.json"));
            var root = cfg.Build();
            var cadenaDato = root.GetConnectionString("cn");

            using (SqlConnection cn = new SqlConnection(cadenaDato))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspFiltrarLaboratorio", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@nombre", string.IsNullOrEmpty(nombre) ? "" : nombre);
                        cmd.Parameters.AddWithValue("@direccion", string.IsNullOrEmpty(direccion) ? "" : direccion);
                        cmd.Parameters.AddWithValue("@personacontacto", string.IsNullOrEmpty(personaCont) ? "" : personaCont);

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

    }
}
