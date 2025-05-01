import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './screens/Layout'
import Home from './screens/Home'
import Account from './screens/Account'
import Dashboard from './screens/Dashboard'
import Gallery from './screens/Gallery'
import Login from './screens/Login'
import Signup from './screens/Signup'
import NoPage from './screens/NoPage'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="account" element={<Account />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
