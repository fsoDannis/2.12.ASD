

$(document).ready(function(){ 


	var options = document.getElementById('options');
	////////GET ITEMS/////////

	function getItems(){
		
		var getListdiv = document.getElementById("list");
		
		for (var i = 0, len = localStorage.length; i < len; i++){
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			value = value.split(';');
			var nickName		= value[0];
			var fullName		= value[1];
			var age 			= value[2];
			var newToTrack		= value[3];
			var racingClass	 	= value[4];
			var newDiv = document.createElement("div");
			for (var ii = 0, allLength = value.length; ii < allLength; ii++){
				var newParas = document.createElement("p");
				var itemTxt = document.createTextNode(value[ii]);
				newParas.appendChild(itemTxt);
				newDiv.appendChild(newParas);
				getListdiv.appendChild(newDiv);
				
				// Creating the Delete Button
				var deleteLink = document.createElement("a");
				var setHref = deleteLink.setAttribute("href","#");
				var setOnClick = deleteLink.setAttribute("onclick","deleteItem("+key+");");
				var deleteText = document.createTextNode("delete item");
				deleteLink.appendChild(deleteLink);
				newDiv.appendChild(deleteLink);
				
				// Creating the Edit Button
				var editLink = document.createElement("a");
				var setEditHref = editLink.setAttribute("href","#");
				var setEditOnClick = editLink.setAttribute("onclick","editItem("+key+");");
				var editText = document.createTextNode("edit item");
				editLink.appendChild(editLink);
				newDiv.appendChild(editLink);
				
				//Make the options into a block
				var options = document.getElementById('options');
				options.style.display = "block";
				
				// set the clear button with some functionality
				var getClear = document.getElementById("clear");
				var setClearclick = getClear.setAttribute("onclick", "clearLocal();");
			}
		}
	
	
	////////STORE ITEMS/////////
	
	document.getElementById('submit').onclick = function(id)	{
		var newDate = newDate();
		var itemId	= newDate.getTime();
		var nickName		= document.getElementById('nickName').value;
		var fullName		= document.getElementById('fullName').value;
		var age 			= document.getElementById('age').value;			
		var newToTrack		= document.getElementById('flip').value;
		var racingClass	 	= document.getElementById('raceClass').value;
		var allItems		=[
			nickName,
			fullName,
			age,
			newToTrack,
			racingClass
			];
		if (nickName != "" && fullName != "" && racingClass !=""){
			localStorage.setItem(itemId, allItems.join(';'));
		}else{
			alert("Please enter a Nick Name, Full Name, and a Racing Class.");
		}
	}
	
	//////////EDIT SINGLE ITEMS////////////
	
	function editItem(id){
		var value = localStorage.getItem(id);
		var itemId = id
		value = value.split(";");
		var nickName		= value[0];
		var fullName		= value[1];
		var age 			= value[2];			
		var newToTrack		= value[3];
		var racingClass	 	= value[4];
		
		document.getElementById('nickName').value = nickName;
		document.getElementById('fullName').value = fullName;
		document.getElementById('age').value = age;
		document.getElementById('newToTrack').value = flip;
		document.getElementById('racingClass').value = racingClass;
		
		var editItem = document.getElementById('editItem');
		editItem.style.display="block";
		var submit = document.getElementById('submit');
		submit.style.display="none";
		document.getElementById('editItem').onclick = function(){
			var nickName		= document.getElementById('nickName').value;
			var fullName		= document.getElementById('fullName').value;
			var age 			= document.getElementById('age').value;			
			var newToTrack		= document.getElementById('flip').value;
			var racingClass	 	= document.getElementById('raceClass').value;
			var allItems		=[
			nickName,
			fullName,
			age,
			newToTrack,
			racingClass
			];
		if (nickName != "" && fullName != "" && racingClass !=""){
			localStorage.setItem(itemId, allItems.join(';'));
		}else{
			alert("Please enter a Nick Name, Full Name, and a Racing Class.");
		}}
	};
		
		
	/////////////DELETE SINGLE ITEM////////////
	
	function deleteItem(id){
		var ask = confirm("Are you sure you want to delete this Entry?");
			if(ask){
				localStorage.removeItem(id);	
				window.location.reload();
			}else{
				alert("You have not been Deleted!");
			}
	}
	
	//////////////////CLEAR IT ALL///////////////
	
	function clearLocal(){
		localStorage.clear();
		window.location.reload();
	}
	
	}
	
});