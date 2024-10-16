import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }: any) => {
  return (
    <div className="flex overflow-hidden">
      <div className="w-64 bg-white shadow-md h-screen ">
        <Sidebar />
      </div>
      <div className="flex-1  overflow-hidden h-screen ">
        <div className=" bg-gray-400 h-14 fixed top-0 w-full">
          <Header />
        </div>
        <div className="">
        {children}  
        </div>
      </div>
    </div>
  );
};

export default Layout;
