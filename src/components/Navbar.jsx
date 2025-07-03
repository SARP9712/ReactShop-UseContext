import React, { useState, useRef, useEffect } from 'react';
import Shop from '../assets/shop.png';
import { Heart, ShoppingCart, LogIn, Search, LayoutGrid } from 'lucide-react';
import Cart from './Cart';

function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      // Si el clic NO está ni en el carrito ni en el botón, cerrar carrito
      if (
        cartRef.current &&
        !cartRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsCartOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-purple-500 text-white shadow-md relative z-50">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo + Categorías */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-4xl font-bold tracking-wide">SARP@</span>
            <img className="w-12 h-12 object-contain" src={Shop} alt="Logo" />
          </div>
          <a href="#" className="hidden md:inline-flex items-center gap-1 text-sm font-medium hover:text-gray-200 transition border rounded-full p-4">
            <LayoutGrid size={30} />
          </a>
        </div>

        {/* Buscador */}
        <div className="hidden md:flex items-center gap-1 text-sm font-medium">
          <Search size={30} />
          <input type="search" className="p-2 w-80 rounded-2xl text-black" />
        </div>

        {/* Right Actions */}
        <div className="flex gap-6 text-sm font-medium items-center">
          <a href="#" className="flex items-center gap-1 hover:text-gray-200 transition border rounded-full p-4">
            <LogIn size={18} /> Login
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-gray-200 transition border rounded-full p-4">
            <Heart size={18} /> Favoritos
          </a>
          <button
            ref={buttonRef}
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="flex items-center gap-1 hover:text-gray-200 transition border rounded-full p-4"
          >
            <ShoppingCart size={18} /> Cesta
          </button>
        </div>
      </nav>

      {/* Carrito */}
      {isCartOpen && (
        <div ref={cartRef}>
          <Cart />
        </div>
      )}
    </header>
  );
}

export default Navbar;
