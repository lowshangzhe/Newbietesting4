var randomNumber = Math.floor(Math.random() * 3) + 1;

var listing = ["No Video","I am Lazy","Good Night"];

var u = document.querySelectorAll(".button .btn").length;


for (var i =  0; i < u; i++) {

    document.querySelectorAll(".button .btn")[i].addEventListener("click",function () {
        if (randomNumber == 1) {
            document.querySelectorAll(".title h1")[0].innerHTML = listing[0];
        } else if (randomNumber == 2) {
            document.querySelectorAll(".title h1")[0].innerHTML = listing[1];
        } else if (randomNumber == 3) {
            document.querySelectorAll(".title h1")[0].innerHTML = listing[2];
        } else {
            alert("Hello! You can stop now!!");
        }
        });
    
}








