let tanya = true;

function getPilihanComp() {
    var comp = Math.random();

    if (comp < 0.34) return "gajah";
    if (comp >= 0.34 && comp < 0.67) return "orang";

    return "semut";
}

function random() {
    const gambar = ["gajah", "semut", "orang"];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(() => {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute("src", "img/" + gambar[i++] + ".png");
        if (i == gambar.length) i = 0;
    }, 100);
}

function getHasil(comp, player) {
    if (player == comp) return "SERI!";
    if (player == "gajah") return comp == "orang" ? "MENANG!" : "KALAH!";
    if (player == "orang") return comp == "gajah" ? "KALAH!" : "MENANG!";
    if (player == "semut") return comp == "orang" ? "KALAH!" : "MENANG!";
}

// const gajah = document.querySelector(".gajah");
// const semut = document.querySelector(".semut");
// const orang = document.querySelector(".orang");
const imgComputer = document.querySelector(".img-komputer");
const info = document.querySelector(".info");

// dont do this!!!

/*
gajah.addEventListener("click", function () {
    const pilihanComputer = getPilihanComp();
    const pilihanPlayer = gajah.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");
    info.textContent = hasil;
});

semut.addEventListener("click", function () {
    const pilihanComputer = getPilihanComp();
    const pilihanPlayer = semut.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");
    info.textContent = hasil;
});

orang.addEventListener("click", function () {
    const pilihanComputer = getPilihanComp();
    const pilihanPlayer = orang.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");
    info.textContent = hasil;
});
*/

const pilihan = document.querySelectorAll("li img");
const playerScore = document.querySelector(".player");
const computerScore = document.querySelector(".comp");
let countScorePlayer = null;
let countScoreComputer = null;

pilihan.forEach(function (pil) {
    pil.addEventListener("click", function () {
        info.textContent = "";
        const pilihanComputer = getPilihanComp();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);

        random();

        setTimeout(function () {
            imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");
            info.textContent = hasil;

            if (hasil == "MENANG!") {
                countScorePlayer++;
                playerScore.innerHTML = countScorePlayer;
            } else if (hasil == "KALAH!") {
                countScoreComputer++;
                computerScore.innerHTML = countScoreComputer;
            }
        }, 1000);
    });
});
