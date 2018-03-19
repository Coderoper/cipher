var sentence=prompt("Please enter a sentence.");
/*document.write(sentence);
document.write(sentence.length);*/



var firstMethod=function(sentence){
  var firstLetter=sentence.charAt(0).toUpperCase();
  var lastLetter=sentence.charAt(sentence.length-1).toUpperCase();

  var newString=firstLetter+lastLetter;

  //document.write(newString);
  return newString;
};

var letterSwitch=function(returnedLetters) {
  var switchString=returnedLetters.charAt(1) + returnedLetters.charAt(0);

  //document.write(switchString);
  return switchString;
};

var thirdFunction=function(sentence){
  document.write(sentence+switchedLetters);
};

var fourthFunction=function(sentence){
  var midLetter=sentence.charAt((sentence.length)/2);
  document.write(midLetter);
}

var returnedLetters=firstMethod(sentence);
var switchedLetters=letterSwitch(returnedLetters);

//document.write("first method" +returnedLetters+"\n Second method" +switchedLetters);

fourthFunction(sentence);
thirdFunction(sentence);
