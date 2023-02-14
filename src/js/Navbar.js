import React, { useState } from "react";
import "../css/nav.css";
import "../css/button.scss";
import axios from "./axios";
import LinearProgress from "@mui/material/LinearProgress";

function Navbar({ callback }) {
  const [Data, setData] = useState([]);
  const [Error, setError] = useState("");
  const [Loader, setLoader] = useState(false);

  // function to get data
  const getData = setTimeout(async () => {
    try {
      const data = await axios.get().then((res) => {
        setData(res.data.data);
        setLoader(false);
      });
    } catch (error) {
      setError(error.message);
      console.log("Error is :", error);
    }
  }, 3000); //Timeout for 3 seconds to display the Loader
  callback(Data);

  return (
    <>
      {Loader && <LinearProgress />}
      <nav class="navbar">
        <div class="navbar-container container">
          <ul class="menu-items">
            <li>
              <a
                onClick={() => {
                  setLoader(true);
                  getData();
                }}
                class="button"
              >
                Get Users
              </a>
            </li>
          </ul>

          <h1 class="logo">MaDe</h1>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
