var count= [];
var vowels= ["a", "e", "i", "o", "u"];

var counter = function(sentence){
  for(i = 0; i < sentence.length; i++){
    for(v = 0; v < vowels.length; v++){
      if(vowels[v] === sentence[i]){
        count++;
      }
    }
  }
};

$(document).ready(function() {
  $('#form').submit(function(event) {
    event.preventDefault();
    var userInput = $('#input').val();
    var sentence = userInput.toLowerCase();
    counter(sentence)
      $(".result").append("<p>" + count + "</p>");

  });
});
