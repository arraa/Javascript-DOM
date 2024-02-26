// const p3 = document.querySelector(".p3");

// // function ubahWarna() {
// //     p3.style.backgroundColor = "lightcoral";
// // }

// const p2 = document.querySelector(".p2");

// function ubahWarna() {
//     p2.style.backgroundColor = "lightblue";
// }

// p2.onclick = ubahWarna;

// const p4 = document.querySelector("section#b p");

// p4.addEventListener("click", function () {
//     const ul = document.querySelector("section#b ul");

//     const newLi = document.createElement("li");
//     const textLi = document.createTextNode("item baru");

//     newLi.appendChild(textLi);

//     ul.appendChild(newLi);

// });

const p3 = document.querySelector(".p3");

// p3.onclick = function () {
//     p3.style.backgroundColor = "lightcoral";
// };

// p3.onclick = function () {
//     p3.style.color = "red";
// };

p3.addEventListener("click", function () {
    p3.style.backgroundColor = "lightcoral";
});

p3.addEventListener("click", function () {
    p3.style.color = "red";
});