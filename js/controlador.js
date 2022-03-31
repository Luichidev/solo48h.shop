//Aqui va el código que enlazará las funciones con el DOM
window.addEventListener("DOMContentLoaded", () => {
  printProductsInCategories();
});

function printProductsInCategories() {
  const cards = document.getElementById("cards");
  const templateCard = document.getElementById("template-card").content;
  const fragment = document.createDocumentFragment();

  Productos.forEach((producto) => {
    templateCard.querySelector(".card-img").setAttribute("src", producto.url);
    templateCard.querySelector(".card-body > p").textContent = producto.titulo;
    templateCard.querySelector(".card-product__title > a").textContent =
      producto.categoria;
    templateCard.querySelector(".card-product__price").textContent =
      producto.precio;
    const clone = templateCard.cloneNode(true);
    fragment.appendChild(clone);
  });
  cards.appendChild(fragment);
}

let count = 0
const cartIcon = document.querySelector(
  '.nav-item > button > .ti-shopping-cart'
)
const cartIconNumber = document.querySelector('.nav-shop__circle')

//Click en el icono de carrito
cartIconNumber.innerHTML = count
cartIcon.addEventListener('click', () => {
  window.location.href = 'http://127.0.0.1:5501/cart.html'
})