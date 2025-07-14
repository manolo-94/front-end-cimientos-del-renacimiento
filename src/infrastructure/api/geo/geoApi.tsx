

/**
 * Fetches the GeoJSON data of Yucatan's municipalities from the server.
 * 
 * @returns A Promise that resolves to the GeoJSON data.
 * @throws An error if the request fails.
 */
const fetchZonasGeoZone = async (): Promise<any> => {
    const response = await fetch(import.meta.env.BASE_URL + 'geo/yucatan_municipios_2023.json');


    if (!response.ok) {
        throw new Error("Error al cargar el GeoJSON");
    }
    const data = await response.json();
    return data;
}

export default fetchZonasGeoZone;