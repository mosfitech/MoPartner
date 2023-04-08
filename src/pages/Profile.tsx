
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/authContext";
export default function Profile(props: any) {
  
const { photoURL } = useContext(AuthContext);
  return (
    <div className="h-full ml-14 mt-14 mb-4 md:ml-64 p-16">
      <div className="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
        <div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full flex justify-center">
              <div className="relative">
                <img
                  src={photoURL}
                  className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                />
              </div>
            </div>
          </div>
          <div className="text-center mt-24">
            <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
              {props.username}
            </h3>
            <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
              Paris, France
            </div>
            <div className="text-xs mt-0 mb-2 text-gray-700 font-semibold">
              <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
              {props.email}
            </div>
          </div>
          <div className="bg-gray-500 rounded-t-lg mt-6 py-6 border-t border-slate-200 text-left px-6">
            <div className="flex flex-wrap justify-start">
              <p className="font-bold leading-relaxed text-slate-600 mb-4">
                Business Name : UIN SHARING BIKE
              </p>
            </div>
            <div className="flex flex-wrap justify-start">
              <p className="font-bold leading-relaxed text-slate-600 mb-4">
                Time Operational : 09:00 - 17:00 WIB
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
