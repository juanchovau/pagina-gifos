let gifosAlmacen = [];

function getStreamAndRecord() {
  document.getElementById("captura").style.display = "none";
  document.getElementById("captura2").style.display = "block";
  document.getElementById("primerosBotones").style.display = "block";
  document.getElementById("video").style.display = "block";
  document.getElementById("nuevosBotones").style.display = "none";
  document.getElementById("cajavideo").innerHTML = "";
  navigator.mediaDevices
    .getUserMedia({
      audio: false,

      video: {
        height: { max: 480 }
      }
    })
    .then(function(stream) {
      document.getElementById("video").srcObject = stream;

      document.getElementById("video").play();
    });
}

function grbar(stream) {
  recorder = RecordRTC(stream, {
    type: "video"
  });
}

var image = document.getElementById("video");

function captureCamera(callback) {
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(function(camera) {
      callback(camera);
    })
    .catch(function(error) {
      alert("Algo salio mal");
      console.error(error);
    });
}

function stopRecordingCallback() {
  //document.querySelector('h1').innerHTML = 'Se guardo: ' + bytesToSize(recorder.getBlob().size);

  let img1 = URL.createObjectURL(recorder.getBlob());
  let numeroParaAdignarLE = localStorage.length;
  let nombreParaAdignarLE = "gif" + numeroParaAdignarLE;
  let form = new FormData();
  form.append(nombreParaAdignarLE, recorder.getBlob(), "myGif.gif");
  //console.log(form.get(nombreParaAdignarLE))

  document.getElementById("segundosBotones").style.display = "none";
  document.getElementById("nuevosBotones").style.display = "block";
  document.getElementById("video").style.display = "none";
  let numberToGet = window.localStorage.length;
  let getNumber = "img" + numberToGet;

  let myGifo = document.createElement("IMG");
  myGifo.src = img1;
  myGifo.style.width = "98% ";
  myGifo.classList.add = "gifPrev";
  document.getElementById("cajavideo").appendChild(myGifo);

  document.getElementById("subirGifo").onclick = function() {
    this.disabled = true;
    // fetch(
    //   "https://upload.giphy.com/v1/gifs?api_key=eyWdbN1PQEckVgWNa49mXtqomVsAf8fv",
    //   {
    //     // headers: {
    //     //   "Content-Type": "application/gif"
    //     // },
    //     method: "POST",
    //     mode: "no-cors",
    //     referrerPolicy: 'no-referrer',
    //      credentials: 'same-origin',

    //     // body: recorder.getBlob(),
    //     body: form.get(nombreParaAdignarLE)
    //   }
    // )
    //   //.then(response => response) //.json())
    //   .then(data => {
    //     console.log("Success:", data);
    //     //document.getElementById("hola").src = data.url
    //   })
    //   .catch(error => {
    //     console.error("MyError:", error);
    //   });
    let myGifos = document.createElement("IMG");
    myGifos.style.margin = "5px";
    myGifos.style.width = "290px";
    myGifos.style.height = "290px";
    myGifos.src = img1;
    document.getElementById("myGuifosContainer").appendChild(myGifos);
    window.localStorage.setItem(getNumber, img1);

    //document.querySelector("#cajavideo img").style.width = "50%"; 
    document.getElementById("pantallafinal").style.display = "block";
    document.getElementById("pantallafinal").style.width = "50%";
    document.querySelector("#botonfinal").style.display = "block";
    document.getElementById("nuevosBotones").style.display = "none";
    let copied = document.querySelector("#cajavideo img").src
    document.getElementById("copiargif").onclick = function(){
      copied.execCommand('copy');
      console.log("hola")
    }
    
    
    document.getElementById("botonfinal").onclick = function() {
      document.getElementById("captura2").style.display = "none" ;
      document.getElementById("pantallafinal").style.display = "none" 
      document.getElementById("captura").style.display = "block" ; 
      document.querySelector("#botonfinal").style.display = "none";
    }
  
  };
}

var recorder; // globally accessible

document.getElementById("primerosBotones").onclick = function() {
  this.disabled = true;
  captureCamera(function(camera) {
    //document.querySelector('h1').innerHTML = 'esta por empezar';
    recorder = RecordRTC(camera, {
      type: "gif",
      frameRate: 1,
      quality: 10,
      width: 360,
      hidden: 240,
      onGifRecordingStarted: function() {
        document.getElementById("primerosBotones").style.display = "none";
        document.getElementById("nuevosBotones").style.display = "none";
        document.getElementById("segundosBotones").style.display = "block";
      },
      onGifPreview: function(gifURL) {
        // document.getElementById("video") .src = gifURL;
      }
    });

    recorder.startRecording();

    // release camera on stopRecording
    recorder.camera = camera;

    document.getElementById("primerosBotones").disabled = false;
  });
};

document.getElementById("segundosBotones").onclick = function() {
  this.disabled = true;
  recorder.stopRecording(stopRecordingCallback);
};

//convocar local storage

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
