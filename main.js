const formulario = document.getElementById("calcForm")

formulario.addEventListener("submit", function(e){
    e.preventDefault();/*impede que a página seja recarregada*/ 

    const a = Number(document.getElementById("numero1").value)
    const b = Number(document.getElementById("numero2").value)
    const c = Number(document.getElementById("numero3").value)

    const result = a+b+c

    document.getElementById("resultado").textContent = result
})