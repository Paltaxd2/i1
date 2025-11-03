import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { vi, describe, it, expect, afterEach } from "vitest";
import userEvent from "@testing-library/user-event";
import NuevoUsuario from "../pages/NuevoUsuario";

afterEach(cleanup);

describe("Probando a renderizar un Usuario", () => {
    it('render ', () => {
        render(<NuevoUsuario />);
        expect(screen.getByRole('button', { name: /Crear Usuario/i })).toBeInTheDocument();
    })
})

describe("Formulario de Nuevo Usuario", () => {
    it('Cargado y validación de datos', async () => {

        const mostrarMensaje = (nombre) => {
            const p = document.createElement("p");
            p.setAttribute("role", "alert");
            p.textContent = nombre;
            document.body.appendChild(p);
        };
        render(<NuevoUsuario />);

        // variables por Id
        const txtNombre = document.getElementById('txtNombre');
        const txtCorreo = document.getElementById('txtCorreo');
        const txtCorreoConfirm = document.getElementById('txtCorreoConfirm');
        const txtPass = document.getElementById('txtPass');
        const txtPassConfirm = document.getElementById('txtPassConfirm');
        const selRol = document.getElementById('selRol');
        const selRegion = document.getElementById('selRegion');
        const selComuna = document.getElementById('selComuna');

        // Simulacion / Mockear
        selComuna.innerHTML = `
        <option value="1">Santiago</option>
        <option value="2">Las Condes</option>
        <option value="3">Providencia</option>
        <option value="4">Peñalolén</option>
        <option value="5">Vitacura</option>
      `;

        // Boton
        const botonCrearUsuario = document.getElementById('botonCrearUsuario');

        // Usuario Mono (userEvent)
        const usuario = userEvent.setup();

        // Poblado
        await usuario.type(txtNombre, 'admin');
        await usuario.type(txtCorreo, 'admin@duoc.cl');
        await usuario.type(txtCorreoConfirm, 'admin@duoc.cl');
        await usuario.type(txtPass, '1234');
        await usuario.type(txtPassConfirm, '1234');

        // select Rol
        await usuario.selectOptions(selRol, '3');  // Administrador

        // Select Region
        await usuario.selectOptions(selRegion, 'Metropolitana');

        // Select Comuna
        await usuario.selectOptions(selComuna, '2');

        // Boton Crear
        await usuario.click(botonCrearUsuario);

        // Crear un alert con Nombre Usuario
        mostrarMensaje(txtNombre.value);

        // resultado
        const alerta = screen.getByRole("alert");
        expect(alerta.textContent).toBe("admin");
    });
});