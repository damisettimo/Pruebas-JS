//Contenedor productos y carrito

const contenedorProductos = document.getElementById('contenedor-productos')

const contenedorCarrito = document.getElementById('carrito-contenedor')

//Boton de Comprar
const botonComprar = document.getElementById ('comprar-carrito')
//Boton de vaciar carrito
const botonVaciar = document.getElementById('vaciar-carrito')
//Modiicando Los Contadores
const contadorCarrito = document.getElementById('contadorCarrito')

//Constantes de cantidad unitaria, total y precio
const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

let stockProductos = []
let carrito = []


document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
        
        
    }
})
//Boton Vaciar
botonVaciar.addEventListener('click', () => {
    
    
    carrito.length = 0
    Swal.fire({
        title: 'Estas seguro de que desea vaciar el carrito?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Si',
        denyButtonText: `No`,
      }).then((result) => {
        if (result.isConfirmed) {
            actualizarCarrito()
             Swal.fire('Carrito vacio!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Continua con tu compra', '', 'info')
        }
      })

    
     
})

botonComprar.addEventListener('click', () => {
    
    
    carrito.length = 0
    Swal.fire({
        title: 'Estas seguro de que deseas comprar el carrito?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Si',
        denyButtonText: `No`,
      }).then((result) => {
        if (result.isConfirmed) {
            actualizarCarrito()
             Swal.fire('Vamos a proceder al pago!Gracias por tu compra!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Continua con tu compra', '', 'info')
        }
      })

    
     
})

//Agregando etiquetas a HTML
fetch("./stock.json")
.then(response => response.json())
.then(function (stockJson) {
        stockJson.forEach((prod) => {
            const div = document.createElement('div');
            div.classList.add('producto');
            div.innerHTML = `
            <img src=${prod.img} alt= "">
            <h3>${prod.nombre}</h3>
            <p>${prod.desc}</p>
            <p>Contenido: ${prod.contenido}</p>
            <p class="precioProducto">Precio:$ ${prod.precio}</p>
            <button id="agregar${prod.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>

            `;

            stockProductos.push(prod)

            console.log (stockProductos)
            contenedorProductos.appendChild(div);

            let boton = document.getElementById(`agregar${prod.id}`);


            boton.addEventListener('click', () => {

                agregarAlCarrito(prod.id);
                Swal.fire({
                    title: 'Excelente!',
                    text: 'Producto agregado a carrito.',
                    imageUrl: './img/ok1.jpg',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                });

            });
        });
    });


//Agrego a carrito
const agregarAlCarrito = (prodId) => {

    //Para aumentar la cantidad y que no se repita.
    const existe = carrito.some (prod => prod.id === prodId) //comprobar si el elemento ya existe en el carro

    if (existe){ // Si ya esta en el carrito, actualizo la cantidad
        const prod = carrito.map (prod => { //crea un nuevo arreglo e itera sobre cada producto y cuando
            // map encuentre cual es el q igual al que está agregado, le suma la cantidad
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { //SE AGREGA EL PRODUCTO AL CARRITO En Caso de que no este, Agrego al carrito
        const item = stockProductos.find((prod) => prod.id === prodId)//Trabaja con las ID
        //Una vez obtenida la ID, hago un push para agregarlo al carrito
        carrito.push(item)
    }
    //Va a buscar el item, agregarlo al carrito y llama a la funcion actualizarCarrito, que recorre
    //el carrito y se ve.
    actualizarCarrito() //SE LLAMA A LA FUNCION QUE SE CREO CADA VEZ Q SE 
    //MODIFICA EL CARRITO
}
//agregarAlCarrito(1) //Se pasa el ID por parametro. 

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item) //Busca el elemento q se pasa y devuelve su indice.

    carrito.splice(indice, 1) //Se pasa el indice de elemento ITEM y borra
    // un elemento 
    actualizarCarrito() //LLAMA A LA FUNCION CADA VEZ Q SE 
    //MODIFICA EL CARRITO
    Swal.fire('El Producto seleccionado fue eliminado del carrito.')
    console.log(carrito)
}

const actualizarCarrito = () => {
    
    //LOS APPENDS SE VAN ACUMULANDO CON LO QUE HABIA ANTES
    contenedorCarrito.innerHTML = "" //Cada vez que llame a actualizarCarrito, lo primero q hace
    //es borrar el nodo. Y despues recorre el array lo actualiza de nuevo y lo rellena con la info
    //actualizada
    //Recorre sobre el array de carrito.

    //Por cada producto se crea un div con esta estructura y le hace un append al contenedorCarrito (el modal)
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.appendChild(div)
        
        localStorage.setItem('carrito', JSON.stringify(carrito))

    })
    
    contadorCarrito.innerText = carrito.length // actualiza la longitud del carrito.
    
    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
    //Por cada producto que recorre en el carrito, al acumulador le suma la propiedad precio, con el acumulador
    //empezando en 0.

}
