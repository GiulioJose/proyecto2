/*------------------  MENU DESPLEGABLE ------- para version movil ---------- */
const botonMenu = document.getElementById('toggleMenu');
let menu = null; 
let toggle = false;

botonMenu.addEventListener("click", () => {
  if (!menu) { // Si aún no se ha creado, lo creamos
    const header = document.querySelector("header");
    menu = document.createElement("div");
    menu.className = "menu cerrado"; // Inicia cerrado
    const lista = document.getElementById('lista');
    const newList = lista.cloneNode(true);
    newList.id = "newList";
    menu.appendChild(newList);
    header.appendChild(menu);
    void menu.offsetHeight;
  }

  // Alternar clases para el efecto de transición
  if (menu.classList.contains("cerrado")) {
    menu.classList.remove("cerrado");
    menu.classList.add("abierto");
  } else {
    menu.classList.remove("abierto");
    menu.classList.add("cerrado");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 870 && menu && menu.classList.contains("abierto")) {
    menu.classList.remove("abierto");
    menu.classList.add("cerrado");
  }
});

/*------------------  FILTROS DESPLEGABLE ----------------- */
const btnPestana = document.querySelector(".pestana");     //BOSTON PARA PLIEGUE

document.addEventListener("DOMContentLoaded", () => {
  const filtros = document.querySelector(".filtros");
  btnPestana.addEventListener("click", () => {
    if (filtros.classList.contains("cerrado")) {
      filtros.classList.remove("cerrado");
      filtros.classList.add("abierto");
    } else {
      filtros.classList.remove("abierto");
      filtros.classList.add("cerrado");
    }
  });
});

/*------------------  BOTON AÑADIR ----------------- */
let contadorAñadidos = 0;
const carrito = document.getElementById("carrito");
let contadorCarrito = document.createElement("span");
contadorCarrito.id = "contador-carrito";
contadorCarrito.textContent = "0";
contadorCarrito.style.display = "none"; // Ocultar inicialmente
carrito.appendChild(contadorCarrito);

document.getElementById("articulos").addEventListener("click", (event) => {
  if (event.target.classList.contains("agregar")) {
    const boton = event.target;

    if (!boton.classList.contains("añadido")) {
      boton.textContent = "Añadido";
      boton.classList.add("añadido");
      contadorAñadidos++;
    } else {
      boton.textContent = "Añadir";
      boton.classList.remove("añadido");
      contadorAñadidos--;
    }

    if (contadorAñadidos > 0) {
      contadorCarrito.textContent = contadorAñadidos;
      contadorCarrito.style.display = "block"; // Mostrar contador
    } else {
      contadorCarrito.style.display = "none"; // Ocultar si es 0
    }
  }
});
