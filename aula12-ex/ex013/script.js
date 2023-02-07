function idade(){
//pegando o ano do sistema
    var data = new Date()
    var ano = data.getFullYear()
//variaveis para manipulação da div e imagens 
    var res = document.getElementById('res')
    
//convertendo o formulario
    var fano = document.getElementById('txtano')
   

    if(fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var i = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero ='Homem'
            if(i >0 && i <=12 ){
                img.setAttribute('src','menino.png')
            }else if(i <=50){
                img.setAttribute('src','homen.png')
            }else if(i >=51){
                img.setAttribute('src','velho.png')
            }
        }else if(fsex[1].checked){
            genero = 'mulher'
            if(i >0 && i <=12 ){
                img.setAttribute('src','menina.png')
            }else if(i <=50){
                img.setAttribute('src','mulher.png')
            }else if(i >=51){
                img.setAttribute('src','velha.png')
            }
        }
        res.style.textAlign='center'
        res.innerHTML = `<p> ${i} ${genero}</p>`
        res.appendChild(img)
    }
       
    
}