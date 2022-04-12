window.addEventListener('DOMContentLoaded', () => {
  printProductsInIndexTrend()
  printProductsInIndexPopularity()
  const allLinkProducts = document.querySelectorAll('.card-product__title a')
  const bannerProducts = document.querySelectorAll(
    '.hero-carousel__slideOverlay'
  )

  allLinkProducts.forEach((ele) => {
    handleClick(ele)
  })
  bannerProducts.forEach((ele) => {
    handleClick(ele)
  })
})

function handleClick(ele) {
  ele.addEventListener('click', (e) => {
    e.preventDefault()
    let id = e.target.getAttribute('data-id')
    let url = new URL(window.location.href)
    window.location.href = `${url.origin}/single-product.html?id=${id}`
  })
}

// Pintar los 6 primeros productos en tendencia
function printProductsInIndexTrend() {
  const cards = document.getElementById('cards')
  const templateCard = document.getElementById('template-card').content
  const fragment = document.createDocumentFragment()
  // ProductsByPopularity()
  let aux = ProductsByTrend()

  aux.forEach((producto) => {
    templateCard.querySelector('.card-img').setAttribute('src', producto.url)
    templateCard.querySelector('.ti-trash').setAttribute('data-id', producto.id)
    templateCard.querySelector('.remove').setAttribute('data-id', producto.id)
    templateCard
      .querySelector('.card-product__title a')
      .setAttribute('data-id', producto.id)
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

// Pintar los productos más populares (popularity), los 6 más vendidos
function printProductsInIndexPopularity() {
  const cards = document.getElementById('bestSellerCarousel')
  const templateCard = document.getElementById('template-card-2').content
  const fragment = document.createDocumentFragment()
  ProductsByPopularity()

  for (let index = 0; index < 6; index++) {
    const producto = Productos[index]
    templateCard.querySelector('.img-fluid').setAttribute('src', producto.url)
    templateCard.querySelector('.ti-trash').setAttribute('data-id', producto.id)
    templateCard.querySelector('.remove').setAttribute('data-id', producto.id)
    templateCard
      .querySelector('.card-product__title a')
      .setAttribute('data-id', producto.id)
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
  }
  cards.appendChild(fragment)
}
