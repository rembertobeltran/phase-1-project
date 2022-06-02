// Event listeners > DOMContentLoaded, click, context-menu
document.addEventListener("DOMContentLoaded", function() {
    const nextButton = document.getElementById("next");
    const startButton = document.getElementById("start");
    const likeButton = document.getElementById("like");

startButton.addEventListener("click", function getRandomImage() {
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("next").style.visibility = "visible";
    document.getElementById("like").style.visibility = "visible";
    fetchDogs();
})

nextButton.addEventListener("click", function getRandomImage() {
    document.getElementById("like").style.backgroundColor = "white";
    fetchDogs();
})

likeButton.addEventListener("click", function getRandomImage(){
    document.getElementById("like").style.backgroundColor = "#FF4500";
})

const scope = document.querySelectorAll("body")[0];
console.log(scope)

scope.addEventListener("contextmenu", function reveal(event) {
    // debugger;
    event.preventDefault()
    document.getElementById("context-menu").style.visibility = "visible";
    // document.getElementById("context-menu").style.left = e.pageX + "px";
    // document.getElementById("context-menu").style.top = e.pageY + "px";
    })
})

document.addEventListener("click", function dismiss() {
    document.getElementById("context-menu").style.visibility = "hidden";
})


// A-sync JavaScript for random dog image, inserted into DOM element

function fetchDogs() {
    const randomImageApiUrl = "https://dog.ceo/api/breeds/image/random"; 
        fetch(randomImageApiUrl)
        .then(function(response){
    return response.json();
    })
    .then(function(json){ 
    console.log(json);
    const imageUrl = json.message;
    imageRandom.src = imageUrl;
    })
    .catch(function(error){
        console.log(error);
    });
}