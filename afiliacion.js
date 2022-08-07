
//Operador Ternario pregunta si es mayor de edad para registrar formulario de adhesion

let edad = parseInt(prompt("por favor ingresa tu edad para registrarte, debes ser mayor a 18 "))

edad > 18 ? Swal.fire(
  'Eres Mayor!',
  'puedes continuar',
  'success'
) : Swal.fire(
  'Eres menor!',
  'lo sentimos no puedes continuar',
  'error'
)
// Desafio incorporando eventos//

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("registro").addEventListener('submit', validacionFormulario); 
  });
  
  function validacionFormulario(evento) {
    evento.preventDefault();
    let nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
      alert('Completa este campo');
      return;
    }
    let apellido = document.getElementById('apellido').value;
    if(apellido.length == 0) {
      alert('Completa este campo');
      return;
    }
    let clave = document.getElementById('clave').value;
    if (clave.length < 6) {
      alert('Completa este campo');
      return;
    }
    let email = document.getElementById('email').value;
    if(!email.includes ("@") && email.includes (".")  ) {
      alert('Ingrese un correo valido con @ y . ');
      return;
    }
    let direccion = document.getElementById('direccion').value;
    if(direccion.length == 0) {
      alert('Completa este campo');
      return;
    }
    let provincia = document.getElementById('provincia').value;
    if(provincia.length == 0) {
      alert('Completa este campo');
      return;
    }
    let ciudad = document.getElementById('ciudad').value;
    if(ciudad.length == 0) {
      alert('Completa este campo');
      return;
    }
    
    
    
    this.submit();//Completando suscripcion deriva a ventana de SweetAlert
    Swal.fire({
      title: 'Gracias por confiar en nosotros!',
      text: 'Ya eres parte de Megafit',
      imageUrl: './img/aplauso.jpg',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      timer: 3000
  })


  
  }
  
 
