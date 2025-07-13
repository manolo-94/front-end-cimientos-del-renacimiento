import L from 'leaflet';

/**
 * Obtiene un array de los nombres de los municipios presentes en el
 * GeoJSON pasado como par metro.
 *
 * @param geoData - El objeto GeoJSON que contiene los datos de los
 *                 municipios.
 * @returns Un array de strings con los nombres de los municipios,
 *          ordenados alfabeticamente.
 */
export const getMunicipios = (geoData: any): string[] => {
    const municipiosSet = new Set<string>();

    geoData.features.forEach((f: any) => {
        const nombre = f.properties?.NOMGEO;
        if (typeof nombre === 'string') {
            municipiosSet.add(nombre);
        }
    });

    // Almacenamos y ordenamos los municipios en un array.
    const municipios = Array.from(municipiosSet).sort();

    return municipios;
};


/**
 * Filtra el objeto GeoJSON para incluir solo el municipio seleccionado.
 * 
 * @param geoData - El objeto GeoJSON que contiene los datos de los municipios.
 * @param municipioSeleccionado - El nombre del municipio a seleccionar.
 * @returns Un objeto GeoJSON que contiene solo las características del municipio seleccionado,
 *          o todas las características si no se selecciona ningún municipio.
 */

export const getGeoDataFiltrada = (geoData: any, municipioSeleccionado: string | null) => {
    const geoDataFiltrada = municipioSeleccionado ? {
        ...geoData,
        features: geoData.features.filter(
            (f: any) => f.properties?.NOMGEO === municipioSeleccionado)
    } : geoData.features;

    return geoDataFiltrada;
};

/**
 * Establece el estilo de una capa GeoJSON en base a si el municipio
 * de la capa coincide con el municipio seleccionado o no.
 * 
 * @param feature - El objeto GeoJSON que representa la capa.
 * @param municipioSeleccionado - El nombre del municipio seleccionado.
 * @returns El estilo para la capa, que incluye el color del borde,
 *          el ancho del borde, la opacidad del relleno y el color del
 *          relleno.
 */
export const getStyleFiltroMuncipio = (feature: any, municipioSeleccionado: string | null) => {
    const isSelected = feature.properties?.NOMGEO === municipioSeleccionado;

    const styleFiltroMunicipio = {
        color: isSelected ? 'yellow' : 'var(--color-matiz-azulado)',
        weight: isSelected ? 3 : 2,
        fillOpacity: isSelected ? 0.7 : 0.5,
        fillColor: isSelected ? "#ffff00" : "var(--color-mostaza)",
    };

    return styleFiltroMunicipio;
};

/**
 * Centra el mapa en el municipio seleccionado, si este existe.
 *
 * @param mapRef - La referencia al mapa Leaflet.
 * @param geoData - El objeto GeoJSON que contiene los datos de los municipios.
 * @param municipioSeleccionado - El nombre del municipio seleccionado.
 */
export const centrarMapaEnMunicipio = (mapRef: L.Map, geoData: any , municipioSeleccionado: string | null) => {
   
            const selectedFeature = geoData.features.find(
                (f: any) => f.properties?.NOMGEO === municipioSeleccionado
            );
    
           
            if (selectedFeature) {
                
                const layer = L.geoJSON(selectedFeature);
              
                const bounds = layer.getBounds();
                
                mapRef.fitBounds(bounds, { padding: [20, 20] });
            }
}