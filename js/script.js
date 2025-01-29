document.addEventListener("DOMContentLoaded", function () {
    // Ambil elemen yang diperlukan
    const form = document.querySelector("form");
    const beratBadanInput = document.getElementById("input-berat-badan");
    const tinggiBadanInput = document.getElementById("input-tinggi-badan");
    const usiaInput = document.getElementById("input-Usia");
    const genderInputs = document.getElementsByName("gender");
    const resultBMI = document.getElementById("result-bmi");
    const resetButton = document.querySelector(".bg-black");

    // Fungsi menghitung BMI
    function hitungBMI() {
        const berat = parseFloat(beratBadanInput.value);
        const tinggi = parseFloat(tinggiBadanInput.value) / 100; // Ubah cm ke meter

        if (isNaN(berat) || isNaN(tinggi) || tinggi <= 0 || berat <= 0) {
            alert("Silakan masukkan berat dan tinggi badan anda.");
            return;
        }

        const bmi = (berat / (tinggi * tinggi)).toFixed(2);
        resultBMI.textContent = bmi;
    }

    //Ttombol hitung BMI
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah halaman reload saat submit
        hitungBMI();
    });

    // Tombol reset
    resetButton.addEventListener("click", function (event) {
        event.preventDefault(); // Mencegah reload
        beratBadanInput.value = "";
        tinggiBadanInput.value = "";
        usiaInput.value = "";
        resultBMI.textContent = "0";
    });
});
