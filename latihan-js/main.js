// CARA MENAMPILKAN TULISAN PADA CONSOLE
console.log ("hello external")

// PERBEDAAN PENGGUNAAN VAR, LET, DAN CONST
var Variabel = "Halo aku Var"
console.log(Variabel)

var Variabel = "Halo aku Var juga"
console.log(Variabel)
  //var bisa dideklarasikan ulang dengan nama variabel yang sama
  //kalo dioperasikan (contoh: console.log()), maka yang muncul adalah isi dari var terbaru
  //tapi var sebelumnya masih bisa dijalankan

let Lett = "Halo aku Let"
console.log(Lett)

Lett = "Halo aku Let juga"
console.log(Lett)
  //hampir sama kyk var
  //cuman, let tidak bisa dideklarasikan kembali tapi bisa diubah (tanpa menulis "let" lagi)

const Konstan = "Halo aku Konstanta"
console.log(Konstan)
  //const hanya bisa dideklarasikan kembali dan tidak dapat diubah

// TIPE DATA: Undefined, Null, Boolean, String, Number, Object
let undefinedValue
console.log(undefinedValue)
  //tidak terdefinisi tipe-nya

let nullValue = null
console.log(nullValue)
  //terdefinisi, tapi tidak ada isinya (tidak merujuk pada tipe data apapun)
  //kalo di matematika, ibaratnya "himpunan kosong"

let numberValue = 10
console.log(numberValue)
  //berupa bilangan, dapat dihitung

let stringValue = "halo"
console.log(typeof stringValue) // "typeof" untuk mengidentifikasi tipe data yang digunakan
  //berupa string atau teks, tidak dapat dihitung meski berupa angka
  //diberi tanda dua petik

let booleanValue = true
console.log(booleanValue)
booleanValue = false
console.log(booleanValue)
  //hanya berupa 2 value: true / false

let objectValue = {
  key: "Value",
  a: 1
}
console.log(objectValue)
console.log(objectValue.key)
  //object biasanya memiliki banyak konten, diberi tanda kurung kurawal
  //dapat memilih satu konten dalam object dengan cara menambahkan ".namakonten"
  //tiap konten di dalam object punya tipe data sendiri

// OPERASI ARITMATIKA
console.log(2+4)  //penjumlahan
console.log(2-4)  //pengurangan
console.log(2*4)  //perkalian
console.log(2/4)  //pembagian
console.log(2**4) //pangkat
console.log(7%4)  //modulo atau sisa bagi

console.log(numberValue++) //increment: tampilkan dulu baru tambah 1
console.log(numberValue)   //increment: tampilkan nilai numberValue terakhir
console.log(++numberValue) //increment: tambahkan 1 dulu baru tampilkan

console.log(numberValue--) //decrement: sama seperti increment tapi dikurangi 1
console.log(numberValue)
console.log(--numberValue)

let num1 = 3, num2 = 8
num1 += num2 // "+=" artinya: num1 = num1 + num2
console.log(num1)

let x = "halo"
x += 11
console.log(x)
console.log(x++)
  //sebelum menggunakan increment dan decrement, harus mendeklarasikan dan menggunakan suatu variabel
  //tipe data harus berbentuk number atau string + number
  //jika tipe data hanya berbentuk string, ketika di-inc/dec hasilnya NaN (Not a Number)

// CONDITIONAL STATEMENT
if (7 > 10) {
  console.log("bener cuy")
}
  else if (7 == 7) {
    console.log("okelah bener")
  }
  else {
    console.log("yee salah")
  }

// COMPARISON OPERATOR
  // ==  : equal to
  // === : equal value and type
  // !=  : not equal to
  // !== : not equal value or type
  // >   : greater than
  // <   : less than
  // >=  : greater than or equal to
  // <=  : less than or equal to

//LOGICAL OPERATOR
  // !   : not (negasi)
  // &&  : and (kedua statement benar; jika satu salah maka dianggap salah)
  // ||  : or (salah satu atau kedua statement benar; jika satu salah masih dianggap benar)
