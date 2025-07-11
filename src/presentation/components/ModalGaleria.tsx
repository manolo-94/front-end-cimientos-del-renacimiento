import { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/Galeria.css'

type ModalGaleriaProps = {
    isShowing: boolean;
    onClose: () => void;
    title: string,
    imagenes: string[];
}

const ModalGaleria: React.FC<ModalGaleriaProps> = ({ isShowing, onClose, title, imagenes}) => {

    const [activeIndex, setActiveIndex] = useState<number>(0);

    return (
        <Modal show={isShowing} onHide={onClose} size="lg" centered>
            <ModalHeader closeButton>
                <Modal.Title>Imágenes de la obra: {title}</Modal.Title>
            </ModalHeader>
            <ModalBody>
                {/* <div style={{ textAlign: "center", marginBottom: "10px", fontWeight: "bold" }}> */}
                <div className="container-galery-contador-popup">
                    Imagen {activeIndex + 1} de {imagenes.length}
                </div>
                <Swiper
                modules={[Navigation]}
                    spaceBetween={10}
                    slidesPerView={1}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    navigation
                >
                    { imagenes.map((img, idx) =>(
                        <SwiperSlide key={idx}>
                            <div className="container-images-swiper-slide">

                                <img 
                                    src={img} 
                                    alt={`obra-${idx}`} 
                                    className="center-image-popu image-style-popup"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                    

                </Swiper>
            </ModalBody>
        </Modal>
    );

}

export default ModalGaleria;