// const el = $("p")
// const el1 = document.getElementsByTagName("p")
// const el2 = document.querySelector("p")

// const el3 = $("#halo")
// console.log(el3) //kalo pake id hanya disebutkan satu id pertama (karena id sifatnya unique)

// const el4 = $(".dunia")
// console.log(el4) //kalo pake class bisa disebutkan semua elemen dgn class yg sama

// console.log(el)
// console.log(el1)
// console.log(el2)

//.html()
// const elemen = $("#text")
// console.log(elemen)
// elemen.html("<h1>Hello World</h1>")

// //.attr()
// const inp = $("input")
// // inp.attr("type", "checkbox")

// // add & remove class
// elemen.addClass("red")
// elemen.addClass("blue")

// elemen.removeClass()

// //css()
// inp.css({
//   border: "3px solid green",
//   margin: "100px",
//   backgroundColor: "gray"
// })

// const elx = $("#text")
// elx.mouseenter(function() {
//   elx.css("border", "1px solid red")
// })

// const inpx = $("input")
// inpx.focus(function() {
//   inpx.css("border", "2px solid blue")
// })

const btnshow = $("#showbtn")
const btnhide = $("#hidebtn")
const btnfadeIn = $("#fade-in")
const btnfadeOut = $("#fade-out")
const btnToggle = $("#togglebtn")

const divx = $("div")

btnshow.click(function() {
  divx.show("slow")
})

btnhide.click(function() {
  divx.hide("slow")
})

btnfadeIn.click(function() {
  divx.fadeIn()
})

btnfadeOut.click(function() {
  divx.fadeOut()
})

btnToggle.click(function() {
  divx.toggle()
})

//jika ada fungsi yg kebingungan bisa melihat dokumentasi pada website jQuery