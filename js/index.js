fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vR7j5TjmeXGpANP6oiROHECAMOrtXTeHh_s5bLzhNzzxPDQr3_Jz-rUKxktHjuF0iiZyybiiKXZd6Xj/pub?output=csv')
   .then(function (response) {
      return response.text();
   })
   .then(function (text) {
		let series = csvToSeries(text);
		renderChart(series);
	})
   .catch(function (error) {
      //Something went wrong
      console.log(error);
   });

function csvToSeries(text) {
	const temperature = 'Temperature';
	let dataAsJson = JSC.csv2Json(text);
	let probe1 = [], probe2 = [], probe3 = [], probe4 = [];
	dataAsJson.forEach(function (row) {
		// Initially, we split are comma separated string value on commas.
		// In the values an array of these values is stored.
		var avg_temp = row.temperature.split(",");
		var total = 0;
		// Then we get each value based on it's position in the array.
		for(var i = 0; i < avg_temp; i++){
			let total = total + avg_temp[i];
		} 
		 //assign each data entry to a probe, if unable throw an error.
		if (row.Device_ID === '1') {
			probe0.push({x: row.time, y: row[temperature]});
		}
		else if(row.Probe_ID === '2'){
			probe1.push({x: row.time, y: row[temperature]});
		}
		else if(row.Probe_ID === '3'){
			probe2.push({x: row.time, y: row[temperature]});
		}
		else if(row.Probe_ID === '4'){
			probe3.push({x: row.time, y: row[temperature]});
		}
		else{
			console.log(error)
		}
			
	});
	console.log([probe1, probe2, probe3, probe4]);
}


function renderChart(series){
JSC.Chart("chartDiv", {
  series: [
    {
      points: [{ x: "A", y: 10 }, { x: "B", y: 5 }]
    }
  ]
});
}

