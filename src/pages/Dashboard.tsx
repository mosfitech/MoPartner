import React, { useContext, useEffect, useState } from "react";
import { LeftArrow, RightArrow } from "../components/Arrow";
import CardInfo from "../components/CardInfo";
import Maps from "../components/Maps";
import DetailRent from "../components/DetailRent";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import "react-horizontal-scrolling-menu/dist/styles.css";
import axios from "axios";

export default function Dashboard(props: any) {
  const [dataKits, setDataKits] = useState<any | null>([]);
  const getDataKits = async () => {
    await axios
      .get(`https://api.berusaha.live/kits/${props.data.email}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        setDataKits(response.data);
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
      <div className="h-full ml-14 mt-14 mb-4 md:ml-64">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
          <CardInfo icon={"vehicle"} name={"Total Vehicle"} data={1} />
          <CardInfo icon={"vehicle"} name={"Total Ready to Rental"} data={0} />
          <CardInfo icon={"vehicle"} name={"Total On going Rental"} data={1} />
          <CardInfo icon={"vehicle"} name={"Status Rental"} data={"active"} />
        </div>
      </div>
      <div className="flex justify-center ml-14 mt-1 mb-4 md:ml-64">
        <div className="w-10/12 h-96">
          <Maps data={props.data} kits={dataKits} />
        </div>
      </div>
      <div className="h-full ml-14 mt-14 mb-4 md:ml-64">
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
