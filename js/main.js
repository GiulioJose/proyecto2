document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  // Crear el <main>
  const main = document.createElement("main");

  // Sección Hero
  const hero = document.createElement("section");
  hero.className = "hero img-background";
  const h1 = document.createElement("h1");
  h1.className = "sr-only";
  h1.textContent = "Encuentra las Mejores Zapatillas Deportivas en JD Sports";
  hero.appendChild(h1);

  // Filtros
  const aside = document.createElement("aside");
  aside.className = "filtros cerrado";

  const form = document.createElement("form");
  form.className = "filtros-form";
  aside.appendChild(form);

  const pestana = document.createElement("button");
  pestana.className = "pestana";
  pestana.setAttribute("aria-label", "Abrir o cerrar filtros");
  const imgPestana = document.createElement("img");
  imgPestana.src = "assets/img/arrow.png";
  imgPestana.alt = "Mostrar/Ocultar filtros";
  pestana.appendChild(imgPestana);
  aside.appendChild(pestana);

  // Sección de artículos
  const sectionArticulos = document.createElement("section");
  sectionArticulos.id = "articulos";
  sectionArticulos.className = "flex-row";

  const h2 = document.createElement("h2");
  h2.className = "sr-only";
  h2.textContent = "Nuestras mejores zapatillas para ti";
  sectionArticulos.appendChild(h2);

  // Agregar todo al main
  main.appendChild(hero);
  main.appendChild(aside);
  main.appendChild(sectionArticulos);

  // Agregar el main dentro del #app
  app.appendChild(main);

  /*------------------  MENU DESPLEGABLE ------- para versión móvil ---------- */
  const botonMenu = document.getElementById('toggleMenu');
  let menu = null;

  botonMenu.addEventListener("click", () => {
    if (!menu) {
      const header = document.querySelector("header");
      menu = document.createElement("div");
      menu.className = "menu cerrado"; // Inicia cerrado
      const lista = document.getElementById('lista');
      const newList = lista.cloneNode(true);
      newList.id = "newList";
      menu.appendChild(newList);
      header.appendChild(menu);
    }

    // Alternar clases con toggle()
    menu.classList.toggle("cerrado");
    menu.classList.toggle("abierto");
  });

  /* Código para cerrar menú en resize */
  window.addEventListener("resize", () => {
    if (window.innerWidth > 870 && menu && menu.classList.contains("abierto")) {
      menu.classList.remove("abierto");
      menu.classList.add("cerrado");
    }
  });

  /*------------------  FILTROS DESPLEGABLE ----------------- */
  const filtros = document.querySelector(".filtros");

  pestana.addEventListener("click", () => {
    // ✅ Alternar clases con toggle()
    filtros.classList.toggle("cerrado");
    filtros.classList.toggle("abierto");
  });

  /*------------------  BOTÓN AÑADIR ----------------- */
  let contadorAñadidos = 0;
  const carrito = document.getElementById("carrito");
  let contadorCarrito = document.createElement("span");
  contadorCarrito.id = "contador-carrito";
  contadorCarrito.textContent = "0";
  contadorCarrito.style.display = "none"; // Ocultar inicialmente
  carrito.appendChild(contadorCarrito);

  sectionArticulos.addEventListener("click", (event) => {
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
});
