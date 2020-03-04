function getStreamAndRecord () { 

    document.getElementById("captura").style.display = "none";
    document.getElementById("captura2").style.display = "block";
    document.getElementById("primerosBotones").style.display = "block";
    document.getElementById("nuevosBotones").style.display = "none";
    navigator.mediaDevices.getUserMedia({
    
    audio: false,
    
    video: {
    
    height: { max: 480 }
    
    }
    
    })
  .then(function(stream) {

  
    
    document.getElementById("video").srcObject = stream;
    
    document.getElementById("video").play()
    
    })
}

function grbar(stream) {
     recorder = RecordRTC(stream, {
        type: 'video'
    });}

    
var image = document.getElementById("video");

function captureCamera(callback) {
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(camera) {
        callback(camera);
    }).catch(function(error) {
        alert('Algo salio mal');
        console.error(error);
    });
}

function stopRecordingCallback() {
    //document.querySelector('h1').innerHTML = 'Se guardo: ' + bytesToSize(recorder.getBlob().size);
    image = URL.createObjectURL(recorder.getBlob())
    
    console.log(image)
   let numeroParaAdignarLE = window.localStorage.length ;
   let nombreParaAdignarLE =  "img" + numeroParaAdignarLE;
   window.localStorage.setItem(nombreParaAdignarLE, image);
    
  
       document.getElementById("segundosBotones").style.display = "none";
       document.getElementById("nuevosBotones").style.display = "block";
       let numberToGet = window.localStorage.length - 1 ;
       let getNumber = "img" + numberToGet;
       let myGifo = document.createElement("IMG"); 
       myGifo.style.margin = "5px" 
       myGifo.style.width = "290px" 
       myGifo.style.height = "290px" 
       myGifo.src =  localStorage.getItem(getNumber);              
       document.getElementById("myGuifosContainer").appendChild(myGifo);
       console.log(myGifo.src)
   

    //recorder.camera.stop();
    //recorder.destroy();
    //recorder = null;
    
}

var recorder; // globally accessible



document.getElementById('primerosBotones').onclick = function() {
    this.disabled = true;
    captureCamera(function(camera) {
        //document.querySelector('h1').innerHTML = 'esta por empezar';
        recorder = RecordRTC(camera, {
            type: 'gif',
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

        document.getElementById('primerosBotones').disabled = false;
 
    });
};

document.getElementById("segundosBotones").onclick = function(){
    this.disabled = true;
    recorder.stopRecording(stopRecordingCallback);
 
    
};



//convocar local storage


if(localStorage.length > 0){

 for(let i = 0; i < localStorage.length; i++ ){

    let numberToGet = i ;
    let getNumber = "img" + numberToGet;
    let myGifo = document.createElement("IMG"); 
    myGifo.style.margin = "5px" 
    myGifo.style.width = "290px" 
    myGifo.style.height = "290px" 
    myGifo.src =  localStorage.getItem(getNumber);               
    document.getElementById("myGuifosContainer").appendChild(myGifo);
    console.log(myGifo.src)
 }
}