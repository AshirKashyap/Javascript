myDiv = document.getElementById("myDiv");

var fname;
var lname;
var likeDog
var haveDogYes;
var dogLover;
var date;
var password;
var backgroundColor;
var textColor;
var list = [];

function myClick () {
  /*
  Purpose: This is the main function that happens after the user clicks the submit button.
  It stores the data and as well as displays the previous user's data!
  Parameters: There are no parameters
  Return: There are no returns
  */
   fname = document.getElementById('fname').value;
   lname = document.getElementById('lname').value;
   likeDog = document.getElementById('likeDog').checked;
   haveDogYes = document.getElementById('haveDogYes').checked;
   dogLover = document.getElementById('dogLover').checked;
   date = document.getElementById('date').value;
   password = document.getElementById('password').value;
   backgroundColor = document.getElementById('backgroundColor').value;
   textColor = document.getElementById('textColor').value;

  myJSON = {
    'fname': fname,
    'lname': lname,
    'likeDog': likeDog,
    'haveDogYes': haveDogYes,
    'dogLover': dogLover,
    'date': date,
    'password': password,
    'backgroundColor': backgroundColor,
    'textColor': textColor,

  }

  clickDiv.innerHTML = "\n";
  typeDiv.innerHTML = "\n";

  if ((likeDog) || (dogLover)) {
    myDiv.innerHTML = "\n";

    myDiv.innerHTML += "\t\t<h1>Here is a picture of a cute dog for " + myJSON['fname'] + " " + myJSON['lname'] + "!</h1>\n";

    myDiv.innerHTML += "\t\t<img src='Doggo.png' />\n";

    myDiv.innerHTML += "\t\t<h4>-" + myJSON['date'] + "<h4>\n";

    myDiv.innerHTML += "\t\t<h5>Password: " + myJSON['password'] + "<h5>\n";

  } else {
    myDiv.innerHTML = "\n";

    myDiv.innerHTML += "\t\t<h1>Here is a picture of a cat for " + myJSON['fname'] + " " + myJSON['lname'] + "!</h1>\n";

    myDiv.innerHTML += "\t\t<img src='cat.png' />\n";

    myDiv.innerHTML += "\t\t<h4>-" + myJSON['date'] + "<h4>\n";

    myDiv.innerHTML += "\t\t<h5>Password: " + myJSON['password'] + "<h5>\n";
  }

  var newJSON = localStorage.getItem("formData");

  newJSON = JSON.parse(newJSON);
  list.push(myJSON);

  myJSON = JSON.stringify(list);

  localStorage.setItem("formData", myJSON);

  for (newJSON of list) {

    if ((newJSON['likeDog']) || (newJSON['dogLover'])) {
      myDiv.innerHTML += "\t\t\t\t The previous user " + newJSON['fname'] + " " + newJSON['lname'] + " got a picture of a dog on " + newJSON['date'] + ".";

    } else {
      myDiv.innerHTML += "\t\t\t\t The previous user " + newJSON['fname'] + " " + newJSON['lname'] + " got a picture of a cat on " + newJSON['date'] + ".";
    }

    myDiv.innerHTML += "\t\t Their background color was " + newJSON['backgroundColor'] + " and their text color was " + newJSON['textColor'] +".";

  }

  changeBackgroundColor('myBody', backgroundColor);
  changeTextColor('myDiv', textColor);
}

function onMouseOver (object) {
  document.getElementById(object).style.backgroundColor = "lightblue";
  document.getElementById(object).style.outline = "medium solid black";

}

function onMouseOut (object) {
  document.getElementById(object).style.backgroundColor = "";
  document.getElementById(object).style.outline = "3px solid black";

}

function onKeyUp (object) {
  var object = document.getElementById(object);
  object.value = object.value.toLowerCase();

}

function ReplaceContentInContainer (id, content) {
  document.getElementById(id).style.color = "blue";
  document.getElementById(id).innerHTML = content;

}

function changeBackgroundColor (object, backgroundColor) {
  document.getElementById(object).style.backgroundColor = backgroundColor;

}

function changeTextColor (object, textColor) {
  document.getElementById(object).style.color = textColor;

}
