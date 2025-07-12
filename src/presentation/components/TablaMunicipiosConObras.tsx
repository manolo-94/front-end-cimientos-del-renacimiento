import React from "react";
import { useMemo, useState } from "react";
import { Table } from "react-bootstrap";
import useObras from "../../infrastructure/hooks/useObras";
import useGeoZona from "../../infrastructure/hooks/useGeoZona";
import type {Obra } from "../../domain/models/Obra";
import { getMunicipios } from "../../domain/services/municipioService";
import '../styles/TablaMunicipiosConObras.css'

const TablaMunicipiosConObras: React.FC = () => {

  const { geoData, loading: loadingGeo, error: errorGeo } = useGeoZona()
  const { obras, loading: loadingObras, error: errorObras } = useObras();
  const [municipioSeleccionado, setMunicipioSeleccionado] = useState<string | null>(null);

  const municipiosConObras = useMemo( () => {
    
    if (!geoData || !obras) return [];

    const obrasPorMunicipio: Record<string, Obra[]> = {}; 

    for (const obra of obras) {
      const municipio = obra.nombre_municipio;
      if (!obrasPorMunicipio[municipio]) {
        obrasPorMunicipio[municipio] = [];
      }
      obrasPorMunicipio[municipio].push(obra);
    }

    const municipios = getMunicipios(geoData).map( (municipio) => {
      const nombre = municipio;
      const obrasMunicipio = obrasPorMunicipio[municipio] || [];

      return {
        nombre,
        totalObras: obrasMunicipio.length,
        obras: obrasMunicipio
      }
    })

    return municipios.sort((a,b) => a.nombre.localeCompare(b.nombre));

  }, [geoData, obras])

  if (loadingGeo || loadingObras) return <p>Loading...</p>;
  if (errorGeo || errorObras) return <p>Error al cargar las obras: {errorGeo || errorObras}</p>;

  return (
        
    <Table striped bordered hover className="tabla-municipios-obras">
      <thead>
        <tr>
          <th>Municipio</th>
          <th>Total de Obras</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {municipiosConObras.map( (value, idx) => (
          <React.Fragment key={idx}>
            <tr key={idx}>
              <td>{value.nombre}</td>
              <td>{value.totalObras}</td>
              <td>
                <button className="button-btn-vino" onClick={() => setMunicipioSeleccionado(value.nombre)}>Ver Obras</button>
              </td>
            </tr>

            {municipioSeleccionado === value.nombre && (
              <tr>
                <td colSpan={3}>
                  <ul>
                    {value.obras.map((obra, index) => (
                      <li key={index}>
                        <strong key={index}>{obra.nombre_de_obra}</strong> - ejecutaador por {obra.nombre_de_ejecutora}, inversión: ${obra.inversion} - Avance: {obra.avance}%
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => setMunicipioSeleccionado(null)}>Cerrar</button>
                </td>
              </tr>
            )}

          </React.Fragment>
        ))}
      </tbody>
    </Table>
  );
};

export default TablaMunicipiosConObras;