const jwt = require("jsonwebtoken");
const SECRET_KEY = require("./constant");

function decrypt(token) {
  const data = jwt.verify(token, SECRET_KEY);

  return data;
}

module.exports = decrypt;
