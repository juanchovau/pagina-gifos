//Inicio función cambio de tema

let subboton1 = document.getElementById("subboton1");
let subboton2 = document.getElementById("subboton2");
function dark() {
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

function ligth() {
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

function mostrarSubMenu() {
  subboton1.style.display = "block";
  subboton2.style.display = "block";
}
//Final función cambio de tema

//Inicio barra de busqueda
let palabras2;

function btnsBusqueda(){ 
  document.getElementById("lienzoBusqueda").innerHTML = ""
  if(sessionStorage.length <= 7 && sessionStorage.length != 0 ){
    
    for(let i= 0; i < sessionStorage.length; i++){
      let btn = document.createElement("BUTTON");
      btn.style.margin = "5px";
      btn.style.width = "auto";
      btn.style.padding = "3px";
      btn.style.backgroundColor = "#4180f6";
      btn.style.color = "white";
      btn.value = sessionStorage[ "busqueda" + i];
      btn.innerHTML = sessionStorage["busqueda" + i];
      btn.onclick = function(){
        buscarGifs(btn.value)
      }
      
      document.getElementById("lienzoBusqueda").appendChild(btn)
    }
  }
  if(sessionStorage.length > 8){

    for(let i= sessionStorage.length - 7; i < 7; i++){
      let btn = document.createElement("BUTTON");
      btn.style.margin = "5px";
      btn.style.width = "auto";
      btn.style.padding = "5px";
      btn.style.color = "white";
      btn.style.backgroundColor = "#4180f6"
      btn.style.value = sessionStorage[ "busqueda" + i];
      btn.innerHTML = sessionStorage["busqueda" + i];
      btn.onclick = function(){
        buscarGifs(btn.value)
      }
      document.getElementById("lienzoBusqueda").appendChild(btn)
    }

  }
}

  function buscarGifs(criterio) {
   
      fetch(
        "https://api.giphy.com/v1/gifs/search?api_key=eyWdbN1PQEckVgWNa49mXtqomVsAf8fv&q=" +
          criterio +
          "&limit=25&offset=0&rating=G&lang=en"
      )
        .then(response => {
          
          window.sessionStorage.setItem( "busqueda" + sessionStorage.length ,  criterio)
         console.log(sessionStorage)
          return response.json();
        })
        .then(json => {
          for (let i = 0; i < 25; i++){ 
           
            let palabras = json.data[i].title.split(" GIF");
            palabras2 = palabras[0].split(" ");
          
          let data1 = json.data[i].images.downsized.url
        
        
          let hijosDeBusqueda = document.getElementById("tendencias")
            .childNodes;

          if (hijosDeBusqueda.length > 23) {
            document.getElementById("tendencias").innerHTML = "";
            document.getElementById("tendenciasholder").placeholder = " " + criterio + ":"
          } else {
            let img1 = document.createElement("DIV");
            img1.style.margin = "5px ";
            img1.style.width = "290px";
            img1.style.height = "290px";
            img1.style.backgroundImage = "url(" + data1 + ")"
            document.getElementById("tendencias").appendChild(img1);
            img1.className = "casillarecomendacion";
            img1.id = " #" +palabras2[0] + " #" +palabras2[1] + " #"+palabras2[2];
          }
          
      
        }
        btnsBusqueda()
    });
   
  }

  btnsBusqueda();

 document.getElementById("buscar").onclick = function(){
  buscarGifs(document.getElementById("criterioDeBusqueda").value);
  document.getElementById("lienzoRecomendaciones").style.display = "none";
  document.getElementById("criterioDeBusqueda").value = "";
 }
 
 



//Final barra de busqueda

//Inicio de peticion apis para casillas

fetch(
  "https://api.giphy.com/v1/gifs/search?api_key=eyWdbN1PQEckVgWNa49mXtqomVsAf8fv&q=jonathan vanness&limit=25&offset=0&rating=G&lang=en"
)
  .then(response => {
    return response.json();
  })
  .then(json => {
    return json.data[0].images.downsized.url;
  })
  .then(data1 => {
    document.getElementById("casilla1").src = data1;
  });

fetch(
  "https://api.giphy.com/v1/gifs/search?api_key=eyWdbN1PQEckVgWNa49mXtqomVsAf8fv&q=Sailor Mercury&limit=25&offset=0&rating=G&lang=en"
)
  .then(response => {
    return response.json();
  })
  .then(json => {
    return json.data[0].images.downsized.url;
  })
  .then(data1 => {
    document.getElementById("casilla2").src = data1;
  });

fetch(
  "https://api.giphy.com/v1/gifs/search?api_key=eyWdbN1PQEckVgWNa49mXtqomVsAf8fv&q=Fav Five&limit=25&offset=0&rating=G&lang=en"
)
  .then(response => {
    return response.json();
  })
  .then(json => {
    return json.data[0].images.downsized.url;
  })
  .then(data1 => {
    document.getElementById("casilla3").src = data1;
  });

fetch(
  "https://api.giphy.com/v1/gifs/search?api_key=eyWdbN1PQEckVgWNa49mXtqomVsAf8fv&q=Unicors&limit=25&offset=0&rating=G&lang=en"
)
  .then(response => {
    return response.json();
  })
  .then(json => {
    return json.data[0].images.downsized.url;
  })
  .then(data1 => {
    document.getElementById("casilla4").src = data1;
  });

  if(sessionStorage["IsThisFirstTime_Log_From_LiveServer"]){
    window.sessionStorage.removeItem("IsThisFirstTime_Log_From_LiveServer")
  }
//Final de peticion apis para casillas
//Inicio display tendencias


  fetch(
    "https://api.giphy.com/v1/gifs/trending?api_key=eyWdbN1PQEckVgWNa49mXtqomVsAf8fv&limit=25&rating=G"
  )
    .then(response => {
      return response.json();
    })
    .then(json => {
      for (let i = 0; i < 24; i++) {
      let palabras = json.data[i].title.split(" GIF");
       palabras2 = palabras[0].split(" ");
      let data1 = json.data[i].images.downsized.url;
    
    
      var img1 = document.createElement("DIV");
      img1.style.margin = "5px";
      img1.style.width = "290px";
      img1.style.height = "290px";
      img1.style.backgroundImage = "url(" + data1 + ")"
      
      document.getElementById("tendencias").appendChild(img1); 
      img1.className = "casillarecomendacion";
      img1.id = "#" +palabras2[0] + " #" +palabras2[1] + " #"+palabras2[2];
    } });


//Finaldisplay tendencias
//inicio recomedaciones

let recomendacionBusqueda = document.getElementById("criterioDeBusqueda");

recomendacionBusqueda.addEventListener("keyup", () => {
  let criterio = recomendacionBusqueda.value;
  document.getElementById("lienzoRecomendaciones").style.display = "block";
  fetch(
    "https://api.giphy.com/v1/gifs/search?api_key=eyWdbN1PQEckVgWNa49mXtqomVsAf8fv&q=" +
      criterio +
      "&limit=25&offset=0&rating=G&lang=en"
  )
    .then(response => {
      return response.json();
    })
    .then(json => {
      
      document.getElementById("lienzoRecomendaciones").innerHTML = "";
      let palabras = json.data[0].title.split(" GIF");
      return palabras[0].split(" ");
    })
    .then(recomendaciones => {
      recomendaciones.forEach(element => {
        let recomendacion = document.createElement("BUTTON");
        recomendacion.style.width = "87%";
        recomendacion.style.padding = "2px";
        recomendacion.style.margin = "10px";
        recomendacion.style.backgroundColor = "#F0F0F0 ";
        recomendacion.style.border = "gray solid 2px;";
        recomendacion.style.boxShadow = "0px 1px 2px #B4B4B4 ";
        recomendacion.style.fontSize = "16px"
        recomendacion.style.paddingRight = "70%"
        recomendacion.innerHTML = element;
        document.getElementById("lienzoRecomendaciones").appendChild(recomendacion);
        recomendacion.onclick = function (){
          buscarGifs(element);
          document.getElementById("lienzoRecomendaciones").style.display = "none";
        }
      });
    });
});
