//Aqui va el código que enlazará las funciones con el DOM

const cards = document.getElementById('cards');
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment();

Productos.forEach(producto => {
    templateCard.querySelector('.card-img').setAttribute('src', producto.url)
    templateCard.querySelector('.card-body > p').textContent=producto.titulo
    templateCard.querySelector('.card-product__title > a').textContent=producto.categoria
    templateCard.querySelector('.card-product__price').textContent=producto.precio
    const clone= templateCard.cloneNode(true);
    fragment.appendChild(clone)

});
cards.appendChild(fragment)