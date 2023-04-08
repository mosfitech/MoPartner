import React, { Component, useState } from "react";
import Maps from "../components/Maps";

export default function Rentals() {
  const [addDevice, setAddDevice] = useState(false);
  return (
    <>
      <div className="flex justify-center ml-14 mt-16  md:ml-64">
        <h1 className="text-2xl font-semibold">
          Customize your rental business
        </h1>
      </div>
      <div className="flex justify-center ml-14 mt-3 mb-4 md:ml-64">
        <div className="w-10/12 h-96">
          <Maps />
        </div>
      </div>
      <div className="flex justify-start px-5 gap-3 ml-14 mt-16 mb-4 md:ml-64">
        <button
          className={
            addDevice
              ? "px-4 py-2 bg-primary text-white  rounded-full font-semibold"
              : "px-4 py-2 bg-gray-500 text-gray-900  rounded-full"
          }
          onClick={() => setAddDevice(true)}
        >
          Add New Device
        </button>
        <button
          className={
            addDevice
              ? "px-4 py-2 bg-gray-500 text-gray-900  rounded-full"
              : "px-4 py-2 bg-primary text-white  rounded-full font-semibold"
          }
          onClick={() => setAddDevice(false)}
        >
          Add Rental location
        </button>
      </div>
      {addDevice ? (
        <div className="bg-gray-500 h-full ml-14 p-8 mb-4 md:ml-64">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2">
              UUID Hardware
            </label>
            <input
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
                type="number"
                className="appearance-none block w-4/3 bg-gray-200 text-gray-900 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
              />
              <button
                className="px-4 py-2 bg-primary text-white  rounded-full"
                onClick={() => setAddDevice(true)}
              >
                Add New Device
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-gray-500 h-full ml-14 p-8 md:ml-64">
          <p
            className="text-gray-900 font-semibold
             mb-3"
          >
            Set Location Rental
          </p>
          <div className="flex gap-2">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2">
                Latitude
              </label>
              <input
                type="text"
                className="appearance-none block w-full bg-gray-200 text-gray-900 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2">
                Longitude
              </label>
              <input
                type="text"
                className="appearance-none block w-full bg-gray-200 text-gray-900 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
              />
            </div>
          </div>
          <div className="w-full md:w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2">
              Radius Rental Save {"(meter)"}
            </label>
            <div className="flex justify-between">
              <input
                type="number"
                className="appearance-none block w-4/3 bg-gray-200 text-gray-900 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
              />
              <button
                className="px-4 py-2 bg-primary text-white  rounded-full"
                onClick={() => setAddDevice(true)}
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
