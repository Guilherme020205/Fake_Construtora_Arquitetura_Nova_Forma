import type { LatLngTuple } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/Leaflet.css";

export default function Map() {
    
const position: LatLngTuple = [-23.564897814664906, -46.65190541349535];

    return (
    <MapContainer center={position} zoom={18} scrollWheelZoom={true} className="w-[500px] h-[300px] z-50">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Av. Paulista, 1000 – São Paulo – SP
        </Popup>
      </Marker>
    </MapContainer>
  );
}
