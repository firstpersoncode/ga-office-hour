// Model hanya sekedar entitas
// di dunia nyata, nanti ini biasanya sebuah table di database

class ModelBarang {
  static idAutoInc = 0;

  constructor(name, type, status = false) {
    this.id = 0;
    this.name = name;
    this.type = type;
    this.status = status;

    this.createID();
  }

  updateName(name) {
    this.name = name;
  }

  updateType(type) {
    this.type = type;
  }

  updateStatus(status) {
    this.status = status;
  }

  createID() {
    ModelBarang.idAutoInc++;
    this.id = ModelBarang.idAutoInc;
  }
}

module.exports = ModelBarang;
