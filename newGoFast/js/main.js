
// GET ITEMS FUNCTION ----------------------------
function getItems(){
	var getListdiv = $('#list')[0];
	
	for(var i=0, len = localStorage.length; i < len; i++){
		var key = localStorage.key(i);
		var value = localStorage.getItem(key);
		value = value.split(',');
		var raceClass = value[0];
		var nickName = value[1];
		var firstName = value[2];
		var lastName = value[3];
		var age = value[4];
		var new2Track = value[5];
		var raceDate = value[6];
		var anyComments = value[7];
		var newDiv = document.createElement("div"); 
		
		var newh3 = document.createElement("h2");
		newh3.setAttribute("style", "color: #164400;");
		var nickNameTxt = document.createTextNode("Welcome '" + value[1] + "'!");
		newh3.appendChild(nickNameTxt);
		newDiv.appendChild(newh3);
		getListdiv.appendChild(newDiv);
		var setdiv = newDiv.setAttribute("data-role", "fieldcontain");
		
		var newP = document.createElement("p");
		var firstNameTxt = document.createTextNode("Name: " + value[2] + " " + value[3]);
		newP.appendChild(firstNameTxt);
		newDiv.appendChild(newP);
		getListdiv.appendChild(newDiv);
		
		var newP = document.createElement("p");
		var raceClassTxt = document.createTextNode("Registered Class: " + value[0]);
		newP.appendChild(raceClassTxt);
		newDiv.appendChild(newP);
		getListdiv.appendChild(newDiv);
				
		var newP = document.createElement("p");
		var raceDateTxt = document.createTextNode("Racing Date: " + value[6]);
		newP.appendChild(raceDateTxt);
		newDiv.appendChild(newP);
		getListdiv.appendChild(newDiv);
		
		var newP = document.createElement("p");
		var ageTxt = document.createTextNode("Age: " + value[4]);
		newP.appendChild(ageTxt);
		newDiv.appendChild(newP);
		getListdiv.appendChild(newDiv);
		
		var newP = document.createElement("p");
		var new2TrackTxt = document.createTextNode("New to the Track: " + value[5]);
		newP.appendChild(new2TrackTxt);
		newDiv.appendChild(newP);
		getListdiv.appendChild(newDiv);
		
		var newP = document.createElement("p");
		var descTxt = document.createTextNode("Comments: " + value[7]);
		newP.appendChild(descTxt);
		newDiv.appendChild(newP);
		getListdiv.appendChild(newDiv);
		
		var raceClassImage = "tjunior.jpg"; 
			if(raceClass == "4X4 Buggy Pro Mod"){ raceClassImage = "pro-mod.jpg"; }
			if(raceClass == "4X4 Buggy Sportsman"){ raceClassImage = "sman.jpg"; }
			if(raceClass == "4X4 Buggy Junior"){ raceClassImage = "junior.jpg"; }
			if(raceClass == "4X4 Truggy Pro Mod"){ raceClassImage = "tpro-mod.jpg"; }
			if(raceClass == "4X4 Truggy Sprotsman"){ raceClassImage = "tsman.jpg"; }
		
		//add image
		var newP = document.createElement("p");
		var newImg = document.createElement("IMG");
		newImg.setAttribute("src", "images/" + raceClassImage);
		newP.appendChild(newImg);
		newDiv.appendChild(newP);
		
		//delete single item link
		var newP = document.createElement("p");
		var deleteLink = document.createElement("a");
		var setHref = deleteLink.setAttribute("href", "#");
		var setOnclick = deleteLink.setAttribute("onclick", "deleteItem(" + key + ");");
		var deleteText = document.createTextNode("Delete item");
		deleteLink.appendChild(deleteText);
		newP.appendChild(deleteLink);
		newDiv.appendChild(newP);
		getListdiv.appendChild(newDiv);
		
		//edit single item link
		var newP = document.createElement("p");
		var editLink = document.createElement("a");
		var setHref = editLink.setAttribute("href", "#");
		var setOnclick = editLink.setAttribute("onclick", "editItem(" + key + ");");
		var editText = document.createTextNode("Edit item");
		editLink.appendChild(editText);
		newP.appendChild(editLink);
		newDiv.appendChild(newP);
		}
		
		if(localStorage.getItem('appnickName')){
			var clearLink = $('#clear').css('display', 'block'); 
		}else{
			var nickName = "";
			var firstName = "";
			var lastName = "";
			var nickName = $('#nickName').val(nickName);
			var firstName = $('#firstName').val(firstName);
			var lastName = $('#lastName').val(lastName);
		}
}

// SAVE ITEMS FUNCTION ----------------------------
function saveItems(id){
	var d = new Date();
    var key= (d.getTime());
    var raceClass = $('#raceClass').val();
    var nickName = $('#nickName').val();
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var age = $('#age').val();
    var new2Track = $('#new2Track:checked').val();
	if(new2Track == "on"){ 
		var new2Track = "Yes" 
	}else{
		var new2Track = "No" 
		}
	var raceDate = $('#raceDate').val();
	var anyComments = $('#anyComments').val();
	var allItems = [
		raceClass,
		nickName,
		firstName,
		lastName,
		age,
		new2Track,
		raceDate,
		anyComments
	];
	localStorage.setItem(key, allItems);
	location.reload();
}

// EDIT ITEMS FUNCTION ----------------------------
function editItem(id){
	var itemId = id;
	var value = localStorage.getItem(itemId);
	value = value.split(',');
	var raceClass = value[0];
	var nickName = value[1];
	var firstName = value[2];
	var lastName = value[3];
	var age = value[4];
	var new2Track = value[5];
	var raceDate = value[6];
	var anyComments = value[7];
	
	$('#raceClass').val(raceClass);
	$('#nickName').val(nickName);
	$('#firstName').val(firstName);
	$('#lastName').val(lastName);
	$('#age').val(age);
	if(new2Track == "Yes"){
		$('#new2Track').attr('checked', 'checked');
	}
	$('#raceDate').val(raceDate);
	$('#anyComments').val(anyComments);
	
	// show edit item button, hide submit button
	var editButton = $('#edit-item-button').css('display', 'block');
	var subresButtons = $('#submit-reset-buttons').css('display', 'none');
	var itemList = $('#list').css('display', 'none');
	
	// when clicking editItem button
	function clickEdit(){
		var raceClass = $('#raceClass').val();
		var nickName = $('#nickName').val();
		var firstName = $('#firstName').val();
		var lastName = $('#lastName').val();
		var age = $('#age').val();
		var new2Track = $('#new2Track').val();
		if(new2Track == "on"){ 
			var new2Track = "Yes" 
		}else{
			var new2Track = "No" 
			}
		var raceDate = $('#raceDate').val();
		var anyComments = $('#anyComments').val();	
		var allItems = [
			raceClass,
			nickName,
			firstName,
			lastName,
			age,
			new2Track,
			raceDate,
			anyComments
		];
		if(nickName != "" && nickName != "Enter Your nickName" && raceDate != ""){
			localStorage.setItem(itemId, allItems);
			location.reload();
		}else{
			alert("The nickName and raceDate Date fields are required.");
		}
	};
	
	$('#edit-item').bind('click', clickEdit);
}

// DELETE ITEM FUNCTION ----------------------------
function deleteItem(id){
	var ask = confirm("Are you sure you want to miss out on the fun?");
	if(ask){
		localStorage.removeItem(id);
		window.location.reload();
	}else{
		alert("Sweet! Let's Race!");
	}
}

// CLEAR ITEMS FUNCTION ----------------------------
function clearItems(){
	localStorage.clear();
	return false;
}

// VALIDATE FORM FUNCTION ----------------------------
function validateForm(){
	var getraceClass = $('#raceClass').val();
	var getnickName = $('#nickName').val();
	var getfirstName = $('#firstName').val();
	var getlastName = $('#lastName').val();
	var getDate = $('#raceDate').val();
	
	// Validate the whole form

		var racerform = $('#racerCheckInForm');
		racerform.validate();
	if(getnickName == ""){ 
		$('#nickName').css('border', '1px solid red');
		return false;
	}
	
	if(getDate == ""){
		$('#raceDate').css('border', '1px solid red');
		return false;
	}else{
		$('#nickName').css('border', '1px solid #ccc');
		$('#raceClass').css('border', '1px solid #ccc');
		saveItems(); 
	}
}


function clickclear(thisfield, defaulttext) {
	if (thisfield.value == defaulttext) {
		thisfield.value = "";
	}
}

function clickrecall(thisfield, defaulttext) {
	if (thisfield.value == "") {
		thisfield.value = defaulttext;
	}
}

// Get Date Function
$(document).ready( function() {
    var now = new Date();
    var today = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
    $('#raceDate').val(today);
});



