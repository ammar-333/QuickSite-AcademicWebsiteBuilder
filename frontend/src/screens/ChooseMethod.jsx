import React from "react";
import { useNavigate } from "react-router-dom";

const ChooseMethodPage = () => {
  const navigate = useNavigate();

  const handleChoice = (choice) => {
    if (choice === "ai") {
      navigate("/websitebuilder");
    } else {
      navigate("/showtemplate");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/cubes.png')",
        backgroundColor: "#f0f4ff",
      }}
    >
      <div className="max-w-3xl w-full text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-800">
          Start Building Your Academic Website
        </h1>
        <p className="text-gray-600 text-lg">Choose how you'd like to begin:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div
            onClick={() => handleChoice("ai")}
            className="cursor-pointer p-6 rounded-2xl bg-white shadow hover:shadow-xl transition duration-300 border hover:border-blue-500"
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">
              Use AI Assistant 🤖
            </h2>
            <p className="text-gray-600">
              Let AI help you build your website based on your answers and
              profile.
            </p>
          </div>

          <div
            onClick={() => handleChoice("template")}
            className="cursor-pointer p-6 rounded-2xl bg-white shadow hover:shadow-xl transition duration-300 border hover:border-green-500"
          >
            <h2 className="text-2xl font-semibold text-green-600 mb-2">
              Choose a Template 📁
            </h2>
            <p className="text-gray-600">
              Pick from a variety of ready-made templates to get started
              quickly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseMethodPage;
