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
    products.forEach(product => {
      console.table(product)
    });
  }