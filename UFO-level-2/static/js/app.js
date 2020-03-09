// from data.js
var tableData = data;

var tbody = d3.select("tbody");

var button = d3.select("#filter-btn");


function getUserInput(event) {
    d3.event.preventDefault();
    
    var date= d3.select("#datetime").node().value;
    d3.select("#datetime").node().value="";
    console.log(date);

    var city = d3.select("#city").node().value.toLowerCase();
    d3.select("#city").node().value="";
    console.log(city);

    var state = d3.select("#state").node().value.toLowerCase();
    d3.select("#state").node().value="";
    console.log(state);

    var country = d3.select("#country").node().value.toLowerCase();
    d3.select("#country").node().value="";
    console.log(country);
    
    var shape= d3.select("#shape").node().value.toLowerCase();
    d3.select("#shape").node().value="";
    console.log(shape);

    filterMetrics={date:date, city:city, state:state, country:country, shape:shape};
    
    filterData(filterMetrics);

};

function filterData(userFilter) {
  
  tbody.html("");

  var filteredUFO=[];

  if (userFilter.date !== "") {
    filteredUFO = tableData.filter(target => target.datetime === userFilter.date);
  }

  else if (userFilter.city !== "") {
    filteredUFO = tableData.filter(target => target.city === userFilter.city);
  }

  else if (userFilter.state!=="") {
    filteredUFO = tableData.filter(target => target.state === userFilter.state);
  }

  else if (userFilter.country!=="") {
    filteredUFO = tableData.filter(target => target.country === userFilter.country);
  }

  else if (userFilter.shape!=="") {
    filteredUFO = tableData.filter(target => target.shape === userFilter.shape);
  }

  else {
    filteredUFO = tableData;
  };

  displayData(filteredUFO);
};



function displayData(targetData) {
    targetData.forEach(function(ufo){
        var row = tbody.append("tr");

        Object.entries(ufo).forEach(function([key, value]) {
            //console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

button.on('click', getUserInput);


