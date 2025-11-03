import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import userEvent from "@testing-library/user-event";
import InicioUsuario from "../pages/InicioSesion";

describe("Probando a renderizar Iniciar Sesion", () => {
    it('render ', () => {
        render(<InicioUsuario />);
        expect(screen.getByRole('button', { name: /Iniciar Sesion/i })).toBeInTheDocument();
    })
})

describe("Probando a limpiar formulario", () => {
    it('insertando y limpiando datos', async () => {
        render(<InicioUsuario />);

        const usuario = userEvent.setup();

        // inputs por ID
        const txtNombre = document.getElementById("txtNombre");
        const txtCorreo = document.getElementById("txtCorreo");
        const txtPass = document.getElementById("txtPass");

        // boton
        const btnLimpiar = screen.getByRole("button", { name: /limpiar formulario/i });

        // variables
        await usuario.type(txtNombre, "admin");
        await usuario.type(txtCorreo, "admin@duoc.cl");
        await usuario.type(txtPass, "1234");

        // poblado
        expect(txtNombre.value).toBe("admin");
        expect(txtCorreo.value).toBe("admin@duoc.cl");
        expect(txtPass.value).toBe("1234");

        // limpiar
        await usuario.click(btnLimpiar);

        // resultado
        expect(txtNombre.value).toBe("");
        expect(txtCorreo.value).toBe("");
        expect(txtPass.value).toBe("");
    })
})