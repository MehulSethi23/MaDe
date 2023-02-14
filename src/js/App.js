import { useState } from "react";
import "../css/App.css";
import Navbar from "./Navbar";
import Grid from "./Grid";

function App() {
  const [Data, setData] = useState([]);
  //Getting Data from Navbar
  const DataFromNav = (value) => {
    setData(value);
  };
  return (
    <>
      <Navbar callback={DataFromNav} />
      <Grid Data={Data} />
    </>
  );
}

export default App;
