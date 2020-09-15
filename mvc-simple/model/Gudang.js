// Model hanya sekedar entitas
// di dunia nyata, nanti ini biasanya sebuah table di database

class ModelGudang {
  static #stockBarang = [];

  static tambahBarang(barang) {
    this.#stockBarang.push(barang);
  }

  static hapusBarang(id) {
    this.#stockBarang = this.#stockBarang.filter(b => b.id !== id);
  }

  static listBarang(filterType) {
    return this.#stockBarang.filter(barang =>
      filterType ? barang.type === filterType : barang
    );
  }

  // kita perlu ini, karena di controller, list barang melalui #stockBarang
  // jika ada perubahan di Dashboard, Gudang harus aware..
  static updateStockBarang(stock) {
    this.#stockBarang = stock;
  }
}

module.exports = ModelGudang;
