import React from "react";
import { useProducts } from "../Hook/useProducts";
import ProductList from "./ProductList";

const ProductsPage = () => {
   const { productos, cargando, error } = useProducts();


if (cargando)
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-purple-600"></div>
    </div>
  );
  if (error) return <p>Error loading products: {error.message}</p>;
  

   return (
    <div>
      <ProductList products={productos} />
    </div>
  );


}

export default ProductsPage;