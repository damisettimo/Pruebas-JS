//Calculadora de Indice de Masa Corporal e Indicador de grado //

const btncalcular = document.getElementById('calcular')

btncalcular.addEventListener('click', () => {

  var altura = document.getElementById("altura").value / 100;
    var peso = document.getElementById("peso").value;
  
    var imc = peso / altura ** 2;
      Swal.fire('Su IMC ES:' + imc, '', 'info')
    var text=""
    if (imc < 18.5) {
      text="Usted está con IMC magro"
    } else if (imc < 24.9) {
      text="Usted está con un IMC normal"
    } else if (imc < 29.9) {
      text="Usted tiene un IMC con sobrepeso"
    } else if (imc < 39.9) {
      text="Usted tiene un IMC con obesidad"
    } else if (imc > 39.9) {
      text="Usted tiene un IMC con obesidad mórbida"
    }
    document.getElementById("text_area").innerText=text
  
   
})



