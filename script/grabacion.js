function getStreamAndRecord () { 

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

/*var recorder = new GifRecorder(mediaStream || canvas || context, { onGifPreview: function, onGifRecordingStarted: function, width: 1280, height: 720, frameRate: 200, quality: 10 });
recorder.record();
recorder.stop(function(blob) {
    document.getElementById("miguifo") .src = URL.createObjectURL(blob);
});*/


    
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
    recorder.camera.stop();
    recorder.destroy();
    recorder = null;
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
                document.querySelector('h1').innerHTML = 'Gif recording started.';
            },
            onGifPreview: function(gifURL) {
               // document.getElementById("video") .src = gifURL;
                
            }
        });

        recorder.startRecording();

        // release camera on stopRecording
        recorder.camera = camera;

        document.getElementById('botoncamara').disabled = false;
 
    });
};

document.getElementById('botoncamara').onclick = function(){
    this.disabled = true;
    recorder.stopRecording(stopRecordingCallback);
};