import React from "react";
import TitleSection from "../../components/TitleSection";
import CardAvance from "../../components/CardAvance";
import logo from "../../../assets/img/logo.png"

const Avance: React.FC = () => {
    return (
        <section className="avance-section" id="Avance">
            <TitleSection title="Avance por entidad" />
            <div className="avance-grid d-flex flex-wrap justify-content-center gap-7">

            <CardAvance
                img={''}
                title="IDEFEEY"
                porcentaje={80}
                descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <CardAvance
                img={''}
                title="INCAY"
                porcentaje={60}
                descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <CardAvance
                img={''}
                title="INCCOPY"
                porcentaje={40}
                descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <CardAvance
                img={''}
                title="IVEY"
                porcentaje={20}
                descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <CardAvance
                img={''}
                title="JAPAY"
                porcentaje={10}
                descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            </div>

        </section>
    );
};

export default Avance;