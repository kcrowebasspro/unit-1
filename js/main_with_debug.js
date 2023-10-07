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
    headerRow.insertAdjacentHTML('beforeend', '<th>City</th><th>Population</th>')

    //add the row to the table
    table.appendChild(headerRow);

    //loop to add a new row for each city
    for(var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = '<tr><td>' + cityPop[i].city + '</td><td>' + cityPop[i].population + '</td></tr>';
        //add the row's html string to the table
        table.insertAdjacentHTML('beforeend',rowHtml);

    };

	
    //add the table to the div in index.html
    document.querySelector('#mydiv').appendChild(table);

    //anonymous function that adds a size category to each city based on its population
    document.querySelectorAll("tr").forEach(function(row, i){

		    	// adds the header for the column if i == 0
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
		    			citySize = 'Large'; //everything above 500k pop is large
		    		};
		    		// add the city size to the row once the logic is done
					row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
		    	};
		    });

    // anonymous function that creates a series of click events
    // first event assigns a random color the table will be displayed in on mouseover
	document.querySelector("table").addEventListener("mouseover", function(){
			
			var myColor = "rgb(";

			// this loop assigns a different, random color for each mouseover event
			for (var i=0; i<3; i++){

				var random = Math.round(Math.random() * 255);

				myColor += random;

				if (i<2){
					myColor += ",";
				
				} else {
					myColor += ")";
			};

			document.querySelector("table").style.color = myColor;
		};
		//function calls a pop up window with the text on a click
		function clickme(){

			alert('Hey, you clicked me!');
		};

		document.querySelector("table").addEventListener("click", clickme)
	});
};


//call the initialize function when the window has loaded
document.addEventListener('DOMContentLoaded',initialize)