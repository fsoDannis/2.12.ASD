//Dan Annis
//$('#racerCheckInPage').live('pageinit', function{ Kills CRUD
	
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
		var newDiv = document.createElement("div"); // Not sure how to change to jquery
		
		$('<h2 />',{
			style: 'color:#164000',
			text: "Welcome '" + value[1] + "'!"
		}).appendTo(newDiv);
		var setdiv = newDiv.setAttribute("data-role", "fieldcontain");  // Not sure how to change to JQ
	
		$('<p />',{
			text:'Full Name: '+ value[2] + " " + value[3]
		}).appendTo(newDiv);

		$('<p />',{
			text:'Registered Class: '+ value[0]
		}).appendTo(newDiv);
		
		$('<p />',{
			text:'Racing Date: '+ value[6]
		}).appendTo(newDiv);
				
		$('<p />',{
			text:'Age: '+ value[4]
		}).appendTo(newDiv);
		
		$('<p />',{
			text:'New to the Track: '+ value[5]
		}).appendTo(newDiv);	
		
		$('<p />',{
			text:'Comments: ' + value[7]
		}).appendTo(newDiv);	
		
		var raceClassImage = "junior.jpg"; 
			if(raceClass == "4X4 Buggy Pro Mod"){ raceClassImage = "images/pro-mod.jpg"; }
			if(raceClass == "4X4 Buggy Sportsman"){ raceClassImage = "images/sman.jpg"; }
			if(raceClass == "4X4 Buggy Junior"){ raceClassImage = "images/junior.jpg"; }
			if(raceClass == "4X4 Truggy Pro Mod"){ raceClassImage = "images/tpro-mod.jpg"; }
			if(raceClass == "4X4 Truggy Sprotsman"){ raceClassImage = "images/tsman.jpg"; }
		
		//add image		
		$('<p id="racerImage">').appendTo(newDiv);
		$('<img />',{
			src: raceClassImage
		}).appendTo(newDiv);
		
		
		//delete single item link
		$('<p><a href="#" onclick="deleteItem(' + key + ')">Delete Item</a></p>)').appendTo(newDiv);
		getListdiv.appendChild(newDiv);
		
		//edit single item link
		$('<p><a href="#" onclick="editItem(' + key + ')">Edit Item</a></p>)').appendTo(newDiv);
		getListdiv.appendChild(newDiv);
		} // ending the data function
		
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

	
//   });//End init function

	$("#home").listview("refresh");

