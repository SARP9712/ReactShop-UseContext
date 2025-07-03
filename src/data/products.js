const API_URL="https://api.escuelajs.co/api/v1/products"

export const obtenerProductos = async () => {
    const res = await fetch(API_URL);
    if(!res.ok) throw new Error ("Fallo la peticion de productos");
    const data = await res.json();
    return data
}