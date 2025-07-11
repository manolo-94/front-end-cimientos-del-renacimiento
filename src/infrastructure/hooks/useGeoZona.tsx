import { useEffect, useState } from "react";
import fetchZonasGeoZone from "../api/geo/geoApi";

const useGeoZona = () => {
    const [geoData, setGeoData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedMunicipio, setSetlectedMunicipio] = useState<string | null>(null)

    useEffect(() => {
      fetchZonasGeoZone()
        .then((response) => {
          setGeoData(response);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        })
        .finally(() => {
          setLoading(false);
        });
    }, [])
    

    return { geoData, loading, error, selectedMunicipio, setSetlectedMunicipio };
}

export default useGeoZona