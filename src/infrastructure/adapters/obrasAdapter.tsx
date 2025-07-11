import type { Obra } from "../../domain/models/Obra";

const obrasAdapter = (rawData: any[]): Obra[] => {
    return rawData.map(item => ({
        id: item.id,
        nombre_municipio: item.nombre_municipio,
        nombre_de_obra: item.nombre_de_obra,
        inversion: item.inversion,
        nombre_de_ejecutora: item.nombre_de_ejecutora,
        avance: item.avance,
        descripcion: item.descripcion,
        imagenes: item.imagenes,
        latitude: item.latitude,
        longitude: item.longitude
    }));
};

export default obrasAdapter;