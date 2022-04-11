

const prodSearch = document.getElementById('buscador');
prodSearch.addEventListener('click', e => {
    let prodWordSearched = document.getElementById('busca').value
    const resposta= Productos.filter(element => element.titulo.trim().toLowerCase().includes(prodWordSearched.trim().toLowerCase()))
    console.log(resposta);
    printProductsInCategories(resposta)
});

