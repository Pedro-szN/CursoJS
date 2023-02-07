function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById("imagem")
    var data = new Date()
    var h = data.getHours()
 
    msg.innerHTML = `Agora sao ${h} horas`
    if(h >= 0 && h < 12){
        img.src = 'manha.png'
        document.body.style.backgroundColor = 'grey'
    }else if(h >= 12 && h < 18){
        img.src = 'tarde.png'
        document.body.style.backgroundColor = 'orange'
    }else{
        img.src = 'noite.png'
        document.body.style.backgroundColor = 'black'
    }
}