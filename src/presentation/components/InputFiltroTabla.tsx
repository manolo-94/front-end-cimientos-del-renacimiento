import "../styles/InputFiltroTabla.css"

type InputFiltroMunicipioProps = {
        busqueda: string;
        onChange: (value:string) => void;
    };
const InputFiltroTabla: React.FC<InputFiltroMunicipioProps> = ({ busqueda, onChange }) => {

    return (
        <div className="contenedor-filtro">

            <input
                type="text"
                placeholder="Buscar municipio..."
                value={busqueda}
                onChange={(e) => {  onChange(e.target.value); }}
                className="input-filtro-tabla"
            />
        </div>
    );
};

export default InputFiltroTabla;