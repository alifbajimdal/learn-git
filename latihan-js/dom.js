// -- DOM (DOCUMENT OBJECT MODEL) --

// DOM MANIPULATION: FINDING HTML ELEMENTS
// let el_1 = document.getElementById("div-1")
// console.log(el_1)

// let el_2 = document.getElementsByTagName("div")
// console.log(el_2[1])

// let el_3 = document.getElementsByClassName("div-2")
// console.log(el_3)

// let el_4 = document.querySelector(".div-2")
// console.log(el_4)

// // DOM MANIPULATION: CHANGING HTML ELEMENTS
// el_4.innerHTML = "<p>Hello World</p>"

// let inputx = document.getElementById("input")
// console.log(inputx)

// //input.setAttribute("type", "checkbox")
// inputx.style.borderColor = "green"
// inputx.style.color = "blue"

// // DOM MANIPULATION: CREATE AND DELETE ELEMENTS
// const pElement = document.createElement ("h1") //membuat elemen dgn menuliskan jenis (tag)
// const div1 = document.getElementById("div-1") //mengambil suatu id

// div1.appendChild(pElement) //memasukkan elemen yg dibuat kedalam id yang dipilih
// pElement.innerHTML = "Hello Boys" //menuliskan konten di dalam elemen yang dibuat

// div1.removeChild(pElement)   //menghapus elemen dari id yang dipilih


// DOM EVENT
  // cara 1: hanya dari JS (menggunakan event listener)
const halo = document.getElementById("hello")
halo.addEventListener("mouseenter", function() {  //ketika cursor melewati div "hello"
  console.log("cursor entering div")
  halo.style.border = "1px solid red"
})

const Tombol = document.getElementById("btn")
Tombol.addEventListener("click", function() {   //ketika tombol "btn" ditekan
  const duar = document.getElementById("boom")
  duar.style.display = "block"
})

  //cara 2: dari HTML dan JS (menuliskan fungsi pada HTML)
function showtext() {
  const duarr = document.getElementById("boom")
  duarr.style.display = "block"
}

function addborder(ikilho) {
  ikilho.style.border = "3px solid blue"
}