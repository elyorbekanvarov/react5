import React from 'react'
import { Fragment } from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
function PublicLayout() {
  return (
    <Fragment>
        <header>
            <Navbar></Navbar>
        </header>
        <main>
            <Outlet></Outlet>
        </main>
    </Fragment>
  )
}

export default PublicLayout