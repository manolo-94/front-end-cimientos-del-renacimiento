import React from "react";

type CarrouselImageProps = {
    src: string
    alt: string
    className?: string
}
const CarouselImage: React.FC<CarrouselImageProps> = ({ src, alt, className = 'd-block w-100' }) => {
    return (
        <img
            src={src}
            alt={alt}
            className={className}
        />
    );
}

export default CarouselImage