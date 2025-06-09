import React, { useEffect, useState } from "react";
import {
  Plus,
  Grid,
  ListFilter,
  LogIn,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";


const Dashboardbody = (props) => {
  const isWebsiteCreated = props.info.isWebsiteCreated;
  const websiteName = props.info2.name;
  const websiteUrl = props.info2.hostUrl;
  const sites = { name: websiteName, status: "Not published" };
  const navigate = useNavigate();

  return (
    <main className="flex-1 p-6 bg-gray-200  flex justify-center">
        <div className="bg-gray-50 p-8 w-[86%] mt-5 mb-56 rounded-2xl">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-semibold">Sites</h1>
              <p className="text-gray-500 text-sm mt-1">
                View and manage all your websites in one place.
              </p>
            </div>
            <div className="flex space-x-3">
              <button onClick={() => {navigate('/choosemethod')}} className="flex items-center bg-blue-600 text-white px-5 py-2 rounded-full shadow hover:bg-blue-700 text-sm">
                <Plus className="w-4 h-4 mr-2" />
                Create New Site
              </button>
            </div>
          </div>
          <hr />
          <div className="flex justify-between items-center mb-4 mt-5">
            <div className="flex items-center space-x-2">
              <button className="flex items-center text-sm px-3 py-1.5 bg-white rounded-full border border-gray-200 hover:bg-gray-50">
                <ListFilter className="w-4 h-4 mr-1" />
                Filter
              </button>
              <input
                type="text"
                placeholder="Search..."
                className="px-3 py-1.5 border border-gray-200 rounded-full text-sm bg-white"
              />
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 rounded border border-blue-600 bg-white">
                <Grid className="w-4 h-4 text-blue-600" />
              </button>
            </div>
          </div>

            {isWebsiteCreated ? 
          <div className="grid grid-cols-2 gap-6">
              <div  onClick={() => window.open(websiteUrl, '_blank')} className="bg-white rounded-xl shadow p-4 max-w-80 border-1 border-white hover:border-blue-800 hover:cursor-pointer">
                <div className="h-32 bg-blue-100 rounded mb-4 flex items-center justify-center text-blue-400 bg-[url(./assets/no-image.jpg)] bg-contain bg-center bg-no-repeat"></div>
                <h3 className="text-sm font-medium">{sites.name}</h3>
                <p className="text-xs text-gray-500">{sites.status}</p>
              </div>
          </div>
              :
              <div className="text-center text-3xl mt-18">
                <h1>no sites</h1>
              </div>
            }
        </div>
    </main>
  );
};

export default Dashboardbody;
