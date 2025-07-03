import React from 'react'
import { useCartContext } from '../context/CartContext';
import {Heart} from 'lucide-react'

function ProductCard({product }) {
     const { addToCart } = useCartContext();


  return (
  <div className="bg-white rounded-3xl shadow-lg overflow-hidden max-w-sm mx-auto transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      {/* Header con imagen */}
      <div className="relative bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 p-8 h-64">
        {/* Botón de favoritos */}
        <button className="absolute top-4 right-4 w-10 h-10 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all">
        <Heart size={30}  className="text-red-500" />
        </button>
        
        {/* Imagen del producto */}
        <div className="flex items-center justify-center h-full">
          <img 
            src={product.images} 
            alt={product.name}
            className="w-full h-full object-contain transform -rotate-12 hover:rotate-0 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Contenido del card */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">
          {product.title}
        </h3>
        
        {/* Tallas y colores */}
        <div className="flex flex-wrap gap-2 mb-3">
          {product.sizes?.slice(0, 2).map((size) => (
            <span key={size} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
              {size}
            </span>
          ))}
          {product.colors?.map((color) => (
            <span key={color} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
              {color}
            </span>
          ))}
        </div>

        {/* Descripción */}
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {product.description}
        </p>

        {/* Precio y botón */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-gray-500 uppercase tracking-wide font-medium">Precio</span>
            <div className="text-2xl font-bold text-gray-800">
              {product.price}€
            </div>
          </div>
          
          <button 
            onClick={() => addToCart(product)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
           Añadir a la cesta
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard