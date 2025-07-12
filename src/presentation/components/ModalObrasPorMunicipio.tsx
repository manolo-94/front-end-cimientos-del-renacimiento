import { Modal } from "react-bootstrap";
import type { Obra } from "../../domain/models/Obra";
import { useState } from "react";
import ModalObraDetail from "./ModalObraDetail";

type ModalObrasPorMunicipioProps = {
    isShowing: boolean;
    onClose: () => void;
    municipio: string;
    obras: Obra[];
}
const ModalObrasPorMunicipio: React.FC<ModalObrasPorMunicipioProps> = ( { isShowing, onClose, municipio, obras } ) => {

    const [ obraSeleccionada, setObraSeleccionada] = useState<Obra | null>(null);

    return(
        <>
        <Modal show={isShowing} onHide={onClose} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>Obras en {municipio}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ul className="list-group">
                    {obras.map((obra, idx )=> (
                        <li key={obra.id} onClick={ () => setObraSeleccionada(obra)} className="list-group-item obra-link" data-id={obra.id} data-mun={municipio}>
                            {obra.nombre_de_obra}
                             <button 
                                onClick={ () =>  setObraSeleccionada(obra)} 
                                className="button-btn-modal-detalle">Ver Detalle</button>
                        </li>
                        
                    ))}
                   
                </ul>
            </Modal.Body>
        </Modal>

              {obraSeleccionada && (
        <ModalObraDetail
          isShowing={true}
          onClose={() => setObraSeleccionada(null)}
          obra={obraSeleccionada }
        />
      )}
        </>
    );

};

export default ModalObrasPorMunicipio;