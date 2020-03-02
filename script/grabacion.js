function getStreamAndRecord () { 

    document.getElementById("captura").style.display = "none";
    document.getElementById("captura2").style.display = "block";
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
    let recorder = RecordRTC(stream, {
        type: 'video'
    });}

    
var image = document.getElementById("miguifos");

function captureCamera(callback) {
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(camera) {
        callback(camera);
    }).catch(function(error) {
        alert('Unable to capture your camera. Please check console logs.');
        console.error(error);
    });
}

function stopRecordingCallback() {
    document.querySelector('h1').innerHTML = 'Gif recording stopped: ' + bytesToSize(recorder.getBlob().size);
    image.src = URL.createObjectURL(recorder.getBlob());
    window.localStorage.setItem("img", image.src);

    //recorder.camera.stop();
    //recorder.destroy();
    //recorder = null;
}

var recorder; // globally accessible

document.getElementById('capturar').onclick = function() {
    this.disabled = true;
    captureCamera(function(camera) {
        document.querySelector('h1').innerHTML = 'Waiting for Gif Recorder to start...';
        recorder = RecordRTC(camera, {
            type: 'gif',
            frameRate: 1,
            quality: 10,
            width: 360,
            hidden: 240,
            onGifRecordingStarted: function() {
                
                document.getElementById("botonparar").style.display = "block";
                document.getElementById("botonparar2").style.display = "block";
                //document.getElementById("contador").style.display = "block";
                document.getElementById("botoncamara").style.display = "none";
                document.getElementById("capturar").style.display = "none";
                
            },
            onGifPreview: function(gifURL) {
                //document.getElementById("video") .src = gifURL;
                
            }
        });

        recorder.startRecording();

        // release camera on stopRecording
        recorder.camera = camera;

        document.getElementById('botonparar').disabled = false;
        document.getElementById('botonparar2').disabled = false;
 
    });
};

document.getElementById('botoncamara').onclick = function() {
    this.disabled = true;
    captureCamera(function(camera) {
        document.querySelector('h1').innerHTML = 'Waiting for Gif Recorder to start...';
        recorder = RecordRTC(camera, {
            type: 'gif',
            frameRate: 1,
            quality: 10,
            width: 360,
            hidden: 240,
            onGifRecordingStarted: function() {
                
            },
            onGifPreview: function(gifURL) {
               
               // document.getElementById("video") .src = gifURL;
                
            }
        });

        recorder.startRecording();

        // release camera on stopRecording
        recorder.camera = camera;

        document.getElementById('botonparar').disabled = false;
 
    });
};

document.getElementById('botonparar').onclick = function(){
    this.disabled = true;
    recorder.stopRecording(stopRecordingCallback);
};

//convocar local storage

 let tst = document.getElementById("miguifo");
 tst.src = window.localStorage.getItem("img");