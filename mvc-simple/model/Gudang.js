// Model hanya sekedar entitas
// di dunia nyata, nanti ini biasanya sebuah table di database

const Barang = require("./Barang");

class ModelGudang {
  static #stockBarang = [];

  static tambahBarang(barang) {
    const { name, type } = barang;

    this.#stockBarang.push(new Barang(name, type));
  }

  static hapusBarang(id) {
    this.#stockBarang = this.#stockBarang.filter(b => b.id !== id);
  }

  static listBarang() {
    return this.#stockBarang;
  }

  static listBarangBerdasarkanID(id) {
    return this.#stockBarang.find(barang => barang.id === id);
  }

  // kita perlu ini, karena di controller, list barang melalui #stockBarang
  // jika ada perubahan di Dashboard, Gudang juga aware..
  static updateStockBarang(stock) {
    this.#stockBarang = stock;
  }
}

module.exports = ModelGudang;
