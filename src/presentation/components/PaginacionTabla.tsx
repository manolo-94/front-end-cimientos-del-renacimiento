import "../styles/PaginacionTabla.css"
type PaginacionTablaProps = {
    paginaActual: number;
    totalPaginas: number;
    onPaginaAnterior: () => void;
    onPaginaSiguiente: () => void;
}

const PaginacionTabla: React.FC<PaginacionTablaProps> = ( { paginaActual, totalPaginas, onPaginaAnterior, onPaginaSiguiente} ) => {
    return (
        <tr>
            <td colSpan={3}>
              <div className="paginacion">
                <button onClick={onPaginaAnterior} disabled={paginaActual === 1}>
                  Anterior
                </button>
                <span>
                  Página {paginaActual} de {totalPaginas}
                </span>
                <button onClick={onPaginaSiguiente} disabled={paginaActual === totalPaginas}>
                  Siguiente
                </button>
              </div>
            </td>
          </tr>
    );
};

export default PaginacionTabla;