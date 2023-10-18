function Angka(){
    // Memasukkan sebuah angka
    let input = prompt("Masukkan sebuah angka:");
    
    // Mengkonversi input ke tipe data number
    let angka = parseFloat(input);
    
    // Mengecek apakah angka lebih besar dari 10
    if (angka > 10) {
        alert("Angka yang Anda masukkan lebih besar dari 10");
    } else if (angka < 10) {
        alert("Angka yang Anda masukkan lebih kecil dari 10");
    } else {
        alert("Angka yang Anda masukkan sama dengan 10");
    }
    }
    const tombol = document.getElementById("Masuk")
    tombol.addEventListener("click", Angka)
