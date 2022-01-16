let opening = document.getElementById("opening");

let container = document.getElementById('container1');
function start() {
  let box1 = document.getElementById("box1");
  let box2 = document.getElementById("box2");
  box2.style.display = "block";
  let getNama = document.identitas.namamu.value;
  let yabang = document.getElementById("tampilNama");
  yabang.innerHTML = `Halo ${getNama}`;
  box1.style.display = "none";
  console.log(getNama);
  console.log(box1);
  opening.play();
}
function nggak(min, max) {
  let box2 = document.getElementById("box2");
  let margin = Math.floor(Math.random() * (max - min) + min);
  box2.style.marginTop = `${margin}px`;
}
function iya() {
  let box2 = document.getElementById("box2");;
  document.getElementById("video").style.display = "block";
  let video = document.getElementById("video");
  opening.pause();
  box2.style.display = "none";
  video.play();

  setTimeout(()=>{
    let video = document.getElementById("video");
    let music = document.getElementById('music');
    video.style.display = 'none';
    let jam = document.getElementById('jam');
    box3.style.display = 'block'
    music.play();






  }, 22000);
}

setInterval(() => {
  let namaBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  let tanggall = document.getElementById('tanggal');
  let waktu = new Date();
  let jamm = waktu.getHours();
  let menit = waktu.getMinutes();
  let detik = waktu.getSeconds();
  let tanggal = waktu.getDate();
  let bulan = waktu.getMonth()
  let tahun = waktu.getFullYear();
  let bulann = namaBulan[bulan];
  let ucapan;
  if(jam < 10){
    jamm = `0${jam}`;
  }
  if(menit < 10){
    menit = `0${menit}`;
  }
  if(detik < 10){
    detik = `0${detik}`;
  }

  if(jamm > 00){
    ucapan = "Tengah malam";
  }if(jamm > 04){
    ucapan = "Pagi"
  }if(jamm > 10){
    ucapan = "Siang";
  }if(jamm > 15){
    ucapan = "Sore";
  }if(jamm > 18){
    ucapan = "Petang";
  }if(jamm > 19){
    ucapan = "Malam"
  }
  let getNama = document.identitas.namamu.value;
  document.getElementById('quotenya').innerHTML = `Hai ${getNama} selamat ${ucapan}`


  jam.innerHTML = `${jamm} : ${menit} : ${detik}`;
  tanggall.innerHTML = `${tanggal} ${bulann} ${tahun}`;

}, 1000);
