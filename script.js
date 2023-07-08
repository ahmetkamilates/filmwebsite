const chevron = document.querySelectorAll("#chevron")
const movieList = document.querySelectorAll(".movie-list")

chevron.forEach((chevron, i) => {
    const widthRatio = Math.floor(window.innerWidth / 300);
    let clickCounter = 0;
    const imageItem = movieList[i].querySelectorAll("img").length;

    chevron.addEventListener("click", function () {
        clickCounter++;
        if (imageItem - (4 + clickCounter) + (4 - widthRatio)>= 0) {
            movieList[i].style.transform = `translatex(${movieList[i].computedStyleMap().get("transform")[0].x.value - 300
                }px)`;


        } else {
            movieList[i].style.transform = "translatex(0)";
            clickCounter = 0;
        }
    });
})
/* dark mode */

const ball = document.querySelectorAll(".toggle-ball");
const items = document.querySelectorAll(".container,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.movie-list-filter select,.movie-list-title")

ball.addEventListener("click", function(){
    items.forEach((item) => item.classList.toggle("active"))
})
