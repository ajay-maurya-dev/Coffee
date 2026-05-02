import React, { useState } from "react";

const Navbar = ({ totalItems }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-slate-800 text-white sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 h-16">

        
        <h1 className="text-xl font-bold">FoodApp 🍔</h1>

        
        <ul className="hidden md:flex gap-6">
          <li className="hover:text-orange-400 cursor-pointer">Home</li>
          <li className="hover:text-orange-400 cursor-pointer">About</li>
          <li className="hover:text-orange-400 cursor-pointer">Services</li>
          <li className="hover:text-orange-400 cursor-pointer">Contact</li>
        </ul>

        
        <div className="hidden md:block">
          🛒 Cart ({totalItems})
        </div>

        
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl ">
          ☰
        </button>
      </div>

      
      {open && (
        <div className="md:hidden bg-slate-700 flex flex-col items-center py-4 gap-3">
          <p>Home</p>
          <p>About</p>
          <p>Services</p>
          <p>Contact</p>
          <p>🛒 Cart ({totalItems})</p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;