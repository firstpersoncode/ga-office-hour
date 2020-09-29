const jwt = require("jsonwebtoken");
const SECRET_KEY = require("./constant");

function encrypt(data) {
  const token = jwt.sign(
    {
      data
    },
    SECRET_KEY
  );

  return token;
}

module.exports = encrypt;
