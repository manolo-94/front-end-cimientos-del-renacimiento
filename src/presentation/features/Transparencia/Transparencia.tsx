import React from "react";
import TitleSection from "../../components/TitleSection";
import "./Transparencia.css"
import  auditores from "../../../assets/img/auditores.jpg"
import reportes from "../../../assets/img/reportes.png"

const Fidecomiso: React.FC = () => {
    return (
        <section id="Transparencia">
            <TitleSection title="Transparencia" />
            <div className="transparencia">
                <div>
                    <img src={reportes} alt="Reporte" className="transparencia-img" />
                    <p>Accede a reportes trimestrales y documentación oficial.</p>
                </div>
                <div>
                    <img src={auditores} alt="Auditoría" className="transparencia-img" />
                    <p>Auditorías públicas disponibles para descarga.</p>
                </div>
            </div>
        </section>
    );
};      

export default Fidecomiso