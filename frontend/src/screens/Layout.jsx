import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useLocation } from "react-router-dom";


const Layout = () => {
  const location = useLocation();

  const hideNavbarPaths = ["/login", "/websitebuilder", "/editwebsite", "/showtemplate", "/paymentpage"];

  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <div>
      <header>
        {!shouldHideNavbar && <Navbar />}
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        {!shouldHideNavbar && <Footer />}
      </footer>
    </div>
  )
}

export default Layout
