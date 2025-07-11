import React from "react";
import '../styles/FiltroMunicipio.css'

type FiltroMunicipioProps = {
    municipios: string[];
    selected: string | null;
    onChangeSelected: (municipios: string | null) => void;
    isShowingFilter: boolean;
    onChangeShowFilter:  (show: boolean) => void;
};

const FiltroMuncipio: React.FC<FiltroMunicipioProps> = ({ municipios, selected, onChangeSelected, isShowingFilter, onChangeShowFilter,
 }) => {
    return (

        <>
        <button className="toggle-filter-btn" onClick={() => onChangeShowFilter(!isShowingFilter)}>
                🔍 Filtrar
            </button>

            <div className={`filter-container ${isShowingFilter ? 'show' : ''}`}>
                <button
                    className="close-filter-btn"
                    onClick={() => onChangeShowFilter(false)}
                >
                    ✖
                </button>

                <select
                    value={selected || ""}
                    onChange={(e) => onChangeSelected(e.target.value || null)}
                >
                    <option value="">Todos los municipios</option>
                    {municipios.map((nombre, i) => (
                        <option key={i} value={nombre}>{nombre}</option>
                    ))}
                </select>

                <br />

                <button
                    id="clear-filters"
                    onClick={() => onChangeSelected(null)}
                >
                    Borrar filtro
                </button>
            </div>
        </>
    );
};

export default FiltroMuncipio;