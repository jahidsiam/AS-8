import { Outlet } from "react-router-dom";
import Navber from "./navber/Navber";
import ReadContext from "../context/readcontext";
import { useState } from "react";

const Root = () => {
    const [read, setRead]= useState([])
  return (
    <div>
      <ReadContext.Provider value={{read,setRead}}>
        <Navber />
        <Outlet />
      </ReadContext.Provider>
    </div>
  );
};

export default Root;
