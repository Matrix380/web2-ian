/*Ian Jardim de Lima Monteiro & 26211119*/
const formulario = document.getElementById("calcForm")

formulario.addEventListener("submit", function(e){
    e.preventDefault();/*impede que a página seja recarregada*/ 

    const a = Number(document.getElementById("numero1").value) || 0
    const b = Number(document.getElementById("numero2").value) || 0
    const c = Number(document.getElementById("numero3").value) || 0

    const result = a+b+c

    document.getElementById("resultado").textContent = result
})