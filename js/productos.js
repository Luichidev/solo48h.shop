// const Productos = [
//   {
//     id: 1,
//     titulo:
//       'Ratón Gaming Profesional-Sensor óptico, 4 niveles de hasta 3200 DPI, iluminación LED, 7 botones, negro',
//     url: './img/product/product1.jpg',
//     descripcion:
//       'Sensor óptico de gran precisión - 4 niveles de DPI (800 - 3200) - Iluminación LED de varios colores - 7 botones - Compatibilidad Windows 7/8.1/10 Dimensiones: 125 x 68 x 38 mm',
//     precio: 5.5,
//     categoria: 'Electrónica',
//     popularity: 0,
//     tendencia: false,
//   },
//   {
//     id: 2,
//     titulo:
//       'Smartwatch, 1.69 pulgadas Hombre Mujer con Monitor de Frecuencia Cardíaca',
//     url: './img/product/product2.jpg',
//     descripcion:
//       "1.69'' Pantalla Táctil Completa a Color TFT -Smartwatch Multifuncións: como pulsera de actividad (podómetro, calorías, distancia), oxígeno sanguíneo, entrenamiento respiratorio, pulsómetro, monitoreo del sueño, 12 modos de deporte, recordatorio sedentario, notificaciones de llamadas, mensajes SMS y APP, cronómetro, reloj despertador, controla la música, encontrar teléfono, pronóstico del tiempo, ajuste de brillo-12 Modos Deportivos y Función Impermeable IP68-24 Horas Monitor de Frecuencia Cardíaca y Sueño  ",
//     precio: 16.99,
//     categoria: 'Deporte',
//     popularity: 0,
//     tendencia: true,
//   },
//   {
//     id: 3,
//     titulo: 'Zapatillas de deporte Hombre Runnig',
//     url: './img/product/product3.jpg',
//     descripcion:
//       'Material exterior: Sintético -Revestimiento:sintético - Material de la suela: Caucho -Cierre: Cordones -Altura del tacón:2,5 centímetros -Tipo de tacón: Plataforma  - Anchura del zapato: Normal centímetros',
//     precio: 19.95,
//     categoria: 'Deporte',
//     popularity: 0,
//     tendencia: true,
//   },
//   {
//     id: 4,
//     titulo: 'Colonia After Shave 330ml',
//     url: './img/product/product4.jpg',
//     descripcion:
//       ' Textura: loción -Información extendida:Hidrata y alivia la piel después del afeitado -Tipo de piel: Todo tipo - Volumen del producto:330 Mililitros - Peso del producto	0.13 Kilogramos',
//     precio: 4.15,
//     categoria: 'Salud y Belleza',
//     popularity: 1,
//     tendencia: true,
//   },
//   {
//     id: 5,
//     titulo: '100uds- Servilletas de papel 40x40 cm',
//     url: './img/product/product5.jpg',
//     descripcion:
//       'Set de 250 unidades de servilletas de papel de 40 x 40 cm -Estan HECHAS de pasta celulosa 100% y son de color azul, tienen 2 CAPAS -Totalmente DESECHABLES y RECICLABLES una vez usadas, tienen una textura muy agradable al tacto, gracias a sus materiales de fabricación y a la textura suave',
//     precio: 0.65,
//     categoria: 'Hogar',
//     popularity: 0,
//     tendencia: true,
//   },
//   {
//     id: 6,
//     titulo: 'Paleta de Sombra de Ojos',
//     url: './img/product/product6.jpg',
//     descripcion:
//       'PALETA con 5 Sombras De Ojos de alto rendimiento -Selección de sombras de ACABADO MATE, satinado, ligeramente brillante y metalizado -EFECTO de LARGA DURACIÓN, Colores llamativos que se difuminan con facilidad -Número de sombras: 5, Dimensiones: 1.8 x 9.9 x 9.6 cm',
//     precio: 5.5,
//     categoria: 'Cosmética',
//     popularity: 0,
//     tendencia: true,
//   },
//   {
//     id: 7,
//     titulo:
//       'Pegamento extrafuerte para madera, metal y más, adhesivo instantáneo, 1 tubo x 100 g',
//     url: './img/product/product7.jpg',
//     descripcion:
//       'PEGAMENTO RÁPIDO ideal para uniones resistentes en trabajos de bricolaje y reparación, ELIMINA el uso de clavos y tornillos -EXTRAFUERTE - Tecnología de POLÍMEROS a base de agua para adhesiones resistentes, SIN DISOLVENTES, sin pistola de cartuchos, blanco, 1 x 100 g tubo -Dimensiones del producto 12 x 3.9 x 21.5 cm; 121 gramos -',
//     precio: 2.45,
//     categoria: 'Bricolaje',
//     popularity: 0,
//     tendencia: false,
//   },
//   {
//     id: 8,
//     titulo: 'Gel Higienizante De Manos de 500 ml',
//     url: './img/product/product8.jpg',
//     descripcion:
//       'GEL HIDROALCOHÓLICO que limpia las manos en profundidad al tiempo que proporciona hidratación gracias a su fórmula con Aloe Vera y Glicerina -IDEAL PARA uso personal o en lugares públicos -NO RESECA -TAMAÑO:botella 500ml',
//     precio: 2.18,
//     categoria: 'Salud y Belleza',
//     popularity: 0,
//     tendencia: true,
//   },
//   {
//     id: 9,
//     titulo: 'spray cleaner 500ml',
//     url: './img/product/product9.jpg',
//     descripcion:
//       ' SPRAY DESINFECTANTE indicado para la limpieza y desinfección de múltiples superficies del hogar, con un agradable aroma a manzana -LIMPIA TU HOGAR SIN LEJÍA, elimina la suciedad y las manchas de múltiples superficies de tu hogar- NO DEJA QUÍMICOS ABRASIVOS en la superficie, sin fosfatos ni colorantes, apto para baños, cocinas, superficies de madera y vidrio, tiradores y pomos, muebles, sillas y pavimentos -Dimensiones del producto: 10 x 10 x 10 cm - Peso del producto: 85 g -Tamaño: botella 500ml -Seguridad del producto:Provoca lesiones oculares graves y Provoca irritación cutánea',
//     precio: 0.99,
//     categoria: 'Hogar',
//     popularity: 0,
//     tendencia: false,
//   },
//   {
//     id: 10,
//     titulo: 'Nocilla Cookies',
//     url: './img/product/product10.jpg',
//     descripcion:
//       'Súper crujiente cookie por fuera y cremosa Nocilla por dentro! y SIN ACEITE DE PALMA!-Cada paquete se compone de 6 galletas.-Alérgenos: Contiene trigo, mantequilla, soja, avellanas, huevo, leche. Conservar en lugar fresco, seco y alejado de los rayos solares.-Peso del producto:1.44 Kilogramos.-Dimensiones del producto: largo x ancho x alto	23.7 x 19.8 x 16.8 centímetros.-Peso del paquete: 1.77 Kilogramos',
//     precio: 2.99,
//     categoria: 'Alimentación',
//     popularity: 0,
//     tendencia: false,
//   },
// ]


//array for the shopping list:

var cartList = []
var cart = []

var subtotal = {}
