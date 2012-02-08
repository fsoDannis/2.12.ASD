//Dan Annis

//CSV Data
$('#csvbutton').bind('click', function(){
	$('#an_list').empty();
	 $.ajax({
        type: "GET",
        url: "xhr/data.csv",
        dataType: "text",
        success: function(data) {
        	var allTextLines = data.split(/\r\n|\n/);
    		var headers = allTextLines[0].split(',');
    		var lines = []; // main array that hold each racer array

			for (var i=1; i<allTextLines.length; i++) {
				var data = allTextLines[i].split(',');
				if (data.length == headers.length) {
					var headLines = []; // blank array for each racer
					
					for (var j=0; j<headers.length; j++) {
						headLines.push(data[j]); //puts each racer into the array
					}
					lines.push(headLines); // puts the racer array into the main array
				}
				
			}
			
			for (var m=0; m<lines.length; m++){
				var headLines = lines[m];
			$(''+
				'<ul data-role="listview" data-theme="d">'+
					'<li class="headLines">'+
						'<h3>'+ headLines[2] +'</h3>'+
						'<p>'+ headLines[1] +'</p>'+
						'<p align="right">'+ 'Source: ' + headLines[0] +'</p>'+
					'</li></ul>'
				).appendTo('#an_list');
			console.log(lines);	
			}
        }
	});
	return false;
});


