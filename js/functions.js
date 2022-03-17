//PROTOTYPE: Float CalculateTotal ()
//DESCRIPTION: Devuelve la suma de los subtotales por categoría del carrito.
//AUTOR: Sandra Sarmiento
function calculateTotal() {
  let sum = 0;
  for (const key in subtotal) {
    sum += subtotal[key].value;
  }
  return sum;
}
//PROTOTYPE:  Void getAllProducts ()
//DESCRIPTION: Muestra por consola todos los productos.
//AUTOR: Sandra Sarmiento
function getAllProducts() {
  products.forEach((product) => {
    console.table(product);
  });
}
// generateCart(): receives the cartList array
function generateCart() {
  for (let i = 0; i < cart.length; i++) {
    console.log("Product: " + cart[i].name + "Price:" + cart[i].price);
  }
}
//PROTOTYPE:  Array removeCart ()
//DESCRIPTION: Muestra por consola todos los productos.
//AUTOR: Sandra Sarmiento
function removeFromCart(id) {
  for (let i = 0; i < cart.length; i++) {
    if (id === cart[i].id) {
      if (cart[i].quantity > 1) {
        cart[i].quantity--;
      } else {
        cart.splice(i, 1);
      }
      return cart;
    }
  }
  return cart;
}
//PROTOTYPE:  Void orderByProduct()
//DESCRIPTION: Ordena en forma descendente los productos dentro de cart.
//AUTOR: Dorian Fanttini

function orderByProduct(){
  cart.sort(function(a,b){
    if (a.titulo > b.titulo){ 
    return 1;
  } else {
    return -1;
  }
 } )
  }
    
//description: function buy()
//Autor:Tania Guimerà

const addproduct = products.find(element => element.id == id);
    cartList.push(addproduct );

//clear cart(): clear car list
//autor: alma ortiz
function clearCart() {
  carList.length = 0;
  cartList = [];
}

//function subtotal() dynamic subtotal:
//autor: alma ortiz
tipus = Object.keys(subtotal);
function subtotal() {
  for (var i = 0; i < cartList.length; i++) {
    tipus.forEach(element => {
        if (cartList[i].type == element) {
            total2 = subtotal[element].value + cartList[i].price;
            subtotal[element].value = parseFloat(total2.toFixed(2));
        }
    });
  }
  }    
//PROTOTYPE:  Array Products From Category ()
//DESCRIPTION: Muestra los productos por categoria.
//AUTOR: Sandra Sarmiento
function getProductsFromCategory(categoria) {
  let aux = []
products.forEach(product => {
  if (product.type === categoria) {
    aux.push(product)    
  } 
});
return aux
}