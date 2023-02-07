function calcular(){
    var num = document.getElementById('n')
    var res = document.getElementById('res')
    res.innerHTML=''
    if(num.value.length == 0){
        alert('digite um nimero')
    }else{
        var n = Number(num.value)
        for(var c = 0; c <= 10 ; c++ ){
            var m = n * c;
            res.innerHTML += ` <ul>${n} x ${c} = ${m}</ul>`
        }
    }   
}
//document.createElement('')