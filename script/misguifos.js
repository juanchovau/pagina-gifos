if (localStorage.length > 0) {
    for (let i = 0; i < localStorage.length; i++) {
      let numberToGet = i;
      let getNumber = "img" + numberToGet;
      let myGifo = document.createElement("IMG");
      myGifo.style.margin = "5px";
      myGifo.style.width = "290px";
      myGifo.style.height = "290px";
      myGifo.src = localStorage.getItem(getNumber);
  
      console.log(myGifo.src);
      document.getElementById("myGuifosContainer").appendChild(myGifo);
    }
  }

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