var sentence=prompt("Please enter a sentence.");
/*document.write(sentence);
document.write(sentence.length);*/



var firstMethod=function(sentence){
  var firstLetter=sentence.charAt(0).toUpperCase();
  var lastLetter=sentence.charAt(sentence.length-1).toUpperCase();

  var newString=firstLetter+lastLetter;

  document.write(newString);
}

firstMethod(sentence);
