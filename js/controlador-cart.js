//Aqui va el código que enlazará las funciones con el DOM
window.addEventListener('DOMContentLoaded', () => {
  printProductsInCart()
})

// Pintar los productos en la pagina de cart.html
function printProductsInCart() {
  const tbody = document.getElementById('tbody')
  const templateTbody = document.getElementById('template-tbody').content
  const templateTfooter = document.getElementById('template-tfooter').content
  const fragment = document.createDocumentFragment()
  const fragmentTfooter = document.createDocumentFragment()
  let total = 0
  console.log(cart)
  cart.forEach((producto) => {
    templateTbody.querySelector('.media img').setAttribute('src', producto.url)
    templateTbody
      .querySelector('.media img')
      .setAttribute('alt', producto.titulo)
    templateTbody.querySelector('.media-body p').textContent = producto.titulo
    templateTbody.querySelector('.price').textContent = producto.precio + '€'
    templateTbody.querySelector('.subtotal').textContent =
      producto.subtotal + '€'
    templateTbody.querySelector('#sst').setAttribute('value', producto.quantity)
    const clone = templateTbody.cloneNode(true)
    fragment.appendChild(clone)
    total += producto.subtotal
  })

  tbody.appendChild(fragment)
  templateTfooter.querySelector('#total').textContent = total + '€'
  const clone = templateTfooter.cloneNode(true)
  fragmentTfooter.appendChild(clone)
  tbody.appendChild(fragmentTfooter)
}
