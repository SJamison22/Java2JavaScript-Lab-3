" use strict ";

var phoneBook = new Object();

function PhoneBook(){

};

function listAllNames() {
	var newString = "";
	var string = Object.keys(phoneBook) + " ";
	var arr = string.split(",");
	for(var i = 0; i < arr.length; i++){
		newString += arr[i] + "<br/>";
	}
	display.innerHTML = newString;
};

function listAllNumbers() {
	var string = "";
	for(var key in phoneBook){
		var value = phoneBook[key];
		for(var num in phoneBook[key]){
			var number = phoneBook[key][num];
			string += number + "<br/>";
		}
	}
	display.innerHTML = string;
};

function showAdd() {
	var name = prompt("Enter full name");
	var number = prompt("Enter phone number");
	phoneBook[name] = new Object();
	phoneBook[name][number] = [];
	phoneBook[name][number].push(number);
};

function addNumber(){
	var addTo = prompt("Enter contact to add a number to");
	for(var key in phoneBook){
		if(addTo == key){
			for(var num in phoneBook[key]){
				phoneBook[key][num].push(prompt("Enter a number to add"));
			}
		}
	}
};

function removeNumber(){
	var remove = prompt("Enter contact to remove a number from");
	for(var key in phoneBook){
		console.log("key : " + key);
		if(remove == key){
			var number = prompt("Enter a number to remove")
			for(var num in phoneBook[key]){
				console.log(phoneBook[key][num].length);
				for(var i = 0; i < phoneBook[key][num].length; i++){
					console.log(phoneBook[key][num][i]);
					if(phoneBook[key][num][i] == number){
						phoneBook[key][num].splice(phoneBook[key][num].indexOf(number),1);
					}
				}
			}
		}
	}
};

function showRemove() {
	var remove = prompt("Enter name to remove");
	for(var key in phoneBook){
		var value = key;
		if(value == remove){
			delete phoneBook[value];
		}
	}
};

function showLookup() {
	var lookup = prompt("Enter name to lookup");
	var string = "";
	for(var key in phoneBook){
		var value = key;
		if(value == lookup){
			for(var num in phoneBook[key]){
				var number = phoneBook[key][num];
				string += number + "<br/>";
			}
		}
	}
	display.innerHTML = string;
};

function reverseLookup(){
	var lookup = prompt("Enter number to lookup");
	for(var key in phoneBook){
		var value = phoneBook[key];
		for(var num in phoneBook[key]){
			for(var i = 0; i < phoneBook[key][num].length; i++){
				var number = phoneBook[key][num][i];
			if(lookup == number){
				display.innerHTML = key;
			}
		}
	}
}
};

var display = document.getElementById("display");
