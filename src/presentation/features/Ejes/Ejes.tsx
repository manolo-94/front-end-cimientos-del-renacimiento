import React from "react";
import TitleSection from "../../components/TitleSection";
import CardEje from "../../components/CardEje";


const Ejes: React.FC = () => {
    return (
        <section id="Ejes">
            <TitleSection title="Ejes de trabajo" />

            <div className="ejes-grid d-flex flex-wrap justify-content-center gap-7">
                <CardEje
                    title="Formación técnica y profesionalización"
                    description="Impulsa el desarrollo de habilidades y competencias en los
          trabajadores mediante capacitaciones, certificaciones y programas de
          educación técnica."
                />
                <CardEje
                    title="Seguridad laboral en obra"
                    description="Promueve entornos seguros en el trabajo, con protocolos de
          prevención, equipos adecuados y capacitación constante en normas de
          seguridad."
                />
                <CardEje
                    title="Prevención de adicciones y salud mental"
                    description="Fomenta el bienestar integral con campañas de concientización, apoyo
          psicológico y acciones para prevenir adicciones en entornos
          laborales."
                />
                <CardEje
                    title="Acompañamiento y bienestar familiar e infantil"
                    description="Brinda apoyo a las familias de los trabajadores mediante programas
          de desarrollo infantil, asistencia educativa y servicios integrales
          de bienestar."
                />
                <CardEje
                    title="Transparencia y rendición de cuentas"
                    description="Garantiza el acceso a información clara y pública sobre el uso de
          recursos, avances de obra y resultados, promoviendo la confianza
          ciudadana."
                />
            </div>

        </section>
    );
}

export default Ejes