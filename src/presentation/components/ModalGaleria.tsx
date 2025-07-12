import { Modal, ModalBody, ModalHeader } from "react-bootstrap";
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/Galeria.css'
import SwiperImage from "./SwiperImage";

type ModalGaleriaProps = {
    isShowing: boolean;
    onClose: () => void;
    title: string,
    imagenes: string[];
}

const ModalGaleria: React.FC<ModalGaleriaProps> = ({ isShowing, onClose, title, imagenes}) => {

    return (
        <Modal show={isShowing} onHide={onClose} size="lg" centered>
            <ModalHeader closeButton>
                <Modal.Title>Imágenes de la obra: {title}</Modal.Title>
            </ModalHeader>
            <ModalBody>

                <SwiperImage images={imagenes} />
                
            </ModalBody>
        </Modal>
    );

}

export default ModalGaleria;