const cartIconNumber = document.querySelector('.nav-shop__circle')

window.addEventListener('DOMContentLoaded', () => {
  let count = 0
  let url = new URL(window.location.href)
  DEV ? (newUrl = `${url.origin}`) : (newUrl = `${url.href}`)

  const cartIcon = document.querySelector('.iconCart')

  //Click en el icono de carrito
  cartIconNumber.innerHTML = count
  cartIcon.setAttribute('href', newUrl + '/cart.html')
  try {
    //Click en el icono de carrito de cada producto
    cart = getLocal('data-cart')
    count = updateNotify()
    cartIconNumber.innerHTML = count
    cards.addEventListener('click', (e) => {
      handleClickProducts(e)
    })

    bestSellerCarousel.addEventListener('click', (e) => {
      handleClickProducts(e)
    })
  } catch (error) {}
})

function handleClickProducts(e) {
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
  setLocal('data-cart', cart)
  cartIconNumber.innerHTML = count
  e.stopPropagation()
}
