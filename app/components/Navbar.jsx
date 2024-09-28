"use client"

import { useState } from 'react'
import Link from "next/link"
import { Menu, X } from 'lucide-react'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
  
    return (
      <nav className="bg-gradient-to-r from-black via-slate-800 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-white font-bold text-xl">
                Project Honeycomb
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/tools">Tools</NavLink>
                <NavLink href="/contribute">Contribute</NavLink>
                <NavLink href="/developers">Developers</NavLink>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
  
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink href="/">Home</NavLink>
                <NavLink href="/tools">Tools</NavLink>
                <NavLink href="/contribute">Contribute</NavLink>
                <NavLink href="/developers">Developers</NavLink>
            </div>
          </div>
        )}
      </nav>
    )
  }
  
  const NavLink = ({ href, children, mobile = false }) => (
    <Link
      href={href}
      className={`${
        mobile
          ? 'block px-3 py-2 rounded-md text-base font-medium'
          : 'px-3 py-2 rounded-md text-sm font-medium'
      } text-gray-300 hover:bg-gray-700 hover:text-white`}
    >
      {children}
    </Link>
  )

  export default NavBar;