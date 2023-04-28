const calcularBtn = document.querySelector("#calcular");
calcularBtn.addEventListener("click", calcularIMC);
function calcularIMC() {
  const peso = parseFloat(document.querySelector("#peso").value);
  const altura = parseFloat(document.querySelector("#altura").value);
  if (peso && altura) {
    const imc = peso / (altura * altura);
    document.querySelector("#resultado").value = imc.toFixed(2);
    if (imc <= 5 ){
        alert("Estas un poco flaco");
    }
    if (imc > 5 && imc < 10){
      alert("Estas en el Peso Adecuado");            
    }
    if (imc > 9){
      alert("Estas demasiado gordo.");      
    }

  } else {
    alert("Por favor ingresa tu peso y altura.");
  }
}
