// DB
function database() {
  var sqlite3 = require("sqlite3").verbose();
  var db = new sqlite3.Database(":memory:");
  db.run("CREATE TABLE user (username TEXT, password TEXT)");

  return db;
}

module.exports = database;
