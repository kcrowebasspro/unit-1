// initialize the function to be called when the script loads
function initialize(){
    cities();
	addEvents();
};

// Putting the data and table creation in a function
function cities(){
	
	// create an array of city populations
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

    //create a table element
    var table = document.createElement("table");

    //create a header row
    var headerRow = document.createElement("tr");

    //add the "City" and "Population" columns to the header row
    headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th><th>City Size</th>")

    // add the row to the table
    table.appendChild(headerRow);

    //loop to add a row for each city
    for (var i = 0; i < cityPop.length; i++){
		var citySize;

		if (cityPop[i].population < 100000){
			citySize = 'Small';

		} else if (cityPop[i].population >= 100000 && cityPop[i].population < 500000){
			citySize = 'Medium';

		} else {
			citySize = 'Large';
		};

        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td><td>" + citySize +"</td></tr>";
        //add the row's html string to the table
        table.insertAdjacentHTML('beforeend',rowHtml);
                };

    //add the table to the div in the body
    var myDiv =  document.querySelector("#myDiv").appendChild(table);
};

//Separated the event listener and the color generator here
function addEvents(){

	// function that generates a random color
	function randomColor(){
		
		var color = "rgb(";

		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);

			color += random;

			if (i<2){
				color += ",";
			
			} else {
				color += ")";
		};
		
		}
		// check that the color is being generated
		console.log(color);

		// Changes the color of the text -- adding the "style" property
		document.querySelector("table").style.color = color;
		
	};

	// add the click me popup
	function clickme(){

		alert('Hey, you clicked me!');
	};

	// add the event listeners to the table
	document.querySelector("table").addEventListener("click", clickme);
	document.querySelector("table").addEventListener("mouseover", randomColor);
	
};

// call the initialize function when the window has loaded
window.onload = initialize();