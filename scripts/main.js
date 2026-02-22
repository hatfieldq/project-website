// These are comments in JS
// Store a ref to the <img> element
const myImage = document.querySelector("img");

// Update the image, uses DOM API
myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/hiking_with_cam.jpg") {
        myImage.setAttribute("src", "images/spectrum-analyzer.png");
    } else {
        myImage.setAttribute("src", "images/hiking_with_cam.jpg");
    }
});


// Create a reference to the user switch button
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

// Function for personalized greeting. Uses Web Storage API
function setUserName() {
    const myName = prompt("Please enter your name");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Check out my projects, ${myName}`;        
    }
}

// Initialization code, runs when page loads in 
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Check out my projects, ${storedName}`;
}

myButton.addEventListener("click", () => {
    setUserName();
})