function lanjut() {
  let nama = document.getElementById("nama").value;
  if(nama === "") return alert("Isi dulu namanya ya!");

  document.getElementById("judul").innerHTML =
    "Hai " + nama + ", kamu pacar terbaik aku ❤️";

  pindah("page1", "page2");
}

function bukaPage(n) {
  if(n === 1) pindah("page2", "pageTerima");
  if(n === 2) pindah("page2", "pageFoto");
  if(n === 3) pindah("page2", "pageHarapan");
}

function kembali() {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById("page2").classList.add("active");
}

function pindah(a, b) {
  document.getElementById(a).classList.remove("active");
  document.getElementById(b).classList.add("active");
}