import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Website from "../components/website";

const EditWebsite = () => {
  const [Edit, setEdit] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { websiteId, style } = location.state || {};

  const handleRegenerate = () => {
    if(style == "template"){
      navigate("/showtemplate")
    }
    else {
      navigate("/websitebuilder")
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-1/4 h-screen bg-gradient-to-b from-blue-950 to-gray-900 p-6 border-r border-gray-600 shadow-xl overflow-y-auto">
        <h2 className="text-3xl font-bold text-white mb-8">🛠️ Editor</h2>

        {Edit ? (
          <div className="space-y-6">
            <p className="text-white text-lg">You're currently editing.</p>
            <button
              onClick={() => setEdit(false)}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl shadow transition-all duration-300"
            >
              ✅ Finish Editing
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl shadow transition-all duration-300">
              ✅ Apply Changes
            </button>

            <button
              onClick={() => setEdit(true)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow transition-all duration-300"
            >
              ✏️ Edit Website
            </button>

            <button
              onClick={handleRegenerate}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl shadow transition-all duration-300"
            >
              🔄 Regenerate Website
            </button>
          </div>
        )}
      </aside>

      {/* Preview Section */}
      <main className="flex-1 p-8 overflow-y-auto bg-gray-300 h-screen">
        <Website styleKind={style} websiteNum={websiteId} />
      </main>
    </div>
  );
};

export default EditWebsite;
