import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/authContext";

import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
export default function Profile(props: any) {
  const { status, userId, handleLogOut, displayName, email, photoURL } =
    useContext(AuthContext);
  const [edit, setEdit] = useState(false);
  const [alert, setAlert] = useState(false);
  const [businessName, setBusinessName] = useState<any>(
    props.data.business_name
  );
  const [latitude, setLatitude] = useState<any>(props.data.latitude_shelter);
  const [longitude, setLongitude] = useState<any>(props.data.longitude_shelter);
  const [radiusRental, setRadiusRental] = useState<any>(
    props.data.radius_rental
  );

  const handleSubmit = async () => {
    if (!businessName) {
      await axios
        .post(
          `https://api.berusaha.live/mopartner/`,
          {
            _id: userId,
            business_name: businessName,
            email: email,
            owner_username: displayName,
            latitude_shelter: latitude,
            longitude_shelter: longitude,
            radius_rental: radiusRental,
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
          // console.log(response.data);
          setEdit(false);
          setAlert(true);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    } else {
      await axios
        .put(
          `https://api.berusaha.live/mopartner/${userId}`,
          {
            business_name: businessName,
            email: email,
            owner_username: displayName,
            latitude_shelter: latitude,
            longitude_shelter: longitude,
            radius_rental: radiusRental,
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
          // console.log(response.data);
          setEdit(false);
          setAlert(true);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  };
  return (
    <div className="h-full ml-14 mt-14 mb-4 md:ml-64 p-16">
      <div className="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-gradient-to-r from-pink to-yellow hover:from-fanta hover:to-yellow w-full mb-6 shadow-lg rounded-xl mt-16">
        <div>
          <div className="text-center mt-24 pt-2">
            <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
              {displayName}
            </h3>
            <div className="text-xs mt-0 mb-2 text-gray-700 font-semibold">
              <i className="fas fa-map-marker-alt mr-2 text-gray-950">
                {email}
              </i>
            </div>
          </div>
          <div className="bg-gray-500 rounded-t-lg mt-6 py-6 border-t border-slate-200 text-left px-6">
            <div className="flex flex-wrap justify-start">
              <p className="font-bold leading-relaxed text-slate-600 mb-4">
                Business Name : {businessName}
              </p>
            </div>
            <div className="flex flex-wrap justify-start">
              <p className="font-bold leading-relaxed text-slate-600 mb-4">
                Radius Rental : {radiusRental} Meter
              </p>
            </div>
            <div className="flex flex-wrap justify-between">
              <p className="font-bold leading-relaxed text-slate-600 mb-4">
                rental Location : {latitude},{longitude}
              </p>
              <div
                className="bg-gray-900 text-gray-50 p-3 rounded-lg hover:bg-purple"
                onClick={() => setEdit(!edit)}
              >
                <EditIcon />
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      {alert && (
        <div className="opacity-75 px-10 items-center bg-primary-50 flex justify-between mt-3 reboo">
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
      {edit && (
        <div className="bg-gray-500 h-full p-8">
          <p
            className="text-gray-900 font-semibold
             mb-3 mt-4"
          >
            Business Profile
          </p>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2">
              Business Name
            </label>
            <input
              type="text"
              className="appearance-none block w-full bg-gray-200 text-gray-900 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              onChange={(e) => setBusinessName(e.target.value)}
              value={businessName}
            />
          </div>
          <p
            className="text-gray-900 font-semibold
             mb-3 mt-4"
          >
            Set Location Rental
          </p>
          <div className="flex gap-2">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2">
                Latitude
              </label>
              <input
                onChange={(e) => setLatitude(e.target.value)}
                type="text"
                className="appearance-none block w-full bg-gray-200 text-gray-900 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                value={latitude}
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2">
                Longitude
              </label>
              <input
                onChange={(e) => setLongitude(e.target.value)}
                type="text"
                className="appearance-none block w-full bg-gray-200 text-gray-900 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                value={longitude}
              />
            </div>
          </div>
          <div className="w-full md:w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2">
              Radius Rental Save {"(meter)"}
            </label>
            <div className="flex justify-between">
              <input
                onChange={(e) => setRadiusRental(e.target.value)}
                type="number"
                className="appearance-none block w-4/3 bg-gray-200 text-gray-900 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                value={radiusRental}
              />
            </div>
          </div>
          <div className="w-full md:w-full mt-4 px-3 mb-6 md:mb-0">
            <div className="flex justify-between">
              <button
                className="px-4 py-2 bg-gray-900 text-white  rounded-lg hover:bg-purple"
                onClick={handleSubmit}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
