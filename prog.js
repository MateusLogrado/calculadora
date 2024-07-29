let res = document.getElementById("res")
let gravar = []
let resposta = []

function gravarValores(){
    let valor1 = Number(document.getElementById("valor1").value)
    let valor2 = Number(document.getElementById("valor2").value)

    gravar[0] = valor1
    gravar[1] = valor2
    console.table(gravar)

}

function somar(){
    resposta[0] = gravar[0] + gravar[1]
    res.innerHTML = "Somar = " + resposta[0]
}

    function diminuir(){
    resposta[0] = gravar[0] - gravar[1]
    res.innerHTML = "Diminuir = " + resposta[0]
}

function dividir(){
    resposta[0] = gravar[0] / gravar[1]
    res.innerHTML = "Divisão = " + resposta[0]
}

function multiplicar(){
    resposta[0] = gravar[0] * gravar[1]
    res.innerHTML = "Multiplicação = " + resposta[0]
}