" use strict ";

var phoneBook = new Object();

function PhoneBook(){

};

function listAllNames() {
	var newString = "";
	var string = Object.keys(phoneBook) + " ";
	var arr = string.split(",");
	console.log(arr);
	for(var i = 0; i < arr.length; i++){
		newString += arr[i] + "<br/>";
	}
	display.innerHTML = newString;
  console.log(newString);
};

function listAllNumbers() {
	var string = "";
	for(var key in phoneBook){
		var value = phoneBook[key];
		for(var num in phoneBook[key]){
			var number = phoneBook[key][num];
			string += number + "<br/>";
  			console.log(number);
		}
	}
	display.innerHTML = string;
};

function showAdd() {
  var name = prompt("Enter full name");
  var number = prompt("Enter phone number");
  phoneBook[name] = new Object();
  phoneBook[name][number] = [number];
};

function showRemove() {
  var remove = prompt("Enter name to remove");
  for(var key in phoneBook){
		var value = key;
		console.log(value);
		if(value == remove){
			delete phoneBook[value];
		}
	}
};

function showLookup() {
	var lookup = prompt("Enter number to lookup");
	var string = "";
	for(var key in phoneBook){
		var value = key;
		console.log(value);
		if(value == lookup){
			for(var num in phoneBook[key]){
				var number = phoneBook[key][num];
				string += number + "<br/>";
				console.log(number);
			}
		}
	}
	display.innerHTML = string;
};

var display = document.getElementById("display");
