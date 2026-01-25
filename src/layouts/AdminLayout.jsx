import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBarAdmin from '../Components/SideBarAdmin'
function AdminLayout() {
  return (
    <div className='flex'>
      <div>
        <SideBarAdmin></SideBarAdmin>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default AdminLayout