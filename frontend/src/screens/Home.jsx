import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>hi from home</h1>
      <Link to="/">home</Link><br />
      <Link to="/account">account</Link><br />
      <Link to="/dashboard">dashboard</Link><br />
      <Link to="/gallery">gallery</Link><br />
      <Link to="/login">login</Link><br />
      <Link to="/signup">signup</Link><br />
    </div>
  )
}

export default Home
