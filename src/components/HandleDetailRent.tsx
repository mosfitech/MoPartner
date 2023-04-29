import React, { useEffect } from "react";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
export default function HandleDetailRent({ data, handleDelete }) {
  const mapBetween = (
    currentNum: any,
    minAllowed: any,
    maxAllowed: any,
    min: any,
    max: any
  ) => {
    return (
      ((maxAllowed - minAllowed) * (currentNum - min)) / (max - min) +
      minAllowed
    );
  };
  return (
    <div className="bg-primary-500 dark:bg-gray-800 shadow-lg rounded-md p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white flex items-center  justify-between p-4  rounded-lg shadow-indigo-50 shadow-md mx-2">
      <div className="w-44">
        <h2 className="text-gray-50 text-xl font-bold">{data.category}</h2>
        <h3 className="mt-2 text-xl font-bold text-yellow-500 text-left">
          Type : {data.type}
        </h3>
        <p className="text-sm font-semibold text-gray-400">
          Status :{" "}
          {data.rental_status === 0 ? "Ready to rent" : "Rental On Going"}
        </p>
        <p className="text-sm font-semibold text-gray-400">
          battray : {mapBetween(data.battray * 10, 0, 100, 33, 50).toFixed(2)} %
        </p>
        <div className="text-xs px-1 py-2 bg-yellow-400 text-white rounded-lg  tracking-wider hover:bg-yellow-300 outline-none">
          Last updated : {data.updated_at}
        </div>
        <div className="flex gap-2 justify-end mt-2 ">
          <button
            className="bg-fanta px-2 py-1 rounded-md"
            onClick={() => handleDelete(data._id)}
          >
            <svg
              width="12"
              height="22"
              viewBox="0 0 142 177"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.7836 167.916C11.7659 170.238 12.6701 172.473 14.2978 174.13C15.9255 175.787 18.1438 176.73 20.4662 176.754H120.937C123.259 176.73 125.477 175.787 127.105 174.13C128.733 172.473 129.637 170.238 129.619 167.916V50.0802H11.7836V167.916ZM23.5672 61.8638H117.836V164.97H23.5672V61.8638Z"
                fill="#ffffff"
              />
              <path
                d="M50.0802 73.6473H38.2966V147.295H50.0802V73.6473Z"
                fill="#ffffff"
              />
              <path
                d="M76.5932 73.6473H64.8096V147.295H76.5932V73.6473Z"
                fill="#ffffff"
              />
              <path
                d="M103.106 73.6473H91.3227V147.295H103.106V73.6473Z"
                fill="#ffffff"
              />
              <path
                d="M97.2145 26.513V8.83768C97.2145 3.88195 93.7206 0 89.2606 0H52.1423C47.6822 0 44.1884 3.88195 44.1884 8.83768V26.513H0V38.2966H141.403V26.513H97.2145ZM55.972 11.7836H85.4309V26.513H55.972V11.7836Z"
                fill="#ffffff"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
