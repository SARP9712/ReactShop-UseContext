import { useCartContext } from "../context/CartContext";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
    clearCart,
  } = useCartContext();

  if (cart.length === 0) {
    return (
      <div className="absolute top-20 right-6 bg-white shadow-lg p-6 rounded-lg w-80 z-50">
        <p className="text-gray-500">Tu carrito está vacío.</p>
      </div>
    );
  }

  return (
    <div className="absolute top-20 right-6 bg-white shadow-xl p-6 rounded-xl w-80 z-50">
      <h2 className="text-lg font-semibold mb-4 text-purple-600">Carrito</h2>
      <div className="space-y-4 max-h-[300px] overflow-y-auto">
        {cart.map((item) => (
          <div key={item.id} className="border-b pb-3 flex gap-3 items-start">
            
            {/* Imagen pequeña */}
            <img
              src={item.images?.[0] || "https://placehold.co/60x60"}
              alt={item.name}
              className="w-14 h-14 object-cover rounded-md"
            />

            <div className="flex-1">
              <h4 className="font-semibold text-sm text-black ">{item.title}</h4>
              <p className="text-xs text-gray-600">Precio: {item.price}€</p>
              <div className="flex items-center gap-2 my-2">
                <button
                  onClick={() => decreaseQuantity(item)}
                  className="bg-gray-200 px-2 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span className="text-sm font-medium">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item)}
                  className="bg-gray-200 px-2 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item)}
                className="text-red-500 text-xs hover:underline"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <h3 className="text-md font-bold text-black">Total: {totalPrice.toFixed(2)}€</h3>
        <button
          onClick={clearCart}
          className="mt-2 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
        >
          Vaciar Carrito
        </button>
      </div>
    </div>
  );
};

export default Cart;
