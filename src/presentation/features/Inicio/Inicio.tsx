import React from "react";
import { Carousel } from "react-bootstrap";
import banner from "../../../assets/img/portada.jpg"
import CarouselImage from "../../components/ui/CarouselImage";
import { FaArrowDown } from 'react-icons/fa';
import './Inicio.css'

const Inicio: React.FC = () => {
    return (

        <section id="Inicio">
            <div className="carousel-container position-relative">

                <Carousel>

                    <Carousel.Item>
                        <CarouselImage src={banner} alt="First slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <CarouselImage src={banner} alt="First slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <CarouselImage src={banner} alt="First slide" />
                    </Carousel.Item>
                </Carousel>

                {/* Flecha hacia abajo */}
                <div className="scroll-down bottom-0 start-50 mb-3">
                    <FaArrowDown size={30} color="#fff" />
                    {/* <span className="fs-1 text-white">&#8595;</span> */}
                </div>

            </div>
        </section>


    );
};

export default Inicio;