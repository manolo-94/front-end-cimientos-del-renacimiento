import { Modal } from "react-bootstrap";
import type { Obra } from "../../domain/models/Obra";
import "swiper/css";
import SwiperImage from "./SwiperImage";

type ModalObraDetailProps = {
    isShowing: boolean;
    onClose: () => void
    obra: Obra
}


const ModalObraDetail: React.FC<ModalObraDetailProps> = ({ isShowing, onClose, obra }) => {

    return (

        <Modal show={isShowing} onHide={onClose} size="xl" centered>
            <Modal.Header closeButton>
                <Modal.Title>Detalles de la {obra.nombre_de_obra}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p><strong>Obra:</strong> {obra.nombre_de_obra}</p><br />
                <p><strong>Municipio:</strong> {obra.nombre_municipio}</p><br />
                <p><strong>Ejecutora:</strong> {obra.nombre_de_ejecutora}</p><br />
                <p><strong>Inversión:</strong> {obra.inversion}</p><br />
                <p><strong>Avance:</strong> {obra.avance} %</p><br />
                {obra.descripcion && <p><strong>Descripción:</strong> {obra.descripcion}</p>}

                <SwiperImage images={obra.imagenes} />

            </Modal.Body>
        </Modal>

    )


};

export default ModalObraDetail;