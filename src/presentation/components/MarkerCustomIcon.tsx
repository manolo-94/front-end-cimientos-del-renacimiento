import L from "leaflet";

const MarkerCustomIcon: any = () => {
    return L.divIcon({
        className: "custom-div-icon",
        html: `<div class="custom-cluster-verde";width:20px;height:20px;border-radius:50%;"></div>`,
        iconSize: [20, 20],
        popupAnchor: [0, -10],
    });
}

export default MarkerCustomIcon;
