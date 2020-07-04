var helloSpeaker={};
var speakWord = "Hello";
helloSpeaker.speak = function speak(name) {
  console.log(speakWord + " " + name);
}

var byeSpeaker={};
var speakWord2 = "Good Bye";
byeSpeaker.speak = function speak(name) {
  console.log(speakWord2 + " " + name);
}
