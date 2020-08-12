var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')
var listElement = document.querySelector('#app ul')


function user(){
    var userElement = inputElement.value;
    console.log("Usuario introduzido:", userElement);
    inputElement.value = "";
    repositorio(userElement)
}

function repositorio(userElement){
    axios.get('https://api.github.com/users/'+userElement+'/repos')
    .then(function(response){
        for (rep of response.data){
            geraLista(rep.name)
        }
        
    })
    .catch(function(error){
        console.log("link errado");
    })
}
    

function geraLista(rep){
    var repElement = document.createElement('li');
    var textRep = document.createTextNode(rep);
    
    repElement.appendChild(textRep);
    listElement.appendChild(repElement);
}