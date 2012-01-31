

$(document).ready(function(){  

	if (localStorage) {
		alert("Excellent!! Your Browser is Capable of Local Storage");
		
		$(function() {
			// Insert new buttons
			$("#racerForm")
				.after("<input type='submit' value='Clear local Data' id='clearData'>");

		$("#submit")
			.click(function(e) {
				
				// Don't actually submit form
				e.preventDefault();
				
				// Bit of generic data to test if saved data exists on page load
				localStorage.setItem("flag", "set");
				
				// serializeArray is awesome and powerful
				var data = $("#racerForm").serializeArray();
				
				// iterate over results
				$.each(data, function(i, obj) {
					// HTML5 magic!!
					localStorage.setItem(obj.name, obj.value);
				});				
				
			});
		
		// Test if there is already saved data	
		if (localStorage.getItem("flag") == "set") {
			
			// Tell the user
			$("header").before("<p id='message'>This form has saved data!</p>");
			
			// Same iteration stuff as before
			var data = $("#racerForm").serializeArray();
			
			// Only the only way we can select is by the name attribute, but jQuery is down with that.
			$.each(data, function(i, obj) {
				$("[name='" + obj.name +"']").val(localStorage.getItem(obj.name));
			});
			
		}
		
		// Provide mechanism to remove data. You'd probably actually remove it not just kill the flag

// clear storage
function clearData () {
   localStorage.clear();
}
		
	});
	
	
}
});