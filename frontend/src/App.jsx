import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./screens/Layout";
import Home from "./screens/Home";
import Account from "./components/Account";
import Dashboard from "./screens/Dashboard";
import Gallery from "./screens/Gallery";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import NoPage from "./screens/NoPage";
import "./App.css";
import About from "./screens/About";
import WebsiteBuilder from "./screens/WebsiteBuilder";
import ChooseMethod from "./screens/ChooseMethod";
import EditWebsite from "./screens/EditWebsite";
import ShowTemplate from "./screens/ShowTemplate";
import PaymentPage from "./screens/PaymentPage";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function App() {
  return (
    <PayPalScriptProvider
      options={{ "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID }}
    >
      <BrowserRouter>
        <main className="relative min-h-screen overflow-x-hidden">
          <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
          <div className="overflow-hidden">
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route path="about" element={<About />} />
                <Route path="choosemethod" element={<ChooseMethod />} />
                <Route path="websitebuilder" element={<WebsiteBuilder />} />
                <Route path="editwebsite" element={<EditWebsite />} />
                <Route path="showtemplate" element={<ShowTemplate />} />
                <Route path="paymentpage" element={<PaymentPage />} />
                <Route path="*" element={<NoPage />} />
              </Route>
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </PayPalScriptProvider>
  );
}

export default App;
