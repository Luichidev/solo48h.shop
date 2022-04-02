//Aqui va el código que enlazará las funciones con el DOM
/**
 * @Variables Glovales
 */

let count = 0
const cartIcon = document.querySelector(
  '.nav-item > button > .ti-shopping-cart'
)
const cartIconNumber = document.querySelector('.nav-shop__circle')
const cardIcons = document.querySelector('#cards')

window.addEventListener('DOMContentLoaded', () => {
  printProductsInCategories()
  createSubTotal()
})

// Pintar los productos en la pagina de categorias
function printProductsInCategories() {
  const cards = document.getElementById('cards')
  const templateCard = document.getElementById('template-card').content
  const fragment = document.createDocumentFragment()

  Productos.forEach((producto) => {
    templateCard.querySelector('.card-img').setAttribute('src', producto.url)
    templateCard.querySelector('.ti-trash').setAttribute('data-id', producto.id)
    templateCard.querySelector('.remove').setAttribute('data-id', producto.id)
    templateCard
      .querySelector('.ti-shopping-cart')
      .setAttribute('data-id', producto.id)
    templateCard.querySelector('.add').setAttribute('data-id', producto.id)
    templateCard.querySelector('.ti-heart').setAttribute('data-id', producto.id)
    templateCard.querySelector('.like').setAttribute('data-id', producto.id)
    templateCard.querySelector('.card-body > p').textContent = producto.titulo
    templateCard.querySelector('.card-product__title > a').textContent =
      producto.categoria
    templateCard.querySelector('.card-product__price').textContent =
      producto.precio
    const clone = templateCard.cloneNode(true)
    fragment.appendChild(clone)
  })
  cards.appendChild(fragment)
}

//Click en el icono de carrito
cartIconNumber.innerHTML = count
cartIcon.addEventListener('click', () => {
  window.location.href = 'http://127.0.0.1:5501/cart.html'
})

//Click en el icono de carrito de cada producto
cards.addEventListener('click', (e) => {
  const id = e.target.dataset.id
  if (
    e.target.classList.contains('ti-shopping-cart') ||
    e.target.classList.contains('add')
  ) {
    addToCart(id)
    count = updateNotify()
  } else if (
    e.target.classList.contains('ti-trash') ||
    e.target.classList.contains('remove')
  ) {
    removeFromCart(id)
    count = updateNotify()
  }
  cartIconNumber.innerHTML = count
  e.stopPropagation()
})
