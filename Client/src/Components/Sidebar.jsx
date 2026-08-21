import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

const Sidebar = ({ children }) => {
  return(
    <div className="flex min-h-screen bg-gray-100">
      <aside className="fixed inset-y-0 left-0 z-20 flex w-64 flex-col border-r border-gray-200 bg-white p-5 transition-transform duration-300 md:static md:translate-x-0 -translate-x-full" id="sidebar">
        <div className="mb-8 flex items-center gap-2 px-2">
          <span className="h-6 w-6 rounded-md bg-blue-600"></span>
          <span className="font-bold text-xl text-gray-800">My App</span>
        </div>

        <nav className="flex flex-1 flex-col gap-1">
          <Link to="/Dashboard" className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2.5 text-sm font-medium text-gray-900">
            <span></span> Dashboard
          </Link>
          <Link to="/Users" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
            <span></span> Users
          </Link>
          <Link to="/Analytics" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
            <span></span> Analytics
          </Link>
          <Link to="/Settings" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
            <span></span> Settings
          </Link>
        </nav>

        <div className="mt-auto flex items-center gap-3 border-t border-gray-200 pt-4 px-2">
          <div className="h-9 w-9 rounded-full bg-gray-300"></div>
          <div>
            <p className="text-sm font-semibold text-gray-700">Alex Jones</p>
            <p className="text-xs text-gray-500">alex@mail.com</p>
          </div>
        </div>
      </aside>

      <div className="flex flex-1 flex-col">
        <header className="flex h-16 items-center border-b border-gray-200 bg-white px-4 md:hidden">
          <button onClick={() => document.getElementById('sidebar').classList.toggle('-translate-x-full')} className="rounded-md p-2 hover:bg-gray-100">
            ☰
          </button>
        </header>
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Sidebar;