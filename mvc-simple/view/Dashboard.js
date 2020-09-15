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
      const { name, type } = barangBarang[i];
      const newBarang = new Barang(name, type);
      Gudang.tambahBarang(newBarang);
    }
  }

  static ambilBarangDariGudang(filter) {
    const barangBarang = Gudang.listBarang(filter);

    return barangBarang;
  }

  static hapusBarangDiGudang(ids) {
    const barangBarang = Gudang.listBarang();

    for (let i = 0; i < ids.length; i++) {
      // ini untuk menemukan barang didalam barangBarang, sesuai ID
      const selectedBarang = barangBarang.find(b => b.id === ids[i]);

      if (selectedBarang) {
        Gudang.hapusBarang(ids[i]);
      }
    }
  }

  static updateBarangDiGudang(id, field, value) {
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
      // update to = [
      //   1,
      //   3,
      //   3
      // ]
      // how to update:
      // index = 1
      // arr[index] = 3
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
  }
}

module.exports = Dashboard;
