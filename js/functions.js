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
    