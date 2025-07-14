import type { Obra } from "../../../domain/models/Obra";


/**
 * Fetches the obras data of Yucatan's obras from the server.
 * 
 * @returns A Promise that resolves to the GeoJSON data.
 * @throws An error if the request fails.
 */
const fetchObras = async (): Promise<Obra[]> => {
    try {
        
        const response = await fetch(import.meta.env.BASE_URL + 'geo/fake_obras.json');
        if (!response.ok) {
            throw new Error("Error al cargar las obras");
        }
        const data = await response.json();
        return data as Obra[];
    } catch (error) {
        console.error(' Error al cargar las obras: ', error);
        throw error;
    }
}

export default fetchObras;