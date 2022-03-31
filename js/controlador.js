//Aqui va el código que enlazará las funciones con el DOM
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
