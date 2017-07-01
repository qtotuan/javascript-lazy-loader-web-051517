"use strict";

// this is the base API url
let baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
let counter = 3

function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a
  // div with a class "row"
  let html = ""
  html += '<div class="row">'

  carsJSON.forEach( car_hash => {
    html += '<div class="col-md-4 car">'
    html += `<h2>${car_hash.Make}</h2>`
    html += `<p><strong>Model:</strong> ${car_hash.Model}</p>`
    html += `<p><strong>Year:</strong> ${car_hash.Year}</p>`
    html += '</div>'
  })

  html += "</div>"

  return html
}

function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then
  // add the resulting HTML to the div with an id of "cars"
  counter++
  let html = formatCars(carsJSON)
  console.log(html);
  $("#cars").append(html)


  //
  //
  // <div class="row">
  //   <div class="col-md-4 car">
  //     <h2>Chevrolet</h2>
  //     <p><strong>Model:</strong> Tahoe</p>
  //     <p><strong>Year:</strong> 2012</p>
  //   </div>
  //   <div class="col-md-4 car">
  //     <h2>Toyota</h2>
  //     <p><strong>Model:</strong> Camry</p>
  //     <p><strong>Year:</strong> 2002</p>
  //   </div>
  //   <div class="col-md-4 car">
  //     <h2>Mercedes-Benz</h2>
  //     <p><strong>Model:</strong> E-Class</p>
  //     <p><strong>Year:</strong> 1998</p>
  //   </div>
  // </div>



}

function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
  let url = `${baseUrl}${counter}/3`
  $.ajax({
    url: url,
    contentType: 'application/json',
    dataType: 'jsonp',
    success: data => {
      addCarsToDOM(data)
    }


  })
}
