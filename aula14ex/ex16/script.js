function contar(){
   
    var n1 = document.getElementById('ni')
    var n2 = document.getElementById('nf')
    var n3 = document.getElementById('np')
    var ni = Number(n1.value)
    var nf = Number(n2.value)
    var np = Number(n3.value)
    var res = document.getElementById('res')

    res.innerHTML=''

    if(n1.value.length == 0 || n2.value.length == 0 || n3.value.length == 0 || np<=0){
        alert('[erro] Faltam dados')
    }else{
        if(n1 < nf){
            for(var n = ni; n <= nf ; n = n + np){
                res.innerHTML += ` ${n} `
            } 
        }else{
            for(var n = ni; n >= nf ; n = n - np){
                res.innerHTML += ` ${n} `
            }
        }
    }
    
    /*if(ni <= 0 || np <= 0){
      res.innerHTML ='[ERRO]'
    }else{
       
    }*/
   
    
}