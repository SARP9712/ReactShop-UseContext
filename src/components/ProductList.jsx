import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div className="flex flex-wrap mt-20">
      {products && products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
