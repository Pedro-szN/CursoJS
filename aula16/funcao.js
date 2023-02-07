function parimpar(n){
    if(n%2 == 0){
        return 'par'
    }else{                //so pode ter um retorno por função
        return 'impar'
    }
}
let res = parimpar(7)//chamada da função || 7 sendo o parametro

console.log(res)//resultado