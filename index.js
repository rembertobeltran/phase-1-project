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

    const contextMenu = document.getElementById("context-menu");
    const scope = document.querySelectorAll("body");

    scope.addEventListener("context-menu", (event) => {
        event.preventDefault()

        const { clientX: mouseX, clientY: mouseY } = event;

        contextMenu.style.top = `${mouseY}px`;
        contextMenu.style.left = `${mouseX}px`;

        contextMenu.style.display = "visible";
    })
});

// A-sync javascript to random dog image

function fetchDogs() {
    const randomImageApiUrl = "https://dog.ceo/api/breeds/image/random"; 
        fetch(randomImageApiUrl)
        .then(function(response){
    return response.json();
    })
    .then(function(json){ 
    console.log(json);
    const imageUrl = json.message;
    imageRandom.src=imageUrl;
    })
    .catch(function(error){
        console.log(error);
    });
}

