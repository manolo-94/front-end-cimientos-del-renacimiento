import React from "react";
import "../styles/global.css"
type TitleSectionProps = {
    title: string
}

const TitleSection: React.FC<TitleSectionProps> = ({title}) => {
    return (
        <h2 className="title-section">{title}</h2>
    );
};

export default TitleSection;