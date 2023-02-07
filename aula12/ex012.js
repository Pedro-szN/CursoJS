var a =  new Date()
var h = a.getHours()
console.log(`acora sao ${h} horas`)
if(h < 12 ){
    console.log('bom dia')
}else if(h <= 18){
    console.log('boa tarde')
}else {
    console.log("boa noite")
}