//Inicio función cambio de tema


let subboton1 = document.getElementById("subboton1");
let subboton2 = document.getElementById("subboton2")
function dark(){
    document.getElementById("ligthlogo").className = "erase";
    document.getElementById("darklogo").className = "show";
    document.getElementById("body").className = "darkmode";
    document.getElementById("subboton1").className = "botonclaro";
    document.getElementById("subboton2").className = "botonclaro";
    document.getElementById("botonflecha").className = "botonclaro";
    document.getElementById("botoncrear").className = "botonclaro";
    document.getElementById("boton1").className = "botonclaro";
    document.getElementById("misguifos").style.color = "white";
    subboton1.style.display = "none";
    subboton2.style.display = "none";
}

function ligth(){
    document.getElementById("ligthlogo").className = "show";
    document.getElementById("darklogo").className = "erase";
    document.getElementById("body").className = "ligthmode";
    document.getElementById("subboton1").className = "botonrosa";
    document.getElementById("subboton2").className = "botonrosa";
    document.getElementById("botonflecha").className = "botonrosa";
    document.getElementById("botoncrear").className = "botonrosa";
    document.getElementById("boton1").className = "botonrosa";
    subboton1.style.display = "none";
    subboton2.style.display = "none";
    document.getElementById("misguifos").style.color = "#110038";
}

function mostrarSubMenu(){
   
    subboton1.style.display = "block";
    subboton2.style.display = "block";

}
//Final función cambio de tema

//Inicio barra de busqueda

function buscarGifs(){

let criterioDeBusqueda = document.getElementById("criterioDeBusqueda").value;

function establecerCriterio (criterio){
    for (let i = 0; i < 24; i++){
    
        fetch("https://api.giphy.com/v1/gifs/search?api_key=eyWdbN1PQEckVgWNa49mXtqomVsAf8fv&q=" + criterio + "&limit=25&offset=0&rating=G&lang=en")
        .then( (response) => { 
            return response.json();
        })
        .then( (json) => {
    
            return json.data[i].images.downsized.url
    
        })
        .then((data1) => {
          

            
            let hijosDeBusqueda = document.getElementById("lienzoBusqueda").childNodes;  
            
            if(hijosDeBusqueda.length > 23){

                hijosDeBusqueda[i].src = data1;
            }else{
                var img1 = document.createElement("IMG"); 
                img1.style.margin = "5px" 
                img1.style.width = "290px" 
                img1.style.height = "290px" 
                img1.src = data1  
                document.getElementById("lienzoBusqueda").appendChild(img1); 

            }
            
    
        })
     }
}

establecerCriterio(criterioDeBusqueda);

}

//Final barra de busqueda

//Inicio de peticion apis para casillas

fetch("https://api.giphy.com/v1/gifs/search?api_key=eyWdbN1PQEckVgWNa49mXtqomVsAf8fv&q=jonathan vanness&limit=25&offset=0&rating=G&lang=en")
    .then( (response) => { 
        return response.json();
    })
    .then( (json) => {

        return json.data[0].images.downsized.url
    })
    .then((data1) => {
       
        document.getElementById("casilla1").src = data1  

    })


    fetch("https://api.giphy.com/v1/gifs/search?api_key=eyWdbN1PQEckVgWNa49mXtqomVsAf8fv&q=Sailor Mercury&limit=25&offset=0&rating=G&lang=en")
    .then( (response) => { 
        return response.json();
    })
    .then( (json) => {

        return json.data[0].images.downsized.url
    })
    .then((data1) => {
      
        document.getElementById("casilla2").src = data1  

    })


    fetch("https://api.giphy.com/v1/gifs/search?api_key=eyWdbN1PQEckVgWNa49mXtqomVsAf8fv&q=Fav Five&limit=25&offset=0&rating=G&lang=en")
    .then( (response) => { 
        return response.json();
    })
    .then( (json) => {

        return json.data[0].images.downsized.url
    })
    .then((data1) => {
        
        document.getElementById("casilla3").src = data1  

    })


    fetch("https://api.giphy.com/v1/gifs/search?api_key=eyWdbN1PQEckVgWNa49mXtqomVsAf8fv&q=Unicors&limit=25&offset=0&rating=G&lang=en")
    .then( (response) => { 
        return response.json();
    })
    .then( (json) => {

        return json.data[0].images.downsized.url
    })
    .then((data1) => {

        document.getElementById("casilla4").src = data1  

    })
//Final de peticion apis para casillas 
//Inicio display tendencias



for (let i = 0; i < 24; i++){
    
    fetch("https://api.giphy.com/v1/gifs/trending?api_key=eyWdbN1PQEckVgWNa49mXtqomVsAf8fv&limit=25&rating=G")
    .then( (response) => { 
        return response.json();
    })
    .then( (json) => {

        return json.data[i].images.downsized.url

    })
    .then((data1) => {
      
        var img1 = document.createElement("IMG"); 
        img1.style.margin = "5px" 
        img1.style.width = "290px" 
        img1.style.height = "290px" 
        img1.src = data1                  
        document.getElementById("tendencias").appendChild(img1);               // Append <button> to <body>

    })


}

//Finaldisplay tendencias







