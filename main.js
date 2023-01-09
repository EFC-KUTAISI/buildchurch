// fixed timer 
var countDownDate = new Date("Feb 28, 2023 00:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("timer").innerHTML = days + " დღე " + hours + " სთ "
    + minutes + " წთ " + seconds + " წმ";
    
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
        }
}, 1000);

// number copy function
let copytbc = document.getElementById("copytbcfunc");
copytbc.addEventListener('click', (id) => {
    var str = document.getElementById("copytbc");
    window.getSelection().selectAllChildren(str);
    document.execCommand("Copy");
});

let copygeo = document.getElementById("copygeofunc");
copygeo.addEventListener('click', (id) => {
    var str = document.getElementById("copygeo");
    window.getSelection().selectAllChildren(str);
    document.execCommand("Copy");
});
