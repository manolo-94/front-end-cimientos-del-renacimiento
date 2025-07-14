import React from "react";
import TitleSection from "../../components/TitleSection";
import "./Transparencia.css"
import auditores from "../../../assets/img/auditores.jpg"
import reportes from "../../../assets/img/reportes.png"

const Fidecomiso: React.FC = () => {
    return (
        <section id="Transparencia">
            <TitleSection title="Transparencia" />

            <div className="transparencia-modern">
                {/* Bloque 1 */}
                <div className="transparencia-item">
                    <img src={reportes} alt="Reporte" className="transparencia-img-modern" />
                    <div className="transparencia-text">
                        <h3>Reportes Trimestrales</h3>
                        <p>Consulta informes detallados de avances, recursos ejercidos y metas cumplidas. Información actualizada cada trimestre.</p>
                        <a href="https://tusitio.gob.mx/reportes" target="_blank" rel="noopener noreferrer" className="btn-descargar">
                            Ver reportes
                        </a>
                    </div>
                </div>

                {/* Bloque 2 (invertido) */}
                <div className="transparencia-item reverse">
                    <div className="transparencia-text">
                        <h3>Auditorías Públicas</h3>
                        <p>Accede a auditorías realizadas por órganos de fiscalización. Promovemos la rendición de cuentas y el buen uso de los recursos públicos.</p>
                        <a href="https://tusitio.gob.mx/auditorias" target="_blank" rel="noopener noreferrer" className="btn-descargar">
                            Ver auditorías
                        </a>
                    </div>
                    <img src={auditores} alt="Auditoría" className="transparencia-img-modern" />
                </div>
            </div>
        </section>


    );
};

export default Fidecomiso