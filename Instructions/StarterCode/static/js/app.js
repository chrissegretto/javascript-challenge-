// from data.js
var tableData = data;

// YOUR CODE HERE!
// Select the tbody
var tbody = d3.select("tbody");

//==============================================
function creating_table(data){
data.forEach(element => {
    var row = tbody.append("tr");
    Object.entries(element).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});
} 
creating_table(data)
// Select the button
var button = d3.selectAll("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
//   console.log(people);

  var filteredData = data.filter(Date => Date.datetime === inputValue);

  console.log(filteredData);
  creating_table(filteredData)

//   filteredData.forEach(element => {
//     var row = tbody.append("tr");
//     Object.entries(element).forEach(([key, value]) => {
//         var cell = row.append("td");
//         cell.text(value);
//     });
// });

};
d3.selectAll("button").on("click", runEnter)

    // tablerow = tbody.append("tr")

    // loop through each row 
//     Object.entries(element).forEach(value =>{
//         tablerow.append("td")
//         var cell = row.append("tr")
//         .text(value)
//     })
// });
