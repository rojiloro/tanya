var tanya = true;
while (tanya) {
  // inisiasi awal
  var sholat = prompt("apakah sholatmu khusyuk? (iya/tidak) ");
  // kondisi
  if (sholat == "iya") {
    alert("Hati menjadi tenang");
  } else if (sholat == "tidak") {
    alert("Hati Menjadi gelisah");
  } else {
    alert("Masukan iya atau tidak!");
  }

  tanya = confirm("tanya dirimu lagi?");
}
