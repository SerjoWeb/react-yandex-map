import { useState } from "react";
import { useEffect } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

const MapView = ({ coordinates, budget }) => {
  const [ center, setCenter ] = useState([55.75, 37.57]);
  const [ placemarks, setPlacemarks ] = useState([]);
  const [ windowDimenion, setWindowDimenion ] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight
  });

  const detectSize = () => {
    setWindowDimenion({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight
    });
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize);

    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, [windowDimenion]);

  useEffect(() => {
    if (coordinates.length <= 0 || budget == '') return;

    setPlacemarks(prev => prev.concat({ coordinates, budget }));
    setCenter(coordinates);
  }, [coordinates, budget]);

  return (
    <div className="map">
      <YMaps query={{ lang: 'en_RU' }} load='package.full'>
        <Map 
          state={{center, zoom: 9}}
          height={windowDimenion.winWidth >= 650 ? '100vh' : '100%'}
          width='100%'
        >
          {placemarks.length > 0 && placemarks.map(placemark => (
            <Placemark
              key={(Math.random() * 10 / 2)}
              geometry={placemark.coordinates}
              balloonContentHeader={placemark.budget}
            />
          ))}
        </Map>
      </YMaps>
    </div>
  )
}

export default MapView;
