//PROTOTYPE: Float CalculateTotal ()
//DESCRIPTION: Devuelve la suma de los subtotales por categoría del carrito.
//AUTOR: Sandra Sarmiento
function calculateTotal() {
  let sum = 0
  for (const key in subtotal) {
    sum += subtotal[key].value
  }
  return sum
}
//PROTOTYPE:  Void getAllProducts ()
//DESCRIPTION: Muestra por consola todos los productos.
//AUTOR: Sandra Sarmiento
function getAllProducts() {
  products.forEach((product) => {
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
  for (let i = 0; i < cart.length; i++) {
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
//DESCRIPTION: Muestra por consola todos los productos.
//AUTOR: Sandra Sarmiento
function removeFromCart(id) {
  for (let i = 0; i < cart.length; i++) {
    if (id === cart[i].id) {
      if (cart[i].quantity > 1) {
        cart[i].quantity--
      } else {
        cart.splice(i, 1)
      }
      return cart
    }
  }
  return cart
}
//PROTOTYPE:  Void orderByProduct()
//DESCRIPTION: Ordena en forma descendente los productos dentro de cart.
//AUTOR: Dorian Fanttini
function orderByProduct() {
  cart.sort(function (a, b) {
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
  products.forEach((product) => {
    if (product.type === categoria) {
      aux.push(product)
    }
  })
  return aux
}
//Prototype: functiona ProductsByPopularity()
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
  productos.sort(function (a, b) {
    if (a.categoria > b.categoria) {
      return 1
    } else {
      return -1
    }
  })
}
