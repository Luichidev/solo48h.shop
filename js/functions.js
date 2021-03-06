//PROTOTYPE: Float CalculateTotal ()
//DESCRIPTION: Devuelve la suma de los subtotales por categoría del carrito.
//AUTOR: Sandra Sarmiento
function calculateTotal() {
  let sum = 0
  for (const key in subtotal) {
    sum += subtotal[key].value
  }
  return sum.toFixed(2)
}
//PROTOTYPE:  Void getAllProducts ()
//DESCRIPTION: Muestra por consola todos los productos.
//AUTOR: Sandra Sarmiento
function getAllProducts() {
  Productos.forEach((product) => {
    console.table(product)
  })
}
// Cada producto del carrito conta con un campo cantidad. la función generateCart() recibe el array cartList, generando el array cart.
//generateCart()
//Vedrana Hasanbasic
function containsElement(id) {
  let cartContainsElement = false
  let index = -1
  for (var j = 0; j < cart.length; j++) {
    if (cart[j].id === id) {
      cartContainsElement = true
      index = j
      break
    }
  }
  return { contains: cartContainsElement, index: index }
}
function generateCart() {
  cart = []
  subtotal = []
  for (let i = 0; i < cartList.length; i++) {
    let cartContainsElement = containsElement(cartList[i].id)
    if (cartContainsElement['contains']) {
      let quantity = cart[cartContainsElement['index']].quantity
      cart[cartContainsElement['index']].quantity = quantity + 1
      cart[cartContainsElement['index']].subtotal += cartList[i].price
    } else {
      let cartToAdd = JSON.parse(JSON.stringify(cartList[i]))
      cartToAdd.quantity = 1
      cartToAdd.subtotal = cartList[i].price
      cart.push(cartToAdd)
    }
  }
  return cart
}
//PROTOTYPE:  Array removeCart ()
//DESCRIPTION: Esborra un a un els elements
//AUTOR: Sandra Sarmiento
function removeFromCart(id) {
  const findId = cart.findIndex((el) => el.id === +id)
  if (findId !== -1) {
    cart.splice(findId, 1)
  }
}

//PROTOTYPE:  Void orderByProduct()
//DESCRIPTION: Ordena en forma descendente los productos dentro de cart.
//AUTOR: Dorian Fanttini
function orderByProduct() {
  Productos.sort(function (a, b) {
    if (a.titulo > b.titulo) {
      return 1
    } else {
      return -1
    }
  })
}
//description: function buy()
//Autor:Tania Guimerà
function buy(id) {
  const addproduct = Productos.find((element) => element.id == id)
  addproduct.popularity++
  cartList.push(addproduct)
}
//clear cart(): clear car list
//autor: alma ortiz
function clearCart() {
  cartList.length = 0
  cartList = []
}

//function subtotal() dynamic subtotal:
//autor: alma ortiz
//Fixto: Luis Arana

function subTotal() {
  tipus = Object.keys(subtotal)

  for (var i = 0; i < cartList.length; i++) {
    tipus.forEach((element) => {
      let producto = cartList[i]
      if (producto.categoria == element) {
        total2 = subtotal[element].value + producto.precio
        subtotal[element] = {
          value: parseFloat(total2.toFixed(2)),
          discount: 0,
        }
      }
    })
  }
}
//PROTOTYPE:  Array Products From Category ()
//DESCRIPTION: Muestra los productos por categoria.
//AUTOR: Sandra Sarmiento
function getProductsFromCategory(categoria) {
  let aux = []
  Productos.forEach((product) => {
    if (product.categoria === categoria) {
      aux.push(product)
    }
  })
  return aux
}
//Prototype: function ProductsByPopularity()
//Description: mUestra los productos populares.
//Autor:Tania Guimerà
function ProductsByPopularity() {
  Productos.sort((a, b) => a.popularity - b.popularity).reverse()
}

//PROTOTYPE: Void createSubTotal().
//DESCRIPTION: rellena el array subtotal con las categorias que hay en los productos
//Autor: Luis Arana
function createSubTotal() {
  const model = {
    value: 0,
    discount: 0,
  }
  Productos.forEach((producto) => {
    subtotal[producto.categoria] = model
  })
}

//PROTOTYPE:  Void orderByCategory()
//DESCRIPTION: Ordenar los productos por categoria.
//AUTOR: Dorian Fanttini
function orderByCategory() {
  Productos.sort(function (a, b) {
    if (a.categoria > b.categoria) {
      return 1
    } else {
      return -1
    }
  })
}

//PROTOTYPE: Void addToCart().
//DESCRIPTION: Añade al carrito las compras de productos
//Autor: Luis Arana
function addToCart(id) {
  const addproduct = Productos.find((element) => element.id == id)
  addproduct.popularity++
  cartList.push(addproduct)

  const objIndex = cart.findIndex((obj) => obj.id == id)
  if (objIndex == -1) {
    cart.push({
      ...addproduct,
      quantity: 1,
      subtotal: addproduct.precio,
    })
  } else {
    cart[objIndex].quantity++
    let result = +cart[objIndex].subtotal + +addproduct.precio
    cart[objIndex].subtotal = +result.toFixed(2)
  }

  subTotal()
  calculateTotal()
}

// PROTOTYPE: Array sumTokeys(Array array, String key).
// DESCRIPTION: Devuelve la suma del contenido de la key de un array
//Autor: Luis Arana
function sumTokeys(array, key) {
  let total = 0
  if (Array.isArray(array)) {
    array.forEach((element) => {
      total += element[key]
    })
  }
  return total
}

// PROTOTYPE: Integer updateNotify().
// DESCRIPTION: Devuelve la cantidad de productos del cart
//Autor: Luis Arana
function updateNotify() {
  return sumTokeys(cart, 'quantity')
}

// PROTOTYPE: Void setLocalCart().
// DESCRIPTION: Guarda nuestro carrito en localStorage
//Autor: Luis Arana
function setLocal(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

//PROOTOTYPE: Void getLocalCart().
//DESCRIPTION: Recupera nuestro carrito de localStorage
//Autor: Luis Arana
function getLocal(key) {
  let res = JSON.parse(localStorage.getItem(key))
  return res ? res : []
}

//Prototype: function ProductsByTrend()
//Description: mUestra los productos en tendencia.
//Autor:Sandra Sarmiento
function ProductsByTrend() {
  let aux = []
  Productos.forEach((product) => {
    if (product.tendencia) {
      aux.push(product)
    }
  })
  return aux
}

//Prototype: void updateCart()
//Description: Actualiza el carrito
//Autor: Luis Arana
function updateCart(id, quantity) {
  const objIndex = cart.findIndex((obj) => obj.id == id)
  if (objIndex !== -1) {
    cart[objIndex].quantity = +quantity
    let sub = +cart[objIndex].precio * +quantity
    cart[objIndex].subtotal = sub.toFixed(2)
  }
}
