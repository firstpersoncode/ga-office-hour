// bahwa, inilah yang terhubung dengan Applikasi lain (client) (end user)
// didunia nyata, bakal disebut sebagai: API
// hanya ini yang kita expose ke dunia luar

// Controller berisi feature2 yang diminta sama client / end user
// list barang yang statusnya true X
// hapus barang X
// tambah barang X
// update barang berdasarkan id

const Dashboard = require("../view/Dashboard");
const password = "Halo";

class Admin {
  static #verifikasiPassword = pass => {
    if (pass !== password) {
      console.error("Password salah!");
      return false;
    }

    return true;
  };

  // yang boleh menampilkan barang, harus sediakan password
  static tampilkanBarang(pass, filter) {
    // list
    const isVerified = this.#verifikasiPassword(pass);
    if (!isVerified) {
      return;
    }

    const barangBarang = Dashboard.ambilBarangDariGudang(filter);
    // hanya barang yang status nya true yang akan ditampilkan
    let barangBarangYangAkanDitampilkan = [];
    for (let i = 0; i < barangBarang.length; i++) {
      if (barangBarang[i].status === true) {
        barangBarangYangAkanDitampilkan.push(barangBarang[i]);
      }
    }

    console.log(
      "Barang yang tersedia di gudang:",
      barangBarangYangAkanDitampilkan
    );
  }

  // yang boleh menambahkan barang harus menyediakan password
  // barang akan dicek sebelum dimasukkan ke Dashboard
  static tambahBarang(pass, barangBarang) {
    const isVerified = this.#verifikasiPassword(pass);
    if (!isVerified) {
      return;
    }

    if (!Array.isArray(barangBarang)) {
      return console.error("Barang2 harus berupa array");
    }

    for (let i = 0; i < barangBarang.length; i++) {
      if (!barangBarang[i].name) {
        console.error("Barang harus memiliki property 'name'");
        break;
      }

      if (!barangBarang[i].type) {
        console.error("Barang harus memiliki property 'type'");
        break;
      }
    }

    Dashboard.tambahBarangKeGudang(barangBarang);
  }

  // yang boleh menghapus barang2 harus menyediakan password
  static hapusBarangBarang(pass, ids) {
    const isVerified = this.#verifikasiPassword(pass);
    if (!isVerified) {
      return;
    }

    Dashboard.hapusBarangDiGudang(ids);
  }

  // yang boleh mengupdate barang harus menyediakan password
  static updateBarangBerdasarkanID(pass, id, field, value) {
    const isVerified = this.#verifikasiPassword(pass);
    if (!isVerified) {
      return;
    }

    Dashboard.updateBarangDiGudang(id, field, value);
  }
}

module.exports = Admin;
