import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { vi, describe, it, expect, afterEach } from "vitest"; 
import userEvent from "@testing-library/user-event";
import NuevoUsuario from "../pages/NuevoUsuario";
import Swal from 'sweetalert2';

afterEach(cleanup);

describe("Probando a Crear un Usuario", () => {
    it('render ', () => {
        render(<NuevoUsuario />);
        expect(screen.getByRole('button', {name:/Crear Usuario/i})).toBeInTheDocument();
    })
})

describe("Formulario de Nuevo Usuario", () => {
    it('Cargado y validación de datos', async () => {
        render(<NuevoUsuario />);
      
        // Usamos el id directamente
        const txtNombre = document.getElementById('txtNombre');
        const txtCorreo = document.getElementById('txtCorreo');
        const txtCorreoConfirm = document.getElementById('txtCorreoConfirm');
        const txtPass = document.getElementById('txtPass');
        const txtPassConfirm = document.getElementById('txtPassConfirm');
        const selRol = document.getElementById('selRol');
        const selRegion = document.getElementById('selRegion');
        const selComuna = document.getElementById('selComuna');

        selComuna.innerHTML = `
        <option value="1">Santiago</option>
        <option value="2">Las Condes</option>
        <option value="3">Providencia</option>
        <option value="4">Peñalolén</option>
        <option value="5">Vitacura</option>
      `;

        const botonCrearUsuario = document.getElementById('botonCrearUsuario'); // Asumiendo que este es el id del botón
      
        // Usuario Mono (userEvent)
        const usuario = userEvent.setup();
      
        // Llenamos los campos con los datos
        await usuario.type(txtNombre, 'admin');
        await usuario.type(txtCorreo, 'admin@duoc.cl');
        await usuario.type(txtCorreoConfirm, 'admin@duoc.cl');
        await usuario.type(txtPass, '1234');
        await usuario.type(txtPassConfirm, '1234');
      
        // Seleccionamos el rol
        await usuario.selectOptions(selRol, '3');  // Administrador
      
        // Seleccionamos la región primero
        await usuario.selectOptions(selRegion, 'Metropolitana');
      
        // Ahora seleccionamos la comuna
        await usuario.selectOptions(selComuna, '2');
      
        // Simulamos el click en el botón de Crear Usuario
        await usuario.click(botonCrearUsuario);
      
        // Verificamos que el SweetAlert2 muestra el mensaje correcto
        const spySwal = vi.spyOn(Swal, 'fire').mockImplementation(() => Promise.resolve());
      
        expect(spySwal).toHaveBeenCalledWith({
          title: "Usuario Agregado con Exito",
          text: "",
          icon: "success"
        });
      
        spySwal.mockRestore();

      });      
});