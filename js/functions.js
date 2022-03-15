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