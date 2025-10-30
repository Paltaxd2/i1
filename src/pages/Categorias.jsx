import { useEffect } from "react";

const Categorias = () => {
  useEffect(() => {
    if (!document.querySelector("script[src='/js/categorias.js']")){
      console.log("Categorias js No esta cargado")
      const sc = document.createElement("script")
      sc.src = "/js/categorias.js"
      sc.async = true
      document.body.appendChild(sc)
      onload = () => {
        if (cambCategoria) {
          console.log("La categoria funciona")
        }
      }
    } else {
      console.log("Categorias js ya esta cargado")
    }
  }, [])

  return (
    <main>
      <section>
        <h1>Categorias</h1>
        <div>
          <select name="selCat" id="selCat" onChange={(e => window.cambCategoria(e.target))}>
            <option value="NoCategoria">Seleccione una Categoria</option>
            <option value="1">Productos</option>
            <option value="2">Consolas</option>
            <option value="3">Accesorios</option>
            <option value="4">Juegos de Mesa</option>
            <option value="5">Gundam</option>
          </select>
        </div>
      </section>
      <section>
        <div>
          <label id="tituloCategoria">Seleccione una Categoria</label>
          <div>
            <div id="produCategoria"></div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Categorias;