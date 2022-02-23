import React, {useEffect} from "react";
import "./global_css/css/style.css";
import "./global_css/css/media.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Router from "./route/Router";
import Authorization from "./components/authorization/Authorization";
import ModalContact from "./components/modalContact/ModalContact";
import InfoBike from "./components/bike/infoBike/InfoBike";
import {tokenAdd} from "./store/authorizationSlice";
import {useDispatch} from "react-redux";

function App() {
  const data = localStorage.getItem("token");
  const parse = JSON.parse(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(tokenAdd(parse))
  }, [])
  return (
      <>
    <div className="container-global">
      <Navbar/>
        <Router/>
    </div>
        <Footer/>
          <Authorization/>
          <ModalContact/>
          <InfoBike/>
        </>
  );
}

export default App;
