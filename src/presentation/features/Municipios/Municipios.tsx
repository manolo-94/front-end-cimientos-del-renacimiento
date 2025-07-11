import React from "react";
import TitleSection from "../../components/TitleSection";
import TablaMunicipios from "../../components/TablaMunicipios";

const Municipios: React.FC = () => {
    return (
        <section id="Municipios">
            <TitleSection title="Municipios con Obras" />

            <TablaMunicipios />
        </section>
    );
};

export default Municipios;