let url = new URL(window.location.href)
DEV
  ? (urlProduct = `${url.origin}/single-product.html?id=`)
  : (urlProduct = `${url.href}/single-product.html?id=`)
//Aqui va el código que enlazará las funciones con el DOM
window.addEventListener('DOMContentLoaded', () => {
  printProductsInCategories(Productos)
  createSubTotal()

  const filters = document.querySelectorAll('#filter > .filter-list')

  filters.forEach((ele) => {
    ele.addEventListener('click', (e) => {
      e.preventDefault()
      let categoria = e.target.getAttribute('data-categoria')
      const inputFilter = e.target.previousSibling

      if (categoria !== 'todos') {
        const arrayCategoria = Productos.filter((producto) => {
          return producto.categoria === categoria
        })
        printProductsInCategories(arrayCategoria)
      } else {
        printProductsInCategories(Productos)
      }
      inputFilter.checked = true
    })
  })
})

// Pintar los productos en la pagina de categorias
function printProductsInCategories(array) {
  const cards = document.getElementById('cards')
  cards.innerHTML = ''
  const templateCard = document.getElementById('template-card').content
  const fragment = document.createDocumentFragment()

  array.forEach((producto) => {
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
    templateCard
      .querySelector('.card-product__title > a')
      .setAttribute('href', urlProduct + producto.id)
    templateCard.querySelector('.card-product__price').textContent =
      producto.precio
    const clone = templateCard.cloneNode(true)
    fragment.appendChild(clone)
  })
  cards.appendChild(fragment)
}
