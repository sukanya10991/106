prediction1 = "";
prediction1 = "";

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 100
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function capture() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_img" src="' + data_uri + '"/>';
    });
}
console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/BmAevwXfZ/model.json', modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="The first prediction is"+prediction1;
    speak_data_2="The second prediction is"+prediction2;
    var utterThis= new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
}
