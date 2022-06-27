import "./styles/app.scss";
import Addresses from "./components/Addresses";
import MapView from "./components/MapView";
import useStore from "./store/useStore";
import { useState } from "react";

const App = () => {
  const { adresses } = useStore((state) => state);
  const [ coordinates, setCoordinates ] = useState([]);
  const [ budget, setBudget ] = useState('');

  const handleMark = (coordinates, budget) => {
    setCoordinates(coordinates);
    setBudget(budget);
  }; 

  return (
    <div className="App">
      <Addresses adresses={adresses} handleMark={handleMark} />
      <MapView coordinates={coordinates} budget={budget} />
    </div>
  );
};

export default App;
