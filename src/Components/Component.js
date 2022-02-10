import React from "react";
import Login from "../Components/Login/Login";
import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";
import "./Component.css";
import Card101 from "./Card/Card101";
const Component = () => {
  return (
    <div className="component">
      <Header />
      <div className="component-page">
        <Sidebar />
        <Card101 />
      </div>
    </div>
  );
};
export default Component;
