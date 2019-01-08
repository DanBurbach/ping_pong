import $ from 'jquery';
import "./styles.css";
import { counter } from './journal';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var vowels_consonants = counter(body);
    // var output = pingPong(goal);
    // output.forEach(function(element) {
    $('#solution').append("Title: "+ title +
    "<p>" + body + "</p>" +
    "<p>" + "Number of Vowels in entry: " + vowels_consonants[0] + "</p>" + "<p>" + " Number of Consonants in entry: " + vowels_consonants[1] + "</p>" + "<p class='bold'>" + "---------------" + "</p>");
    document.getElementById("journal-form").reset();
    // });
  });
});
