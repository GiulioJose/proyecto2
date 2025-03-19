function crearFiltro(nombre, opciones) {
  const filtroContainer = document.createElement("div");
  filtroContainer.classList.add(`filtro-${nombre}`);

  const label = document.createElement("label");
  label.textContent = nombre.replace(/\b\w/g, c => c.toUpperCase()) + ":";
  label.setAttribute("for", nombre);

  const select = document.createElement("select");
  select.id = nombre;
  select.dataset.filtro = nombre;

  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "------";
  select.appendChild(defaultOption);

  opciones.forEach(opcion => {
    const option = document.createElement("option");
    option.value = String(opcion).toLowerCase();
    option.textContent = opcion;
    select.appendChild(option);
  });

  filtroContainer.appendChild(label);
  filtroContainer.appendChild(select);
  document.querySelector(".filtros-form").appendChild(filtroContainer);
  select.addEventListener("change", aplicarFiltros);
}

function filtrarZapatillas() {
  const marcaSeleccionada = document.getElementById("marca").value.toLowerCase();
  const modeloSeleccionado = document.getElementById("modelo").value.toLowerCase();
  const colorSeleccionado = document.getElementById("color").value.toLowerCase();
  const tallaSeleccionada = Number(document.getElementById("talla").value) || null;
  const generoSeleccionado = document.getElementById("genero")?.value?.toLowerCase() || "";
  const valoracionSeleccionada = document.getElementById("valoracion")?.value || "";

  return zapatillas.filter(zapatilla => {
    return (
      (valoracionSeleccionada === "" ||
       (valoracionSeleccionada === "5" && zapatilla.valoracion === 5) ||
       (valoracionSeleccionada === "+4" && zapatilla.valoracion >= 4) ||
       (valoracionSeleccionada === "+3" && zapatilla.valoracion >= 3) ||
       (valoracionSeleccionada === "+2" && zapatilla.valoracion >= 2)) &&
      (marcaSeleccionada === "" || zapatilla.marca.toLowerCase() === marcaSeleccionada) &&
      (modeloSeleccionado === "" || zapatilla.modelo.toLowerCase() === modeloSeleccionado) &&
      (colorSeleccionado === "" || zapatilla.color.map(c => c.toLowerCase()).includes(colorSeleccionado)) &&
      (!tallaSeleccionada || zapatilla.talla.includes(tallaSeleccionada)) &&
      (generoSeleccionado === "" || ["unisex", generoSeleccionado].includes(String(zapatilla.genero).toLowerCase()))
    );
  });
}

function mostrarResultados(resultados) {
  const contenedorArticulos = document.getElementById("articulos");
  contenedorArticulos.innerHTML = "";

  if (resultados.length === 0) {
    const mensaje = document.createElement("div");
    mensaje.className = "mensaje-sin-resultados";
    mensaje.innerHTML = `
      <h2>No encontramos resultados 😞</h2>
      <p>Pero quizás te gusten algunos de estos modelos:</p>
      <hr class="separador">
    `;
    contenedorArticulos.appendChild(mensaje);
  
    // Sección de sugerencias
    const sugerencias = [...zapatillas].sort(() => Math.random() - 0.5).slice(0, 3);
  
    const contenedorSugerencias = document.createElement("div");
    contenedorSugerencias.className = "sugerencias";
    renderItems(sugerencias, contenedorSugerencias);
    contenedorArticulos.appendChild(contenedorSugerencias);
  } else {
    renderItems(resultados);
  }
  
  
}

function aplicarFiltros() {
  const resultados = filtrarZapatillas();
  mostrarResultados(resultados);
}

document.addEventListener("DOMContentLoaded", () => {
  let filtrosForm = document.querySelector(".filtros-form");
  
  if (!filtrosForm) return;

  const marcas = [...new Set(zapatillas.map(z => z.marca))].sort(); 
  const modelos = [...new Set(zapatillas.map(z => z.modelo))].sort();
  const colores = [...new Set(zapatillas.flatMap(z => z.color))].sort();
  const tallas = [...new Set(zapatillas.flatMap(z => z.talla))].sort((a, b) => a - b);
  const generos = [...new Set(zapatillas.flatMap(z => z.genero))].sort();

  crearFiltro("marca", marcas);
  crearFiltro("modelo", modelos);
  crearFiltro("color", colores);
  crearFiltro("talla", tallas.map(String));
  crearFiltro("genero", generos);
  crearFiltro("valoracion", ["5", "+4", "+3", "+2"]);

  const resetButton = document.createElement("button");
  resetButton.type = "button";
  resetButton.textContent = "Limpiar";
  resetButton.classList.add("reset-filtros");
  resetButton.addEventListener("click", () => {
    filtrosForm.reset();
    aplicarFiltros();
  });
  filtrosForm.appendChild(resetButton);
});
