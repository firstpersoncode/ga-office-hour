// Ini dunia luar...
// Feature2 yang tersedia di API:
// list barang yang statusnya true X
// hapus barang X
// tambah barang X
// update barang berdasarkan id

// in cmd: node index.js <password> <filter>

const fs = require("fs");
const AdminController = require("./controller/Admin");

const password = process.argv[2];
const filter = process.argv[3];

const barangBarang = JSON.parse(fs.readFileSync("./data.json", "utf8"));

AdminController.tambahBarang(password, barangBarang);
AdminController.tampilkanBarang(password, filter);
AdminController.updateBarangBerdasarkanID(password, 1, "status", true);
AdminController.updateBarangBerdasarkanID(password, 2, "status", true);
AdminController.updateBarangBerdasarkanID(password, 3, "status", true);
AdminController.updateBarangBerdasarkanID(password, 4, "status", true);
AdminController.updateBarangBerdasarkanID(password, 5, "status", true);
AdminController.updateBarangBerdasarkanID(password, 8, "status", true);
AdminController.updateBarangBerdasarkanID(password, 9, "status", true);
AdminController.tampilkanBarang(password, filter);
AdminController.hapusBarangBarang(password, [2, 3]);
AdminController.tampilkanBarang(password, filter);
