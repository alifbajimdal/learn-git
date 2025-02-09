function namaFunction () {
  console.log("Hello World")
}

namaFunction() //untuk deploy function-nya

//PENGGUNAAN PARAMETER DAN ARGUMENT
                  //parameter
function multiply(num1, num2) {
  console.log(num1 * num2)
}
        //argument
multiply(5, 10)

//DEFAULT PARAMETER
function sayHello (name = "Dunia") {
  console.log("Hello " + name)
}

sayHello() // menampilkan value dari parameter yang sudah didefinisikan di awal
sayHello("Boys") // menampilkan value dari argumen di dalam ()

//RETURN STATEMENT
function calcArea(p,l) {
  return p * l  // hanya menghitung saja tanpa ditampilkan
}

console.log(calcArea(7, 3))
      // atau
let result = calcArea (8,9)
console.log(result)

// - MACAM CARA PENULISAN FUNCTION -
  //KEYWORD FUNCTION (Pendefinisian function pada dasarnya)
function keyWord() {
  console.log("Keyword Function")
}
keyWord()

  //FUNCTION EXPRESSION 
let funcExpress = function () {
  console.log("Function Expression")
}
funcExpress()

  //ARROW FUNCTION
let arrowFunction = () => {
  console.log("Arrow Function")
}
arrowFunction()