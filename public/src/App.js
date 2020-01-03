import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [store, setStore] = useState([]);
  useEffect(() => {
    const stores = async () => {
      const temp = await axios.get("/api/v1/stores");
      console.log(temp);
      setStore(temp);
    };
    stores();
    //es-lint-disable-next-line
  }, []);
  const getStores = async e => {
    e.preventDefault();
    console.log(store);
  };
  return (
    <div>
      This is a react application!!!
      <button onClick={e => getStores(e)}>Click me to get results</button>
    </div>
  );
};

export default App;
