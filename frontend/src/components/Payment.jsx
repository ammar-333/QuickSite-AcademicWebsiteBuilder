import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// Renders errors or successfull transactions on the screen.
function Message({ content }) {
  return <p>{content}</p>;
}

function Payment(props) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  const googleScholar = props.info;
  const prefernces = props.info2;
  const bio = props.info3;

  const reqBody = {
    // Fill with actual required properties of GenerateRequest
    Bio: bio,
    Preferences: prefernces,
  };

  const handleGenerate = async () => {
    try {
      setLoading(true);

      const res1 = await fetch(
        `/api/Customer/scholar-json-url?scholarUrl=${encodeURIComponent(
          googleScholar
        )}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res1.ok) {
        throw new Error(`Server error: ${res1.status}`);
      }

      const data1 = await res1.json();
      console.log(data1);

      /////////////////////////////////////////////////////////////////*/////////////////////////////////////

      const res2 = await fetch("/api/Website/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(reqBody),
      });

      if (!res2.ok) {
        throw new Error("Failed to generate website");
      }

      const data2 = await res2.json();
      console.log(data2.message);
      console.log(data2.url);

      window.open(data2.url, "_blank");
      navigate("/dashboard");
    } catch (err) {
      setLoading(false);
      console.error(err);
      Swal.fire("Error", ` Please enter your Google Scholar URL.`, "error");
    }
  };

  const initialOptions = {
    "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID,
    "enable-funding": "venmo",
    "buyer-country": "US",
    currency: "USD",
    components: "buttons",
  };

  const [message, setMessage] = useState("");

  return (
    <div className="paypal-button-container">
      {loading ? (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-white to-blue-100 text-center px-4"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/cubes.png')",
            backgroundColor: "#f0f4ff",
          }}
        >
          <div className="bg-white px-6 py-4 rounded-2xl shadow-xl w-full max-w-md">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Building Your Website...
            </h2>
            <div className="bg-gray-100 rounded-xl p-4 text-left font-mono text-sm text-gray-700 h-32 overflow-hidden animate-pulse">
              <p>&gt; Connecting to AI engine...</p>
              <p>&gt; Generating layout structure...</p>
              <p>
                &gt; Writing content<span className="typing-dots ml-1"></span>
              </p>
            </div>
            <p className="text-sm text-gray-500 mt-4 italic">
              This may take a few seconds.
            </p>
          </div>
        </div>
      ) : (
        <div>
          <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons
              style={{
                shape: "rect",
                layout: "vertical",
                color: "gold",
                label: "paypal",
              }}
              createOrder={async () => {
                try {
                  const response = await fetch("/api/payment/make", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                      Status: "Success",
                      currency: "USD",
                      amount: 9.99,
                    }),
                  });
                  const orderData = await response.json();
                  console.log(orderData);
                  if (orderData.orderId) {
                    return orderData.orderId;
                  } else {
                    const errorDetail = orderData?.details?.[0];
                    const errorMessage = errorDetail
                      ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
                      : JSON.stringify(orderData);

                    throw new Error(errorMessage);
                  }
                } catch (error) {
                  console.error(error);
                  setMessage(`Could not initiate PayPal Checkout...${error}`);
                }
              }}
              onApprove={async (orderData) => {
                try {
                  const response = await fetch(
                    `/api/payment/capture/${orderData.orderID}`,
                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                      },
                    }
                  );

                  //! generate the website
                  handleGenerate();
                } catch (error) {
                  console.error(error);
                  setMessage(`Capture error: ${error.message}`);
                }
              }}
              onError={(err) => {
                console.error("PayPal error", err);
                setMessage("❌ PayPal Checkout failed.");
              }}
            />
          </PayPalScriptProvider>
          <Message content={message} />
        </div>
      )}
    </div>
  );
}

export default Payment;
