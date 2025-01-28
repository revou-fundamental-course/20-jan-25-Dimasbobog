// Ini file js

document.addEventListener("DOMContentLoaded", function () {
    // Ambil elemen-elemen dari DOM
    const beratBadanInput = document.getElementById("input-berat-badan");
    const tinggiBadanInput = document.getElementById("input-tinggi-badan");
    const hitungButton = document.querySelector("button.bg-cadet-blue");
    const resetButton = document.querySelector("button.bg-black");
    const resultBmi = document.getElementById("result-bmi");
   
    // Fungsi untuk menghitung BMI
    function hitungBMI() {
        const beratBadan = parseFloat(beratBadanInput.value);
        const tinggiBadan = parseFloat(tinggiBadanInput.value) / 100; // Konversi cm ke meter

        if (isNaN(beratBadan) || isNaN(tinggiBadan) || tinggiBadan <= 0) {
            alert("Mohon masukkan berat badan dan tinggi badan anda.");
            return;
        }

        const bmi = (beratBadan / (tinggiBadan * tinggiBadan)).toFixed(2);

        // Menentukan kategori BMI
        let kategori = "";
        if (bmi < 18.5) {
            kategori = "Kekurangan berat badan";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            kategori = "Normal (Sehat)";
        } else if (bmi >= 25 && bmi < 29.9) {
            kategori = "Kelebihan berat badan";
        } else {
            kategori = "Obesitas";
        }

        // Tampilkan hasil BMI dan kategori
        resultBmi.textContent = `${bmi} (${kategori})`;
    }

    // Fungsi untuk mereset form
    function resetForm() {
        beratBadanInput.value = "";
        tinggiBadanInput.value = "";
        resultBmi.textContent = "0";
    }

    // Event listener untuk tombol hitung dan reset
    hitungButton.addEventListener("click", function (event) {
        event.preventDefault(); // Mencegah reload halaman
        hitungBMI();
    });

    resetButton.addEventListener("click", function (event) {
        event.preventDefault(); // Mencegah reload halaman
        resetForm();
    });
});
