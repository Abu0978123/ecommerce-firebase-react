import React from 'react'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'

const Layout = ({children}) => {
  return (
    <div>
        <Nav/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout