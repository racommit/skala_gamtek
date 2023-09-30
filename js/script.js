console.log("JS TEST, HAS BEEN STARTED!"); //test apakah javascript sudah berfungsi atau belum

var selectedValue1, selectedIndex2, selectedIndex3, akhir;

var initialSelections = {
  select1: document.getElementById("select1").value,
  select2: document.getElementById("select2").value,
  select3: document.getElementById("select3").value,
};

function validateInteger(input) {
  // Menghapus karakter selain digit dan titik desimal dari nilai input
  input.value = input.value.replace(/[^\d.]/g, "");

  // Memastikan hanya satu titik desimal yang diperbolehkan
  var dotCount = (input.value.match(/\./g) || []).length;
  if (dotCount > 1) {
    input.value = input.value.slice(0, -1);
  }
}

function proses(selectedId) {
  var panjang = document.getElementById("panjang");
  var nilaiPanjang = parseFloat(panjang.value);
  console.log(nilaiPanjang);

  var tampil = document.getElementById("hasil");

  var select1 = document.getElementById("select1");
  var select2 = document.getElementById("select2");
  var select3 = document.getElementById("select3");

  // Menonaktifkan semua elemen select
  select1.disabled = true;
  select2.disabled = true;
  select3.disabled = true;

  // Mengaktifkan elemen select yang dipilih
  document.getElementById(selectedId).disabled = false;

  var selectedIndex1 = select1.selectedIndex;
  var selectedIndex2 = select2.selectedIndex;
  var selectedIndex3 = select3.selectedIndex;

  selectedValue1 = select1.options[selectedIndex1].value;
  selectedValue2 = select2.options[selectedIndex2].value;
  selectedValue3 = select3.options[selectedIndex3].value;

  var akhir1 = parseFloat(selectedValue1);
  var akhir2 = parseFloat(selectedValue2);
  var akhir3 = parseFloat(selectedValue3);

    console.log(akhir1,akhir2,akhir3);
  function isFloat(value) {
        return typeof value === "number" && !isNaN(value) && value % 1 !== 0;
  }

  //   if(nilaiPanjang != Number.isInteger(nilaiPanjang)){
  //     tampil.innerHTML = "MASUKKAN NILAI DENGAN BENAR";
  //   }
  if ((isFloat(nilaiPanjang) || Number.isInteger(nilaiPanjang)) && selectedValue1 > 0) {
    akhir = nilaiPanjang * akhir1;
    tampil.innerHTML = akhir % 1 !== 0 ? akhir.toFixed(2) + "cm" : Math.floor(akhir) + "cm";
  } else if (
    (isFloat(nilaiPanjang) || Number.isInteger(nilaiPanjang)) && selectedValue2 > 0
  ) {
    akhir = nilaiPanjang * akhir2;
    tampil.innerHTML = akhir % 1 !== 0 ? akhir.toFixed(2) + "cm" : Math.floor(akhir) + "cm";
  } else if (
    isFloat(nilaiPanjang) || Number.isInteger(nilaiPanjang) &&
    selectedValue3 > 0
  ) {
    akhir = nilaiPanjang / akhir3;
    tampil.innerHTML = akhir % 1 !== 0 ? akhir.toFixed(2) + "cm" : Math.floor(akhir) + "cm";
  } else {
    tampil.innerHTML = "masukkin nilai yang bener bro";
  }
}

function reset() {
  // Mendapatkan elemen-elemen select
  var select1 = document.getElementById("select1");
  var select2 = document.getElementById("select2");
  var select3 = document.getElementById("select3");
  var tampil = document.getElementById("hasil");

  // Mengatur kembali nilai opsi ke nilai awal
  select1.value = initialSelections.select1;
  select2.value = initialSelections.select2;
  select3.value = initialSelections.select3;

  // Menonaktifkan semua elemen select
  select1.disabled = false;
  select2.disabled = false;
  select3.disabled = false;

  tampil.innerHTML = "Masukkan nilai";
}
