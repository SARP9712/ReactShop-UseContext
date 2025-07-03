# React Shop con useContext

## Descripción

Este proyecto es una tienda en línea básica desarrollada con React, que utiliza el hook `useContext` junto con `useReducer` para manejar el estado global del carrito de compras. Permite agregar productos al carrito, modificar cantidades, eliminar productos y limpiar el carrito. Además, incluye notificaciones visuales con `react-hot-toast`.

---

## Características

- Mostrar listado de productos con imágenes, descripción y precio.
- Añadir productos al carrito.
- Incrementar y decrementar la cantidad de productos en el carrito.
- Eliminar productos del carrito.
- Mostrar total del carrito.
- Notificaciones con toast al agregar productos.
- Gestión global del estado usando Context API y useReducer.
- Preloader durante la carga de productos.
- Diseño moderno con Tailwind CSS.

---

## Instalación

1. Clonar el repositorio

```bash
git clone https://github.com/tuusuario/tu-repo.git


## Estructura del Proyecto 
/src
  /components
    Navbar.jsx
    Cart.jsx
    ProductCard.jsx
    ProductsPage.jsx
  /context
    CartContext.jsx
  /hooks
    useProducts.jsx
  /assets
    shop.png
  /Data
    products.js  
  App.jsx
  index.js

  ## Explicación técnica

- **CartContext.jsx**: Define el contexto del carrito y la lógica para manipular el estado usando un reducer.

- **useProducts.jsx**: Hook personalizado para simular la obtención de productos (podría ser reemplazado por una API real).

- **ProductCard.jsx**: Componente que muestra cada producto y permite agregarlo al carrito.

- **Navbar.jsx**: Barra de navegación que incluye el botón para mostrar u ocultar el carrito.

- **Cart.jsx**: Muestra los productos añadidos y permite modificar cantidades o eliminarlos.

## Tecnologías usadas

- React.js (hooks: useContext, useReducer, useEffect)  
- Tailwind CSS  
- React Hot Toast para notificaciones  
- JavaScript (ES6+)
