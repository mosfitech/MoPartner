import React from "react";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
export default function CardInfo(props: any) {
  // console.log(props)
  return (
    <div className="bg-primary-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between py-3 px-20 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
      <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
        <PedalBikeIcon className="stroke-current text-gray-900 dark:text-gray-800 transform transition-transform duration-500 ease-in-out" />
      </div>
      <div className="text-center">
        <p className="text-2xl">{props.data}</p>
        <p>{props.name}</p>
      </div>
    </div>
  );
}
