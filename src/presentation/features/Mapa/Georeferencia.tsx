import React from "react";
import TitleSection from "../../components/TitleSection";
import MapaObras from "../../components/MapaObras";



const Georeferencia: React.FC = () => {

    return (
        <section id="Mapa">
            <TitleSection title="Mapa de Obras Públicas Georeferenciadas" />

            <MapaObras />
        </section>
    );  
}   

export default Georeferencia