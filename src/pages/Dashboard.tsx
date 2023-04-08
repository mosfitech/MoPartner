import React, { useContext } from "react";
import { LeftArrow, RightArrow } from "../components/Arrow";
import CardInfo from "../components/CardInfo";
import Maps from "../components/Maps";
import DetailRent from "../components/DetailRent";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import "react-horizontal-scrolling-menu/dist/styles.css";

export default function Dashboard() {
  return (
    <div>
      <div className="h-full ml-14 mt-14 mb-4 md:ml-64">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
          <CardInfo />
          <CardInfo />
          <CardInfo />
          <CardInfo />
        </div>
      </div>
      <div className="flex justify-center ml-14 mt-1 mb-4 md:ml-64">
        <div className="w-10/12 h-96">
          <Maps />
        </div>
      </div>
      <div className="h-full ml-14 mt-14 mb-4 md:ml-64">
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4"> */}
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        <DetailRent />
        <DetailRent />
        <DetailRent />
        <DetailRent />
        <DetailRent />
        <DetailRent />
        <DetailRent />
        <DetailRent />
      </ScrollMenu>
      </div>
      {/* </div> */}
    </div>
  );
}
