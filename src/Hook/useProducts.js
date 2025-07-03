import {  useEffect, useState } from "react";
import { obtenerProductos } from "../data/products";

export function useProducts(){
    const [productos, setProductos] =useState ([]);
    const [cargando, setCargando]=useState(true);
    const [error, setError]=useState(null);


    useEffect(()=>{
        obtenerProductos()
        .then(setProductos)
        .catch(setError)
        .finally( ()=> setCargando(false))
    },[])

    return {productos, cargando, error}
}