// Declaration of variables
const catURL = "https://aws.random.cat/meow";
const dogURL = "https://dog.ceo/api/breeds/image/random";
const foxURL = "https://randomfox.ca/floof/";

let catsURL = "";
let dogsURL = "";
let foxesURL = "";

let formEl = document.querySelector(".animalForm");
let dropdownEl = document.querySelector(".animalDropForm");
let imageEl = document.querySelector(".displayedImage");
let favoritesEl = document.querySelector(".favoritePictures");


// Fetching API for cats
let fetchCat = () => {
  fetch(catURL)
  .then ((response) => response.json())
  .then((catObject) => (catsURL = catObject.file));
};

// Fetching API for dogs
let fetchDog = () => {
  fetch(dogURL)
  .then ((response) => response.json())
  .then((dogObject) => (dogsURL = dogObject.message));
};

// Fetching API for foxes 
let fetchFox = () => {
  fetch(foxURL)
  .then ((response) => response.json())
  .then((foxObject) => (foxesURL = foxObject.image));
};

let displayImage = (url) => {
  imageEl.src = url;
};

// Eventlistener and function for submitbtn
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchDog();
  fetchCat();
  fetchFox();
// Finds right API depending on dropdown option
  let animalChoice = dropdownEl.options[dropdownEl.selectedIndex].value
  if (animalChoice == "Cat") displayImage(catsURL);
  if (animalChoice == "Dog") displayImage(dogsURL);
  if (animalChoice == "Fox") displayImage(foxesURL);
});

// Saves image in list when clicked
document.addEventListener("click", (e) => {
  let saveImage = e.target;
  if (saveImage.classList.contains("displayedImage")) {
    favoritesEl.insertAdjacentHTML(
      "beforeend", `<li><img src=${saveImage.src} height="60%" width="60%"/></li>`);
  };
});
