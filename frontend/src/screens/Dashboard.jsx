import React, { useEffect, useState } from "react";
import {
  BookOpen,
  Settings,
  LayoutDashboard,
  BarChart2,
  Plus,
  FolderPlus,
  Grid,
  ListFilter,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Dashboardbody from "../components/Dashboardbody";
import Account from "../components/Account";

const Dashboard = () => {
  const sites = { name: "ammar", status: "Not published" };
  const [body, setBody] = useState("dashboard");
  const navigate = useNavigate();
  const [data, setData] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("/api/Customer/profile", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setData(data);
      });
  }, []);

  return (
    <div className="min-h-screen flex bg-gray-100 mt-18">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 shadow-md p-5 *:">
        <h1 className="text-2xl font-bold mb-6 text-blue-700">ProfSite</h1>
        <nav className="space-y-4">
          <button
            onClick={() => {
              setBody(true);
            }}
            className="flex items-center text-white hover:text-blue-600"
          >
            <LayoutDashboard className="mr-2 h-5 w-5" />
            Dashboard
          </button>
          <button
            onClick={() => {
              setBody(false);
            }}
            className="flex items-center text-white hover:text-blue-600"
          >
            <BookOpen className="mr-2 h-5 w-5" />
            My Profile
          </button>
          <button
            onClick={() => {
              setBody(false);
            }}
            className="flex items-center text-white hover:text-blue-600"
          >
            <Settings className="mr-2 h-5 w-5" />
            Settings
          </button>
        </nav>
      </aside>

      {body ? <Dashboardbody info={data} /> : <Account info={data}/>}
    </div>
  );
};

export default Dashboard;
