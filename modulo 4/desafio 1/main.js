var buttonElement = document.querySelector('#app button');
var inputElement = document.querySelector('#app input');


function idade(){
    var idadeElement = inputElement.value;
    console.log("Idade recebida:", idadeElement);
    inputElement.value = "";
    maior(idadeElement).then(function(isMaior){
        console.log(isMaior);
    }).catch(function(naoNasceu){
        console.error("O erro ocorreu:", naoNasceu.erro, "com o codigo:", naoNasceu.codigo);
    });
}


function maior(idadeElement) {
    return new Promise(function (resolve, reject) {
        setTimeout(function(){
            if (idadeElement < 0){
                reject({erro:'ta no utero', codigo: 404})
            }
            if (idadeElement >= 18) {
                resolve('e de maior');
            }
            else {
                resolve('e de menor');
            }
       }, 2000)
    });
}

