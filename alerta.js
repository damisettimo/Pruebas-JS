//aviso de ir a seccion de la pagina
let redirigiendo = document.getElementById("alerta");

    redirigiendo.addEventListener("click", () => {
    Toastify({
        text: "Ya vamos para alla!",
        duration: 3000,
        style: {
        background: "red",
        },
    }).showToast();
    }); 


    //* //auspicio para ir a visitar la pagina

// let publicidad = document.getElementById("publicidad");
// publicidad.addEventListener("click", () => {
//     Toastify({
//       text: "Click aquí para ir a Star!",
//       duration: 3000,
//       destination: "http://starnutrition.com.ar/index.html",
//     }).showToast();
//   }); 