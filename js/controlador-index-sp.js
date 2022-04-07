////Pintar el producto en la pagina single.product

function printProductInSingleproduct(id){

    const producto = Productos.find((element) => element.id == id) 
    const singleProduct = document.getElementById("singleproduct")
    const templateProduct = document.getElementById('template-Product').content
    const fragment = document.createDocumentFragment()

    templateProduct.querySelector('.img-fluid').setAttribute('src', producto.url)
    templateProduct.querySelector('.increase').setAttribute('data-id', producto.id)
    templateProduct.querySelector('.ti-angle-left').setAttribute('data-id', producto.id)
    templateProduct .querySelector('.reduced').setAttribute('data-id', producto.id)
    templateProduct.querySelector('.ti-angle-right').setAttribute('data-id', producto.id)
    templateProduct.querySelector('.button').setAttribute('data-id', producto.id)
    templateProduct.querySelector('.card_area > a').setAttribute('data-id', producto.id)
    templateProduct.querySelector('.s_product_text > h3').textContent = producto.titulo
    templateProduct.querySelector('.active').textContent = producto.categoria
    templateProduct.querySelector('.s_product_text > h2').textContent = producto.precio
    templateProduct.querySelector('.list a').textContent = producto.disponibilidad
    templateProduct.querySelector('.s_product_text > p').textContent = producto.disponibilidad
    const clone = templateProduct.cloneNode(true) 
    fragment.appendChild(clone)
      singleProduct.appendChild(fragment) 
}
