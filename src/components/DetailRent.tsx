import React from "react";
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
export default function DetailRent() {
  return (
    <div className="bg-primary-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white flex items-center  justify-between p-4  rounded-lg shadow-indigo-50 shadow-md mx-2">
      <div className="w-44">
        <h2 className="text-gray-50 text-lg font-bold">Road Bike</h2>
        <h3 className="mt-2 text-xl font-bold text-yellow-500 text-left">
         Type : Pinnarelo f12
        </h3>
        <p className="text-sm font-semibold text-gray-400">Status : Ready to rent</p>
        <div className="text-xs mt-6 px-1 py-2 bg-yellow-400 text-white rounded-lg  tracking-wider hover:bg-yellow-300 outline-none">
        Last updated : 12-02-2023
        </div>
      </div>
      <div className="bg-gradient-to-tr from-gray-100 to-gray-50 w-32 h-32  rounded-full shadow-2xl shadow-yellow-400 text-gray-900 flex justify-center items-center ">
        <div>
          <DirectionsBikeIcon />
        </div>
      </div>
    </div>
  );
}
