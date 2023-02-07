let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){                    //verifica se é um numero
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function inLista(n, l){                 //verifica se o numero ja esta na lista 
    if(l.indexOf(Number(n)) != -1){     // o indexof retorna -1 se o valor buscado no vetor nao for encontrado
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value , valores)){
        
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = num.value
        lista.appendChild(item)
        res.innerHTML =``
    }else{
        alert('valor invalido')
    }
    num.value = ''
    num.focus()
}
function verificar(){
    if (valores.length == 0){
        alert('add valores')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
       
        for(let pos in valores){

            soma += valores[pos]
           
            if(valores[pos] > maior)
               maior = valores[pos]
            
            if(valores[pos] < menor)
               menor = valores[pos]
            
        }
        media = soma / tot

        res.innerHTML ='' 
        res.innerHTML +=`<p>temos ao todo ${tot} numeros add</p>`
        res.innerHTML +=`<p>maior ${maior}</p>`
        res.innerHTML +=`<p>menor ${menor}</p>`
        res.innerHTML +=`<p>soma ${soma}</p>`
        res.innerHTML +=`<p>media ${media}</p>`
    }
}