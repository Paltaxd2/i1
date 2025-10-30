import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Nada
import Pruebas from './pages/Pruebas'

// Archivos jsx
import Listausuario from './pages/Listausuario'
import RegistroUsuario from './pages/RegistroUsuario'
import InicioSesion from './pages/InicioSesion'
import NuevoUsuario from './pages/NuevoUsuario'
import EditarUsuario from './pages/EditarUsuario'
import NavBar from './pages/NavBar'
import NuevoProducto from './pages/NuevoProducto'
import EditarProducto from './pages/EditarProducto'
import ListaProducto from './pages/ListaProducto'
import DetalleUsuario from './pages/DetalleUsuario'
import DetalleProducto from './pages/DetalleProducto'
import ListadoProductoCritico from './pages/ListadoProductoCritico'
import Categorias from './pages/Categorias'
import Compra from './pages/Compra'


import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      {
        <NavBar />
      }
      <BrowserRouter>
        <Routes>
          {
            // Rutas de Usuario
          }
          <Route path='/nuevoUsuario' element={<NuevoUsuario />} />
          <Route path='/registroUsuario' element={<RegistroUsuario />} />
          <Route path='/inicioSesion' element={<InicioSesion />} />
          <Route path='/editarUsuario' element={<EditarUsuario />} />
          <Route path='/listaUsuario' element={<Listausuario />} />
          <Route path='/detalleUsuario' element={<DetalleUsuario />} />
          {
            // Compra , Cumple 3
          }
          <Route path='/compra' element={<Compra/>}/>
          {
            // Rutas de Producto
          }
          <Route path='/nuevoProducto' element={<NuevoProducto />} />
          <Route path='/editarProducto' element={<EditarProducto />} />
          <Route path='/listaProducto' element={<ListaProducto />} />
          <Route path='/detalleProducto' element={<DetalleProducto />} />
          {
            // ProduCritico Cumple 1
          }
          <Route path='/listProduCritico' element={<ListadoProductoCritico />} />
          {
            // Categoria cumple 2
          }
          <Route path='/categorias' element={<Categorias />} />
          {
            // Nada
          }
          <Route path='/pruebas' element={<Pruebas />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
