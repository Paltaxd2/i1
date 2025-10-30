import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import InicioUsuario from "../pages/InicioSesion";
import { describe, it, expect, afterEach } from "vitest"; 
import userEvent from "@testing-library/user-event";

describe("Probando a Iniciar Sesion", () => {
    it('render ', () => {
        render(<InicioUsuario />);
        expect(screen.getByRole('button', {name:/Iniciar Sesion/i})).toBeInTheDocument();
    })
})