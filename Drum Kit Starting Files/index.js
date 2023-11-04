var btns = document.querySelectorAll("button.drum");

for (let btn of btns) {
    btn.addEventListener("click", function () {
        var btnContent = this.textContent;

        handleEvent(btnContent);
        btnAnimation(btnContent)
    })
}
document.addEventListener("keypress", function(event) {
    handleEvent(event.key);
    btnAnimation(event.key);
})

function handleEvent(key) {
    switch (key) {
        case "w":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
            break;
            case "a":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
            break;
            case "s":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
            break;
            case "d":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
            break;
            case "j":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
            break;
            case "k":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
            break;
            case "l":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
            break;
            default:
                console.log(btnContent);
            break;
    }
}

function btnAnimation (className) {
    var btnClass = document.querySelector("." + className);
    btnClass.classList.toggle("pressed");
    setTimeout(function () {
        btnClass.classList.toggle("pressed");
    }, 100)
}