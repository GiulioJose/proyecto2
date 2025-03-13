const zapatillas = [
  {
    id: 1,
    marca: "Nike Original",
    modelo: "Air Max 1",
    precio: 120,
    color: ["blanco", "verde", "negro"],
    talla: [30, 32, 34, 36, 40, 42, 44],
    genero: ["Unisex"],
    valoracion: 4.5,
    imagen: "assets/img/zapatillas/1_nike1.png"
  },
  {
    id: 2,
    marca: "New Balance",
    modelo: "NB 9060",
    precio: 80,
    color: ["azul", "gris"],
    talla: [30, 32, 34, 36, 38, 42],
    genero: ["Hombre"],
    valoracion: 4.2,
    imagen: "assets/img/zapatillas/2_nike1.png"
  },
  {
    id: 3,
    marca: "Nike Original",
    modelo: "Nike Revolution",
    precio: 90,
    color: ["azul", "gris", "blanco"],
    talla: [30, 34, 38, 42, 46],
    genero: ["Hombre"],
    valoracion: 5.0,
    imagen: "assets/img/zapatillas/3_nike1.png"
  },
  {
    id: 4,
    marca: "Adidas Original",
    modelo: "Forum Buckle",
    precio: 100,
    color: ["gris", "azul"],
    talla: [30, 32, 34, 38, 40, 44],
    genero: ["Hombre"],
    valoracion: 3.3,
    imagen: "assets/img/zapatillas/4_nike1.png"
  },
  {
    id: 5,
    marca: "Adidas Original",
    modelo: "Campus",
    precio: 120,
    color: ["verde", "blanco"],
    talla: [30, 32, 36, 40],
    genero: ["Mujer"],
    valoracion: 3.6,
    imagen: "assets/img/zapatillas/5_nike1.png"
  },
  {
    id: 6,
    marca: "New Balance",
    modelo: "NB 327",
    precio: 120,
    color: ["blanco", "gris", "rosado"],
    talla: [30, 34, 38, 42],
    genero: ["Mujer"],
    valoracion: 4.7,
    imagen: "assets/img/zapatillas/6_nike1.png"
  },
  {
    id: 7,
    marca: "Nike Original",
    modelo: "Dunk Low",
    precio: 100,
    color: ["verde", "blanco"],
    talla: [30, 32, 34, 40, 46],
    genero: ["Hombre"],
    valoracion: 3.9,
    imagen: "assets/img/zapatillas/7_nike1.png"
  },
  {
    id: 8,
    marca: "Adidas Original",
    modelo: "Gazelle",
    precio: 90,
    color: ["rosado", "marron", "azul"],
    talla: [30, 34, 38, 42],
    genero: ["Mujer"],
    valoracion: 4.8,
    imagen: "assets/img/zapatillas/8_nike1.png"
  },
  {
    id: 9,
    marca: "Nike Original",
    modelo: "Air Max SC",
    precio: 150,
    color: ["blanco", "marron", "gris"],
    talla: [30, 34, 38, 42, 46],
    genero: ["Unisex"],
    valoracion: 4.1,
    imagen: "assets/img/zapatillas/9_nike1.png"
  },
  {
    id: 10,
    marca: "Adidas Original",
    modelo: "Handball Spezial",
    precio: 120,
    color: ["negro", "marron", "rosado"],
    talla: [30, 34, 38, 42],
    genero: ["Unisex"],
    valoracion: 3.5,
    imagen: "assets/img/zapatillas/10_nike1.png"
  },
  {
    id: 11,
    marca: "Nike Original",
    modelo: "Air Force",
    precio: 130,
    color: ["blanco", "naranja"],
    talla: [30, 32, 36, 40, 44],
    genero: ["Unisex"],
    valoracion: 4.3,
    imagen: "assets/img/zapatillas/11_nike1.png"
  },
  {
    id: 12,
    marca: "New Balance",
    modelo: "NB 9060",
    precio: 100,
    color: ["marron", "gris", "rosado"],
    talla: [30, 34, 38, 42],
    genero: ["Mujer"],
    valoracion: 3.7,
    imagen: "assets/img/zapatillas/12_nike1.png"
  },
  {
    id: 13,
    marca: "New Balance",
    modelo: "NB 480",
    precio: 150,
    color: ["blanco", "naranja"],
    talla: [30, 34, 38, 42, 46],
    genero: ["Hombre"],
    valoracion: 4.6,
    imagen: "assets/img/zapatillas/13_nike1.png"
  },
  {
    id: 14,
    marca: "Nike Original",
    modelo: "Full Force Low",
    precio: 70,
    color: ["blanco", "azul"],
    talla: [30, 32, 36, 40],
    genero: ["Hombre"],
    valoracion: 3.8,
    imagen: "assets/img/zapatillas/14_nike1.png"
  },
  {
    id: 15,
    marca: "Nike Original",
    modelo: "Air Max SC",
    precio: 160,
    color: ["gris", "blanco", "negro"],
    talla: [30, 34, 38, 42, 46],
    genero: ["Unisex"],
    valoracion: 4.9,
    imagen: "assets/img/zapatillas/15_nike1.png"
  },
  {
    id: 16,
    marca: "Adidas Original",
    modelo: "Handball Spezial",
    precio: 140,
    color: ["beige", "rojo", "marron"],
    talla: [30, 34, 38, 42],
    genero: ["Mujer"],
    valoracion: 3.4,
    imagen: "assets/img/zapatillas/16_nike1.png"
  }
];

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


