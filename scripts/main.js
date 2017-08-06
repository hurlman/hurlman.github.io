var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/pig.jpg'){
        myImage.setAttribute('src','images/pig2.jpg');
    }else{
        myImage.setAttribute('src','images/pig.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setuserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Guinea Pigs, ' + myName + '!';
}

if(!localStorage.getItem('name')) {
    setuserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Guinea Pigs, ' + storedName + "!";
}

myButton.onclick = function() {
    setuserName();
}