import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (

    // To keep the Footer always at the bottom of the window even if the contents of the page is less.

    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>

    // <>
    // <Header />
    // <Outlet />
    // <Footer />
    // </>
  )
}

export default Layout