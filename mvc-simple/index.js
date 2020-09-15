// Ini dunia luar...
// Feature2 yang tersedia di API:
// list barang yang statusnya true X
// hapus barang X
// tambah barang X
// update barang berdasarkan id

const fs = require("fs");
const AdminController = require("./controller/Admin");

const password = process.argv[2];
const pathData = "./" + process.argv[3];
const barangBarang = JSON.parse(fs.readFileSync(pathData, "utf8"));

AdminController.tambahBarang(password, barangBarang);
AdminController.tampilkanBarang(password);
AdminController.updateBarangBerdasarkanID(password, 1, "status", true);
AdminController.updateBarangBerdasarkanID(password, 2, "status", true);
AdminController.updateBarangBerdasarkanID(password, 3, "status", true);
AdminController.tampilkanBarang(password);
