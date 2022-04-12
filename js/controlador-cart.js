const coupons = [
  {
    name: 'VERANO2022',
    discount: 0.2,
  },
  {
    name: 'SOLO48H',
    discount: 0.3,
  },
  {
    name: 'FAMILIARS48',
    discount: 0.5,
  },
]

//Aqui va el código que enlazará las funciones con el DOM
window.addEventListener('DOMContentLoaded', () => {
  printProductsInCart()
})

// Actualizar el carrito
const btnAddMoreProducts = document.querySelector('#tbody')
btnAddMoreProducts.addEventListener('click', (e) => {
  const id = e.target.dataset.id
  let result = document.getElementById(`sst_${id}`)

  let sst = result.value
  if (
    e.target.classList.contains('increase') ||
    e.target.classList.contains('lnr-chevron-up')
  ) {
    if (!isNaN(sst)) {
      sst++
      updateCart(id, sst)
      count = updateNotify()
    }
    e.stopPropagation()
  }
  if (
    e.target.classList.contains('decrease') ||
    e.target.classList.contains('lnr-chevron-down')
  ) {
    if (!isNaN(sst)) {
      sst--
      if (sst <= 0) {
        removeFromCart(id)
      } else {
        updateCart(id, sst)
      }
      count = updateNotify()
    }
    e.stopPropagation()
  }

  setLocal('data-cart', cart)
  cartIconNumber.innerHTML = +count
  e.stopPropagation()
  printProductsInCart()
})

//Aplicar cupones de descuentos
const couponBtn = document.querySelector('#tfooter')
couponBtn.addEventListener('click', (e) => {
  if (e.target.classList.contains('coupon')) {
    e.preventDefault()
    const inputCoupon = document.querySelector('.coupon-input')
    if (inputCoupon.value !== '') {
      const coupon = inputCoupon.value
      const searchCoupon = coupons.find((ele) => ele.name === coupon)
      if (searchCoupon) {
        inputCoupon.style.border = '1px solid #53a653'
        const total = document.querySelector('#total').textContent
        const totalDiscount = +total * searchCoupon.discount
        const totalDiscountFixed = totalDiscount.toFixed(2)
        document.querySelector('#total').textContent =
          total - totalDiscountFixed
      } else {
        inputCoupon.style.border = '1px solid red'
      }
    }
    e.stopPropagation()
  }
})

// Pintar los productos en la pagina de cart.html
function printProductsInCart() {
  const tbody = document.getElementById('tbody')
  const tfooter = document.getElementById('tfooter')
  tbody.innerHTML = ''
  tfooter.innerHTML = ''
  const templateTbody = document.getElementById('template-tbody').content
  const templateTfooter = document.getElementById('template-tfooter').content
  const fragment = document.createDocumentFragment()
  const fragmentTfooter = document.createDocumentFragment()
  let total = 0

  cart.forEach((producto) => {
    templateTbody.querySelector('.media img').setAttribute('src', producto.url)
    templateTbody
      .querySelector('.media img')
      .setAttribute('alt', producto.titulo)
    templateTbody.querySelector('.media-body p').textContent = producto.titulo
    templateTbody.querySelector('.price').textContent = producto.precio
    templateTbody
      .querySelector('.product_count > input')
      .setAttribute('id', `sst_${producto.id}`)
    templateTbody
      .querySelector(`#sst_${producto.id}`)
      .setAttribute('value', producto.quantity)
    templateTbody
      .querySelector('.lnr-chevron-up')
      .setAttribute('data-id', producto.id)
    templateTbody
      .querySelector('.lnr-chevron-down')
      .setAttribute('data-id', producto.id)
    templateTbody.querySelector('.subtotal').textContent = producto.subtotal
    const clone = templateTbody.cloneNode(true)
    fragment.appendChild(clone)
    total += +producto.subtotal
  })

  tbody.appendChild(fragment)
  templateTfooter.querySelector('#total').textContent = total.toFixed(2)
  const clone = templateTfooter.cloneNode(true)
  fragmentTfooter.appendChild(clone)
  tfooter.appendChild(fragmentTfooter)
}
