import { LatLng } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.gridlayer.googlemutant";
import { FC, useState } from "react";
import {
  Circle,
  LayersControl,
  MapContainer,
  TileLayer,
  ZoomControl,
} from "react-leaflet";
import Logo from "../Logo/Logo";
import SlideDrawerBottom from "../SlideDrawerBottom/SlideDrawerBottom";
import SlideDrawerLeft from "../SlideDrawerLeft/SlideDrawerLeft";
import "./MapDemo.css";

interface MapDemoProps {
  position: LatLng;
}

// TODO: Refactor this down, or scrap it. I'm having to work fast, so corners are getting cut for proof of concept
const MapDemo: FC<MapDemoProps> = ({ position }: MapDemoProps) => {
  const [showTrip, setShowTrip] = useState(false);
  const [showGraph, setShowGraph] = useState(false);

  return (
    <>
      <div className="leaflet-container">
        <Logo showTrip={setShowTrip} showGraph={setShowGraph} />
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={true}
          zoomControl={false}
        >
          <ZoomControl position="bottomright" />
          <LayersControl position="bottomright">
            <LayersControl.BaseLayer name={"satellite".toUpperCase()}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name={"osm".toUpperCase()} checked={true}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </LayersControl.BaseLayer>
            <LayersControl.Overlay name={"road conditions".toUpperCase()}>
              <Circle
                center={position}
                pathOptions={{ fillColor: "blue" }}
                radius={200}
              />
            </LayersControl.Overlay>
            <LayersControl.Overlay name={"lorem ipsum".toUpperCase()}>
              <Circle
                center={position}
                pathOptions={{ fillColor: "blue" }}
                radius={200}
              />
            </LayersControl.Overlay>
            <LayersControl.Overlay name={"ipsum lorem".toUpperCase()}>
              <Circle
                center={position}
                pathOptions={{ fillColor: "blue" }}
                radius={200}
              />
            </LayersControl.Overlay>
          </LayersControl>
          {showTrip && <SlideDrawerLeft />}
          {showGraph && <SlideDrawerBottom />}
        </MapContainer>
      </div>
    </>
  );
};

export default MapDemo;
