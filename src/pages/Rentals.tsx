import React, { Component, useState } from "react";
import Maps from "../components/Maps";
import axios from "axios";

export default function Rentals(props: any) {
  const [addDevice, setAddDevice] = useState(true);
  const [UUID, setUUID] = useState<any>();
  const [category, setCategory] = useState<any>();
  const [type, setType] = useState<any>();
  const [price, setPrice] = useState<any>();
  const [alert, setAlert] = useState(false);
  const handleSubmit = () => {
    axios
      .post(
        `https://api.berusaha.live/kits/`,
        {
          _id: UUID,
          owner_email: props.data.email,
          category: category,
          type: type,
          rental_status: 0,
          warning_status: 0,
          battray: 0,
          rental_time: 0,
          price: price,
          latitude_kit: 0,
          longitude_kit: 0,
          latest_rent_username: "none",
          latest_rent_email: "none",
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        // handle success
        console.log(response.data);
        setAlert(true);
        setAddDevice(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  return (
    <>
      <div className="flex justify-center ml-14 mt-16  md:ml-64">
        <h1 className="text-2xl font-semibold">
          Customize your rental business
        </h1>
      </div>
      {/* <div className="flex justify-center ml-14 mt-3 mb-4 md:ml-64">
        <div className="w-10/12 h-96">
          <Maps data={props.data} />
        </div>
      </div> */}
      <div className="flex justify-start px-5 gap-3 ml-14 mt-16 mb-4 md:ml-64">
        <button
          className={
            addDevice
              ? "px-4 py-2 bg-gray-900 hover:bg-purple text-white  rounded-lg font-semibold"
              : "px-4 py-2 bg-gray-500 text-gray-900  rounded-lg"
          }
          onClick={() => setAddDevice(true)}
        >
          Add New Device
        </button>
        <button
          className={
            addDevice
              ? "px-4 py-2 bg-gray-500 text-gray-900  rounded-lg"
              : "px-4 py-2  bg-gray-900 hover:bg-purple  text-white  rounded-lg font-semibold"
          }
          // onClick={() => setAddDevice(false)}
        >
          Coming Soon
        </button>
      </div>
      {alert && (
        <div className="opacity-75 px-10 items-center bg-primary-50 flex justify-between ml-14 mt-3  md:ml-64">
          <div className="px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Success ! </strong>
            <span className="block sm:inline">add new device</span>
          </div>
          <span onClick={() => setAlert(false)}>
            <svg
              className="fill-current h-6 w-6 text-gray-950"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      )}
      {addDevice && (
        <div className="bg-gray-500 h-full ml-14 p-8 mb-4 md:ml-64">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2">
              UUID Hardware
            </label>
            <input
              onChange={(e) => setUUID(e.target.value)}
              type="text"
              className="appearance-none block w-full bg-gray-200 text-gray-900 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
            />
          </div>
          <div className="flex flex-wrap mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2">
                CATEGORY
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-900 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option>Road Bike</option>
                  <option>Moutain Bike</option>
                  <option>Comuter Bike</option>
                  <option>Scooter</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-900">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2">
                Type
              </label>
              <input
                onChange={(e) => setType(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="KEV 122"
              />
            </div>
          </div>
          <div className="w-full md:w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2">
              Rental Price / Hour
            </label>
            <div className="flex justify-between">
              <input
                onChange={(e) => setPrice(e.target.value)}
                type="number"
                className="appearance-none block w-4/3 bg-gray-200 text-gray-900 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
              />
              <button
                className="px-4 py-2 bg-gray-900 hover:bg-purple rounded-lg text-white font-semibold text-gray-50"
                onClick={handleSubmit}
              >
                Add New Device
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
