const prodSearch = document.getElementById('buscador')
prodSearch.addEventListener('click', (e) => {
  e.preventDefault()
  let prodWordSearched = document.getElementById('busca').value
  const resposta = Productos.filter((element) =>
    element.titulo
      .trim()
      .toLowerCase()
      .includes(prodWordSearched.trim().toLowerCase())
  )
  document.querySelector('#busca').value = ''
  printProductsInCategories(resposta)
})
