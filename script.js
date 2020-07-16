
// Selectors
const toggleButton = document.querySelector(".toggler")
const modal = document.querySelector(".modal")
var menu = document.querySelector(".menu")
var menuItem = menu.querySelectorAll("li")


// Event Listeners
toggleButton.addEventListener("click", showModal)

// Functions
function showModal() {
    modal.classList.toggle("showModal");

}

// Add active class to nav element


menuItem.forEach(elem => {
    elem.addEventListener("click", function () {
        menu.querySelector(".active").classList.remove("active");
        elem.classList.add("active");

        // console.log(menuItem)
    })
});


// Smooth Scroll
// var scroll = new SmoothScroll('a[href*="#"]');

