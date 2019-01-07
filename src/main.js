import "./styles.css";
import { counter } from './journal';

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var vowels_consonants = counter(body);
      // var output = pingPong(goal);
    // output.forEach(function(element) {
    $('#solution').append("Title: " + title + "<p>" + body + "</p>" + "<p>" + vowels_consonants + "</p>");
    // });
  });
});
