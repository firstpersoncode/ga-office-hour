// view lebih sebagai aggregator, atau sebagai feature yang akan mengolah Model2
// di dunia nyata, biasanya ini sebagai front end untuk mengolah aplikasi kita dan data2 yang ada di aplikasi
const Gudang = require("../model/Gudang");
const Barang = require("../model/Barang");

class Dashboard {
  static tambahBarangKeGudang(barangBarang) {
    if (!barangBarang.length) {
      return console.error("Harus ada isinya");
    }

    if (barangBarang.length > 10) {
      return console.error("Limit barang2 hanya boleh 10");
    }

    for (let i = 0; i < barangBarang.length; i++) {
      Gudang.tambahBarang(barangBarang[i]);
    }

    // console.log("Barang2 berhasil dimasukkan ke gudang");
  }

  static tampilkanBarang() {
    const barangBarang = Gudang.listBarang();
    if (!barangBarang.length) {
      return console.error("Tidak ada barang2 di gudang, segera isi!");
    }

    // console.log("Barang2 di gudang:", barangBarang);
    return barangBarang;
  }

  static hapusBarang(ids) {
    const barangBarang = Gudang.listBarang();

    for (let i = 0; i < ids.length; i++) {
      const selectedBarang = barangBarang.find(b => b.id === ids[i]);

      if (selectedBarang) {
        Gudang.hapusBarang(ids[i]);
      }
    }

    console.log("Barang2 berhasil dihapus");
  }

  static updateBarang(id, field, value) {
    let barangBarang = Gudang.listBarang();
    // ini untuk menemukan barang didalam barangBarang, sesuai ID
    const selectedBarang = barangBarang.find(b => b.id === id);
    if (selectedBarang) {
      // yang ini untuk menemukan posisi barang (posisi barang di dalam Array barangBarang), yang nantinya dipake untuk update Array barangBarang dengan benar

      // contoh logic yg dipake
      // var arr = [
      //   1,
      //   2,
      //   3
      // ]
      // [
      //   1,
      //   3,
      //   3
      // ]
      // arr[1] = 3
      const selectedBarangIndex = barangBarang.findIndex(
        b => b.id === selectedBarang.id
      );

      if (field === "name") {
        selectedBarang.updateName(value);
      } else if (field === "type") {
        selectedBarang.updateType(value);
      } else if (field === "status") {
        selectedBarang.updateStatus(value);
      }

      barangBarang[selectedBarangIndex] = selectedBarang;
    }

    Gudang.updateStockBarang(barangBarang);
    console.log("Barang ID: " + id + " berhasil diupdate");
  }
}

module.exports = Dashboard;
