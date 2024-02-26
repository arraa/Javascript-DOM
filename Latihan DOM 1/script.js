// const button = document.getElementById("button1");
// const body = document.getElementsByTagName('body')[0]; //can try this

// button.addEventListener("click", function () {
//     document.body.classList.toggle("biru-muda");
// });

// const newButton = document.createElement("button");
// const textButton = document.createTextNode("Random color");
// newButton.appendChild(textButton);
// newButton.setAttribute("type", "button");
// newButton.classList.add("button");
// button.after(newButton);

// newButton.addEventListener("click", function () {
//     const r = Math.round(Math.random() * 255 + 1);
//     const g = Math.round(Math.random() * 255 + 1);
//     const b = Math.round(Math.random() * 255 + 1);
//     document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
// });

// const sMerah = document.querySelector("input[name=SMerah]");
// const SHijau = document.querySelector("input[name=SHijau]");
// const SBiru = document.querySelector("input[name=SBiru]");

// sMerah.addEventListener("input", function () {
//     const r = sMerah.value;
//     document.body.style.backgroundColor = `rgb(${r}, 100, 100)`;
// });

// SHijau.addEventListener("input", function () {
//     const r = sMerah.value;
//     const g = SHijau.value;
//     document.body.style.backgroundColor = `rgb(${r}, ${g}, 100)`;
// });

// SBiru.addEventListener("input", function () {
//     const r = sMerah.value;
//     const g = SHijau.value;
//     const b = SBiru.value;
//     document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
// });

// cara lain bair
const range = document.querySelectorAll("input");

for (let i = 0; i < range.length; i++) {
    range[i].addEventListener("input", function () {
        const r = range[0].value;
        const g = range[1].value;
        const b = range[2].value;

        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
}

// document.body.addEventListener("mousemove", function (event) {
//     const xpos = Math.round((event.clientX / window.innerWidth) * 255);
//     const ypos = Math.round((event.clientY / window.innerHeight) * 255);
//     document.body.style.backgroundColor = `rgb(${xpos}, ${ypos}, 100)`;

// });
