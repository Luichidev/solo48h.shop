let count = 0
const cartIcon = document.querySelector(
  '.nav-item > button > .ti-shopping-cart'
)
const cartIconNumber = document.querySelector('.nav-shop__circle')
const cardIcons = document.querySelector('#cards')

//Click en el icono de carrito
cartIconNumber.innerHTML = count
cartIcon.addEventListener('click', () => {
  let url = new URL(window.location.href)
  window.location.href = `${url.origin}/cart.html`
})

try {
  //Click en el icono de carrito de cada producto
  cart = getLocalCart('data-cart')
  count = updateNotify()
  cartIconNumber.innerHTML = count
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
    setLocalCart('data-cart', cart)
    cartIconNumber.innerHTML = count
    e.stopPropagation()
  })
} catch (error) {}
