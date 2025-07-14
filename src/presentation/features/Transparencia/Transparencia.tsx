import React from "react";
import TitleSection from "../../components/TitleSection";
import "./Transparencia.css"
import auditores from "../../../assets/img/auditores.jpg"
import reportes from "../../../assets/img/reportes.png"

const Fidecomiso: React.FC = () => {
    return (
        <section id="Transparencia">
            <TitleSection title="Transparencia" />
            <div className="transparencia">

                <a href="https://tusitio.gob.mx/reportes" target="_blank" rel="noopener noreferrer" className="transparencia-card">
                    <img src={reportes} alt="Reporte" className="transparencia-img" />
                    <p>Accede a reportes trimestrales y documentación oficial.</p>
                </a>

                <a href="https://tusitio.gob.mx/auditorias" target="_blank" rel="noopener noreferrer" className="transparencia-card">
                    <img src={auditores} alt="Auditoría" className="transparencia-img" />
                    <p>Auditorías públicas disponibles para descarga.</p>
                </a>

            </div>
        </section>

    );
};

export default Fidecomiso