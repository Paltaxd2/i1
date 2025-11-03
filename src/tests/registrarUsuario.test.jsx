import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import RegistroUsuario from "../pages/RegistroUsuario";

describe("Probando a renderizar registroUsuario", () => {
    it('render ', () => {
        render(<RegistroUsuario/>);
        expect(screen.getByRole('button', {name:/Registrarse/i})).toBeInTheDocument();
    })
})

