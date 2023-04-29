import React, { useContext, useEffect, useState } from "react";
import { LeftArrow, RightArrow } from "../components/Arrow";
import CardInfo from "../components/CardInfo";
import Maps from "../components/Maps";
import DetailRent from "../components/DetailRent";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import "react-horizontal-scrolling-menu/dist/styles.css";
import axios from "axios";
import { AuthContext } from "../context/authContext";

export default function Dashboard(props: any) {
  const [dataKits, setDataKits] = useState<any | null>([]);
  const [vehicleOn, setVehicleOn] = useState(0);
  const [vehicleOff, setVehicleOff] = useState(0);
  const { status, userId, handleLogOut, displayName, email, photoURL } =
    useContext(AuthContext);
  const getDataKits = async () => {
    await axios
      .get(`https://api.berusaha.live/kits/${email}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        setDataKits(response.data);
        // console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  useEffect(() => {
    getDataKits();
  }, [props]);

  return (
    <div>
      <div className="flex justify-center ml-14 mt-20 mb-4 md:ml-64">
        <div className="w-10/12 h-96">
          <Maps data={props.data} kits={dataKits} />
        </div>
      </div>
      <div className="h-full ml-14 md:ml-64">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 p-4 gap-4">
          <CardInfo
            icon={"vehicle"}
            name={"Total Vehicle"}
            data={dataKits.length}
          />
        </div>
      </div>
      <div className="h-full ml-14 mt-2 mb-4 md:ml-64">
        {dataKits && (
          <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {dataKits.map((data: any) => (
              <DetailRent data={data} />
            ))}
          </ScrollMenu>
        )}
      </div>
    </div>
  );
}
