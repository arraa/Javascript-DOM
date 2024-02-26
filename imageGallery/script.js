const imgJumbo = document.querySelector(".jumbo");
const imgList = document.querySelector(".container");
let active = null;

imgList.addEventListener("click", function (e) {
    if (e.target.className == "thumb") {
        if (active != null) {
            active.classList.remove("active");
        }
        imgJumbo.src = e.target.src;
        imgJumbo.classList.add("fade");
        setTimeout(() => {
            imgJumbo.classList.remove("fade");
        }, 500);

        e.target.classList.add("active");
        active = e.target;
    }
});
