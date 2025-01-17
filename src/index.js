import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';
import amenityChecker from './js/park-amenities.js';

function clearFields() {
  $('#park').val("");
  $('#amenities').text("");
}

function getElements(response) {
  if (response.data[0]) {
    $('#amenities').text(` ${response.data[0].description}`);
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

$(document).ready(function() {
  $('#parkbtn').click(function() {
    let park = $('#park').val();
    clearFields();
    amenityChecker.getAmenities(park)
      .then(function(response){
        console.log(response);
        getElements(response)
      });
  });
});