import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Header/Navbar'

function Layout() {
    return (
        <div className="flex-1 flex flex-col">
            <div className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40  backdrop-blur-lg bg-base-100/80 ">
                <Navbar />
            </div>
            <div className='flex-1 pt-16 flex flex-col'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout