var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/dom1.jpeg'){
        myImage.setAttribute ('src','images/dom2.jpeg');
    } else{
        myImage.setAttribute ('src','images/dom1.jpeg')
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
    var myName = prompt('Пожалуйста, введите своё имя.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'ДомСтрой24 это круто, ' + myName;
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'ДомСтрой24 это круто, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
  }
  