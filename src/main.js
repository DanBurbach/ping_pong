import "./styles.css";
// import { pingPong } from './journal';

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var vowels = 
    var consonants
      // var output = pingPong(goal);
    // output.forEach(function(element) {
    $('#solution').append("Title: " + title + "<p>" + body + "</p>");
    // });
  });
});
