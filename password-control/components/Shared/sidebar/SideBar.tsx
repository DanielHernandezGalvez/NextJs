import React from 'react'
import Logo from '../Logo/Logo'
import SidebarRoutes from '../SidebarRoutes/SidebarRoutes'

const SideBar = () => {
  return (
    <>
        <div className="py-6">
            <Logo />
        </div>
        <SidebarRoutes />
    </>
  )
}

export default SideBar