import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "../styles/SwiperImage.css"
type SwiperImageProps = {
    images: string[]
}
const SwiperImage: React.FC<SwiperImageProps> = ({images}) => {

    const [activeIndex, setActiveIndex] = useState<number>(0);
   
    return(
        <>
        <div className="container-galery-contador-popup">
                    Imagen {activeIndex + 1} de {images.length}
                </div>
                <Swiper 
                    modules={[Navigation]} 
                    spaceBetween={10} 
                    slidesPerView={1} 
                    navigation
                     onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                     >
                    {images.map((img, idx) => (
                        <SwiperSlide key={idx}>
                            <img
                                src={img}
                                alt={`obra-${idx}`}
                                style={{
                                    width: "100%",
                                    maxHeight: "60vh",
                                    objectFit: "contain",
                                    borderRadius: "8px"
                                }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
        </>
    );
};

export default SwiperImage;