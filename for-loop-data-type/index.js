// ambil data dari database
var products = [
  {
    id: 1,
    name: "Sabun cuci"
  },
  {
    id: 4,
    name: null
  },
  {
    id: 2,
    name: "Sapu"
  },
  {
    id: 3,
    name: "Laptop"
  },
  {
    id: 4,
    name: ["test", "product", 4]
  },
  {
    id: 5,
    name: 5
  },
  {
    id: 6
  }
];

// ambil element ul di html kita
var ulEl = document.getElementById("products");
//
// // fungsi untuk mengisi element ul yang diatas dengan product dari database
function listProduct(i) {
  if (!products[i].name) {
    products[i].name = "Tidak ada nama product";
  } else if (Array.isArray(products[i].name)) {
    products[i].name = products[i].name.join(" ");
  } else if (typeof products[i].name === "number") {
    products[i].name = "Product " + products[i].name;
  }

  var liEl = document.createElement("LI");
  liEl.innerHTML =
    "ID:" + products[i].id + "</br>" + "Name:" + products[i].name;

  ulEl.appendChild(liEl);
}

// looping fungsi yang diatas selama i lebih kecil dari jumlah product didalam array products
for (var i = 0; i < products.length; i++) {
  listProduct(i);
}
