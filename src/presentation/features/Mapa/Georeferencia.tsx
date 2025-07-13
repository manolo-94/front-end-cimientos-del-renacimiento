import React from "react";
import TitleSection from "../../components/TitleSection";
import MapaObras from "../../components/MapaObras";



const Georeferencia: React.FC = () => {

    return (
        <section id="Mapa">
            <TitleSection title="Mapa de obra pública georreferenciada" />

            <MapaObras />
        </section>
    );  
}   

export default Georeferencia