const articulos = document.getElementById("articulos");

function renderItems(items) {
  // Crear un fragmento de documento para optimizar el rendimiento
  const fragment = document.createDocumentFragment();

  items.forEach(item => {
    // Crear el elemento <article>
    const article = document.createElement("article");
    article.className = 'shadow';

    // Crear el elemento <figure>
    const figure = document.createElement("figure");
    
    // Crear contenedor de valoración
    const valoracion = document.createElement("div");
    valoracion.classList.add("valoracion");
    valoracion.textContent = `⭐ ${item.valoracion}`;
    figure.appendChild(valoracion);

    // Crear la imagen
    const img = document.createElement("img");
    img.src = item.imagen;
    img.alt = `${item.marca} ${item.modelo}`;
    figure.appendChild(img);

    // Crear un section
    const section = document.createElement("section");
    
    // Crear el título con la marca
    const marca = document.createElement("h3");
    marca.textContent = item.marca;

    // Crear el párrafo para modelo y precio
    const parrafo = document.createElement("p");
    
    // Crear el span para modelo
    const modelo = document.createElement("span");
    modelo.textContent = item.modelo;
    
    // Crear el span para precio
    const precio = document.createElement("span");
    precio.textContent = `${item.precio}.00 €`;
    
    // Agregar modelo y precio al párrafo
    parrafo.appendChild(modelo);
    parrafo.appendChild(precio);

    // Agregar botón "Añadir al carrito"
    const carrito = document.createElement("button");
    carrito.className = "agregar shadow";
    carrito.textContent = "Añadir";

    // Agregar los elementos al <section>
    section.appendChild(marca);
    section.appendChild(parrafo);
    section.appendChild(carrito);

    // Agregar los elementos al <article>
    article.appendChild(figure);
    article.appendChild(section);

    // Agregar el <article> al fragmento
    fragment.appendChild(article);
  });

  // Agregar el fragmento al contenedor
  document.getElementById("articulos").appendChild(fragment);
}

// Uso de la función con zapatillas
document.addEventListener("DOMContentLoaded", () => {
  renderItems(zapatillas);
});


