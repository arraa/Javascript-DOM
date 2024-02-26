// // DOM Selection

// const judul = document.getElementById('judul');

// judul.style.color = 'red'
// //untuk ngubah style dari js menggunakan DOM dan otomatis menambahkan inline css

// judul.innerHTML = 'halo dunia'
// //untuk ngubah text content --not recommend

// judul.textContent = 'hai dunia'
// //bisa juga pakai ini untuk ngubah text



// //===================================================

// const p = document.getElementsByTagName('p')

// for(let i = 0; i < p.length ; i++){
//     p[i].style.backgroundColor = 'lightpink';
//      // karena dia bentuknya array makanya harus di kasih tau satu satu
// }

// //===================================================
// const h1 = document.getElementsByClassName('p1');

// h1[0].innerHTML = 'diubah dari js'

// //===================================================
// const test = document.querySelector('#a p:nth-child(3)') ;

// test.style.backgroundColor = 'lightcoral';

// const pQuery = document.querySelector('p') ;

// pQuery.style.backgroundColor = 'lightseagreen';

// //===================================================

// const pQueryAll = document.querySelectorAll('p') ;

// pQueryAll[3].style.backgroundColor = 'lightblue';

//===================================================

// const sectionB = document.getElementById('b')
// const p4 = sectionB.querySelector('p')

// p4.innerHTML = 'node root'

// cara lain

const sectionB = document.querySelector("#b");
const p4 = sectionB.getElementsByTagName("p")[0]; // jadi sebenernya bisa langsung kasih index di sini

p4.innerHTML = "node root";
