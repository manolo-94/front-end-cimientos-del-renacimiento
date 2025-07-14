import { useMap } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";

const ButtonResetMap: React.FC = () => {
  const map = useMap();

  useEffect(() => {
    const resetControl = new L.Control({ position: "bottomright" }) as L.Control;

    resetControl.onAdd = function () {
      const div = L.DomUtil.create("div", "leaflet-bar leaflet-control leaflet-control-custom");

      div.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="2" x2="12" y2="6"></line>
    <line x1="12" y1="18" x2="12" y2="22"></line>
    <line x1="2" y1="12" x2="6" y2="12"></line>
    <line x1="18" y1="12" x2="22" y2="12"></line>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
`;

      div.style.backgroundColor = "white";
      div.style.width = "30px";
      div.style.height = "30px";
      div.style.display = "flex";
      div.style.alignItems = "center";
      div.style.justifyContent = "center";
      div.style.cursor = "pointer";
      div.title = "Recentrar mapa";

      div.onclick = () => {
        map.setView([20.96737, -89.59259], 8); // Tus coords y zoom por defecto
      };

      return div;
    };

    resetControl.addTo(map);

    // Limpia el control al desmontar
    return () => {
      resetControl.remove();
    };
  }, [map]);

  return null; // Este componente no renderiza nada en JSX
};

export default ButtonResetMap;
