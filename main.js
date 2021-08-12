prediction_1 = "";
prediction_2 = "";

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
    speak_data_1="The first prediction is"+prediction_1;
    speak_data_2="The second prediction is"+prediction_2;
    var utterThis= new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
}
function predict(){
    img=document.getElementById('captured_image');
    classifier.classify(img , gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("prediction1").innerHTML=results[0].label;
        document.getElementById("prediction2").innerHTML=results[1].label;
        prediction_1=results[0].label;
        prediction_2=results[1].label;
        speak();
        if(results[0].label=="Thumbs up"){
            document.getElementById("update_emoji").innerHTML= "Thumbs up";
        }
        if(results[0].label=="Thumbs down"){
            document.getElementById("update_emoji").innerHTML= "Thumbs down";
        }
        if(results[0].label=="Live long and prosoper"){
            document.getElementById("update_emoji").innerHTML= "Live long and prosper";
        }
        if(results[0].label=="Saranghaeyo"){
            document.getElementById("update_emoji").innerHTML= "Sranghaeyo";
        }
        if(results[0].label=="What do you want"){
            document.getElementById("update_emoji").innerHTML= "What do you want";
        }
        if(results[0].label=="Rock and roll"){
            document.getElementById("update_emoji").innerHTML= "Rock and roll";
        }
        if(results[0].label=="Perfect"){
            document.getElementById("update_emoji").innerHTML= "Perfect";
        }
        if(results[0].label=="Peace out"){
            document.getElementById("update_emoji2").innerHTML= "Peace out";
        }
        if(results[0].label=="Top"){
            document.getElementById("update_emoji2").innerHTML= "Top";
        }
        if(results[0].label=="Down"){
            document.getElementById("update_emoji2").innerHTML= "Down";
        }
        if(results[0].label=="Left"){
            document.getElementById("update_emoji2").innerHTML= "Left";
        }
        if(results[0].label=="Right"){
            document.getElementById("update_emoji2").innerHTML= "Right";
        }
        if(results[1].label=="Thumbs up"){
            document.getElementById("update_emoji").innerHTML= "Thumbs up";
        }
        if(results[1].label=="Thumbs down"){
            document.getElementById("update_emoji").innerHTML= "Thumbs down";
        }
        if(results[1].label=="Live long and prosoper"){
            document.getElementById("update_emoji").innerHTML= "Live long and prosper";
        }
        if(results[1].label=="Saranghaeyo"){
            document.getElementById("update_emoji").innerHTML= "Sranghaeyo";
        }
        if(results[1].label=="What do you want"){
            document.getElementById("update_emoji").innerHTML= "What do you want";
        }
        if(results[1].label=="Rock and roll"){
            document.getElementById("update_emoji").innerHTML= "Rock and roll";
        }
        if(results[1].label=="Perfect"){
            document.getElementById("update_emoji").innerHTML= "Perfect";
        }
        if(results[1].label=="Peace out"){
            document.getElementById("update_emoji2").innerHTML= "Peace out";
        }
        if(results[1].label=="Top"){
            document.getElementById("update_emoji2").innerHTML= "Top";
        }
        if(results[1].label=="Down"){
            document.getElementById("update_emoji2").innerHTML= "Down";
        }
        if(results[1].label=="Left"){
            document.getElementById("update_emoji2").innerHTML= "Left";
        }
        if(results[1].label=="Right"){
            document.getElementById("update_emoji2").innerHTML= "Right";
        }
    }
    
}