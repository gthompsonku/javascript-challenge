// from data.js
var tableData = data;

var tbody = d3.select("tbody");

var form = d3.select("#datetime");

function getUFO(event) {
    var inputDate= d3.event.target.value;
    //console.log(inputDate);

    var filteredData = tableData.filter(targetDate => targetDate.datetime === inputDate);
    //console.log(filteredData);
    displayData(filteredData);

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


form.on('change', getUFO);
