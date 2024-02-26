// const btnClose = document.querySelectorAll(".close");

// btnClose.forEach(function (el) {
//     el.addEventListener("click", function (e) {
//         e.target.parentElement.classList.add("hidden");
//         e.preventDefault();
//         e.stopPropagation(); //untuk stop event bubbling
//     });
// });

// const cards = document.querySelectorAll(".card");

// cards.forEach(function (e) {
//     e.addEventListener("click", function (el) {
//         alert("po");
//     });
// });

const container = document.querySelector(".container");


container.addEventListener('click', function(e){
    if(e.target.className == 'close'){
        e.target.parentElement.classList.add("hidden");
    }
})