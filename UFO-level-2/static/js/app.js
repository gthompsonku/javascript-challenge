// from data.js
var tableData = data;

var tbody = d3.select("tbody");

var form = d3.select("#datetime");

var button = d3.select("#filter-btn");


function getUFO(event) {
    var inputDate= d3.event.target.value;
    var filteredData = tableData.filter(targetDate => targetDate.datetime === inputDate);
    
    displayData(filteredData);
    filterUFO(filteredData);
    //return filteredData;

};

function displayData(targetData) {
    targetData.forEach(function(ufo){
        var row = tbody.append("tr");

        Object.entries(ufo).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
};


/*
function filterUFO(event) {
  var state = filteredData.map(obj => obj.state);
  var filterOptions = state;
  return filterOptions;
};

function displayFilter(filterOptions) {
  filterOptions.forEach(function(options){
    var dropDown = button.append("select");

    Object.entries(options).forEach(function([key, value]) {
      console.log(key, value);
      var cell = dropDown.append('option');
      cell.text(value);

    });
  });
};
button.on('click', filterUFO)
*/
form.on('change', getUFO);

button.on('click', test);

function test() {
  console.log("button works");
};