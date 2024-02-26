// const judul = document.getElementById("judul");
// judul.innerHTML = "<em>halo</em>";

// const sectionA = document.querySelector("section#a");
// sectionA.innerHTML = "hello world";

/*
ini kata chat gpt mengenai perbedaan innerhtml sm textContent

Jadi, perbedaan utama antara keduanya adalah bahwa innerHTML memperlakukan nilainya sebagai HTML,
sementara textContent hanya memperlakukan nilainya sebagai teks biasa. Dalam penggunaannya,
Anda harus berhati-hati dengan innerHTML karena dapat memunculkan masalah keamanan seperti
injeksi skrip lintas situs (cross-site scripting) jika tidak digunakan dengan benar.
Sebaliknya, textContent lebih aman karena tidak menafsirkan teks sebagai HTML.
*/

// const judul = document.querySelector("#judul");

// judul.style.backgroundColor = "red"; //style

// judul.setAttribute("id", "hello"); // nambahin atribut baru didalam element

const p2 = document.querySelector(".p2");

// ======================================
// manipulation node

const newP = document.createElement("p");
const teksP = document.createTextNode("paragraf baru");

newP.appendChild(teksP);

console.log(newP);

const sectionA = document.querySelector("section#a");

sectionA.appendChild(newP);

const newLi = document.createElement("li");
const textLi = document.createTextNode("item baru");

newLi.appendChild(textLi);

const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");

ul.insertBefore(newLi, li2);

const link = document.getElementsByTagName("a")[0];

sectionA.removeChild(link);

const sectionB = document.querySelector("section#b");
const p4 = sectionB.querySelector("p");

const newH2 = document.createElement("h2");
const texth2 = document.createTextNode("Judul baru");

newH2.appendChild(texth2);

sectionB.replaceChild(newH2, p4);


