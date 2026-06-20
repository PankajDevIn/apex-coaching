import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Helper function to dynamically highlight active page routes
  const isActive = (path) => location.pathname === path

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo Group */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-xl tracking-tighter shadow-md shadow-blue-200 group-hover:scale-105 transition-transform">
            A
          </div>
          <span className="text-xl font-black tracking-tight text-slate-900">
            Apex<span className="text-blue-600 group-hover:text-indigo-600 transition-colors">Coaching</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2 font-semibold text-sm">
          {[
            { name: 'Home', path: '/' },
            { name: 'Courses', path: '/courses' },
            { name: 'About Us', path: '/about-us' },
            { name: 'Contact Us', path: '/contact-us' }
          ].map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`px-4 py-2 rounded-xl transition-all duration-200 ${
                isActive(link.path)
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Call-To-Action Button */}
        <div className="hidden md:block">
          <Link
            to="/contact-us"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-all shadow-md shadow-blue-100 hover:shadow-lg hover:shadow-blue-200 block"
          >
            Enroll Now
          </Link>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Dropdown Mobile Drawer Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white/95 backdrop-blur-lg px-4 pt-2 pb-6 space-y-2 animate-fade-in">
          {[
            { name: 'Home', path: '/' },
            { name: 'Courses', path: '/courses' },
            { name: 'About Us', path: '/about-us' },
            { name: 'Contact Us', path: '/contact-us' }
          ].map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-xl font-bold text-sm transition-colors ${
                isActive(link.path)
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4">
            <Link
              to="/contact-us"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-blue-600 text-white font-bold py-3 rounded-xl shadow-md"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar