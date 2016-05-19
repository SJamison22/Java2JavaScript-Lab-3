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
  phoneBook[name][number] = [number];
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
	var lookup = prompt("Enter number to lookup");
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
			var number = phoneBook[key][num];
				if(lookup == number){
					display.innerHTML = key;
			}
		}
	}
};

var display = document.getElementById("display");
