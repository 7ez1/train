

/*import React, { useState } from 'react';
import { MapContainer, TileLayer, Polygon, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import './App.css';

import customIconUrl from './google-maps.png';

function App() {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const regions = [
    {
      ide: 'Region 1',
      color: 'red',
      coordinates: [
        [35.8238, 10.6237],
       

      ],
      popUp: 'O2:C'
    },
    {
      name: 'Region 2',
      color: 'green',
      coordinates: [
        [35.8228, 10.6330],
        [35.8255, 10.6355],
        [35.8255, 10.6380],
        [35.8240, 10.6395],
      ],
      popUp: 'Hello, I am Region 2'
    },
    {
      name: 'Region 3',
      color: 'blue',
      coordinates: [
        [35.8205, 10.6400],
        [35.8230, 10.6415],
        [35.8230, 10.6430],
        [35.8220, 10.6430],
        [35.8210, 10.6415]
      ],
      popUp: 'Hello, I am Region 3'
    }
  ];

  const customIcon = new Icon({
    iconSize: [38, 38],
    iconUrl: customIconUrl
  });

  const handleRegionClick = (region) => {
    setSelectedRegion(region);
  };

  return (
    <MapContainer center={[35.8250, 10.6417]} zoom={13}>
      <TileLayer
        attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {regions.map((region, index) => (
        <Polygon
          key={index}
          positions={region.coordinates}
          pathOptions={{ color: region.color }}
          onclick={() => handleRegionClick(region)}
        >
          <Popup>{region.popUp}</Popup>
        </Polygon>
      ))}
      {selectedRegion && (
        <Polygon positions={selectedRegion.coordinates} color="red" />
      )}
    </MapContainer>
  );
}

export default App;
*/
import React from 'react';
import { MapContainer, TileLayer , Marker } from 'react-leaflet';
import { Icon } from 'leaflet';
import"./App.css";
function App() {
  const markers = [
    {
      geocode : [48.86,2.3522],
      popUp : "Hello I'am popup 1",
        },
        {
          geocode : [48.85,2.3522],
          popUp : "Hello I'am popup 2",
            },
            {
              geocode : [48.855,2.3522],
              popUp : "Hello I'am popup 3",
                }
      ];
      const customIcon = new Icon ({
        iconSize: [38,38],
        iconUrl:require("./placeholder.png")
      
      })
  return (

    <MapContainer center={[48.8566,2.3522 ]} zoom={13}>
      <TileLayer
        attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map(marker =>(
        <Marker position={marker.geocode} icon={customIcon}></Marker>
        ))}
    </MapContainer>);
}

export default App;