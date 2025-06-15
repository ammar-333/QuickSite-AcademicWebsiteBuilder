import React, { useState } from "react";
import Payment from "../components/payment";
import { useNavigate, useLocation } from "react-router-dom";

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  const [googleScholar, setGoogleScholar] = useState(data.googleScholar);
  const [prefernces, setprefernces] = useState(data.prefernces);
  const [bio, setbio] = useState(data.bio);
  
  const handleBack = () => {
    navigate(-1); // Go to previous page
  };
  return (
    <div
      className="min-h-screen bg-gray-100 flex items-center justify-center p-4"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/cubes.png')",
        backgroundColor: "#f0f4ff",
      }}
    >
      {/* Return Button */}
      <button
        onClick={handleBack}
        className="absolute top-4 left-4 text-blue-700 hover:text-blue-900 hover:cursor-pointer font-semibold underline"
      >
        ← Back
      </button>
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-800">
          Unlock Your Academic Website
        </h1>

        <div className="mb-4">
          <p className="text-gray-600 text-center">
            Pay <span className="font-semibold text-black">$9.99</span> to
            generate and host your personal academic website.
          </p>
        </div>

        <div className="border-t border-gray-200 my-6" />
        <Payment info={googleScholar} info2={prefernces} info3={bio}/>
      </div>
    </div>
  );
};

export default PaymentPage;
