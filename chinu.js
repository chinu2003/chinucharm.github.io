const stopBtn = document.getElementById("backBtn");
const startBtn = document.getElementById("stopBtn");
var i = 0;
var txt1 =
  "Hi Love......!  <<               Now I wan't to say something special to you. <<<                So , Please read everything carefully...!                                                                           > When I saw you for the first time < You seems something Special to me.  <<                  As the days goes < you get closer to me....! <<                           I don't know the reason why your thoughts always resonates inside my mind...!                                                     > Everything about you is always intresting for me...!                     << I am somewhat nervous Because I haven't said these words to anyone and I won't say to anyone in future...!                                                     > I Love my Parents so much than anything else in this world....!                    << Now You are the only person  whom I love equally with my parents....!                                                             >I Love U <SweetHeart......! |                  <<<< Give me One chance to Prove my Love ...!   by untoldcoding";
var speed = 55;
var audio;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// document.querySelectorAll("#text1").addEventListener(music());
var audio = new Audio("./img/love.mp3");
function music() {
  // alert("working");
  audio.play();
  stopBtn.classList.add("hidden");
  stopBtn.disabled = true;
  startBtn.disabled = false;
  startBtn.classList.remove("hidden");
}
// function stop() {
//   if (audio) {
//     audio.pause().catch(function(error) {
//       console.error("Error playing audio:", error);
//   });; // Pause the audio
//     audio.currentTime = 0; // Reset playback position to the start
//     stopBtn.disabled = false;
//     startBtn.disabled = true;
//     console.log('click');

//   }
// }
function stop() {
  console.log("click");
  audio.pause();
  stopBtn.classList.remove("hidden");
  stopBtn.disabled = false;
  startBtn.disabled = true;
  startBtn.classList.add("hidden");
}
