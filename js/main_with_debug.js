//Initilize the function called later
function initialize(){
    cities();
};

//create the cities function that will populate an HTML table with cities and their populations
function cities(){
	//create the arrays of cities and populations
	var cityPop = [
		{ 
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		}
	];

	//create the table element
    var table = document.createElement("table");

    //create a header row
    var headerRow = document.createElement("tr");

    //add the "City" and "Population" columns to the header row
    headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")

    //add the row to the table
    table.appendChild(headerRow);

    //function that adds a column describing the city based on its population
	function addColumns(cityPop){
	    
	    document.querySelectorAll("tr").forEach(function(row, i){

	    	if (i == 0){

	    		row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
	    	} else {

	    		var citySize;
	    		//Small cities have pops under 100,000
	    		if (cityPop[i-1].population < 100000){
	    			citySize = 'Small';

	    		} else if (cityPop[i-1].population >= 100000 && cityPop[i-1].population < 500000){ //medium cities are 100k-500k
	    			citySize = 'Medium';

	    		} else {
	    			citySize = 'Large'; //everything else is large
	    		};

				row.insertAdjacentHTML('<td>' + citySize + '</td>');
	    	};
	    });
	};

console.log("test the addColumns");
console.log(addColumns(cityPop[1]));

    //loop to add a new row for each city
    for(var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        table.insertAdjacentHTML('beforeend',rowHtml);
    };

    //add the table to the div in index.html
    document.querySelector("#mydiv").appendChild(table);

     //change the text color
    document.querySelector('#mydiv').style.color = 'gray';

    //change the text size and alignment
    document.querySelector('#mydiv').style.fontSize = '1em';
    document.querySelector('#mydiv').style.textAlign = 'center';


/*
	function addEvents(){

		document.querySelector("table").addEventListener("mouseover", function(){
			
			var color = "rgb(";

			for (var i=0; i<3; i++){

				var random = Math.round(Math.random() * 255);

				color += "random";

				if (i<2){
					color += ",";
				
				} else {
					color += ")";
			};

			document.querySelector("table").color = color;
		};

		function clickme(){

			alert('Hey, you clicked me!');
		};

		document.querySelector("table").addEventListener("click", clickme)
	};
};
*/
};

var foo = cities();
foo.addColumns();


//call the initialize function when the window has loaded
document.addEventListener('DOMContentLoaded',initialize)