import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiZ2hvdXNlOTciLCJhIjoiY2s0eW5xNzZkMDJkOTNnc2F1ZDBndzhxZyJ9.ptH7ySBJvuqNYLVu_oKUug"
});
const markerUrl ='https://cdn3.vectorstock.com/i/1000x1000/13/62/location-icon-pin-symbol-isolated-on-white-vector-21641362.jpg';
const App = () => {
  const [store, setStore] = useState([]);
  useEffect(() => {
    const stores = async () => {
      const temp = await axios.get("/api/v1/stores");
      console.log(temp);
      setStore(temp);
    };
    stores();
  }, []);
  const getStores = async e => {
    e.preventDefault();
    console.log(store);
  };
  return (
    <div>
      This is a react application!!!
      <button onClick={e => getStores(e)}>Click me to get results</button>
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "100vh",
          width: "100vw"
        }}
      >
        {/* <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}> */}
          <Marker coordinates={[-0.2416815, 51.5285582]} anchor="bottom">
            <img src={markerUrl} style={{width: '50px', height: '50px'}}/>
          </Marker>
        {/* </Layer> */}
      </Map>
      ;
    </div>
  );
};

export default App;
