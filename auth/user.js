var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");

const encrypt = require("./helpers/encrypt");
const decrypt = require("./helpers/decrypt");

const database = require("./helpers/db");
const db = database();

router.post("/register", function(req, res) {
  const { username, password } = req.body;

  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      // Store hash in your password DB.
      db.run("INSERT INTO user VALUES (?, ?)", username, hash);
    });
  });

  res.send({ token: encrypt(username) });
});

router.post("/login", function(req, res) {
  const { username, password } = req.body;

  var result = db.get(
    "SELECT * FROM user WHERE user.username = ?",
    [username],
    (err, row) => {
      if (err) {
        res.status(500);
        return res.send(err);
      }

      if (!row || !row.username) {
        res.status(404);
        return res.send("user not found");
      }

      // check if password hased in DB match with password provided by user
      bcrypt.compare(password, row.password, function(err, result) {
        if (result) {
          res.send({ token: encrypt(row.username), row });
        } else {
          res.send("wrong password");
        }
      });
    }
  );
});

router.get("/me", function(req, res) {
  if (!req.headers["x-token-key"]) {
    res.status(403);
    return res.send("unathorized");
  }

  const token = req.headers["x-token-key"];

  try {
    var decoded = decrypt(token);

    var result = db.get(
      "SELECT * FROM user WHERE user.username = ?",
      [decoded.data],
      (err, row) => {
        if (err) {
          res.status(500);
          return res.send(err);
        }

        if (!row || !row.username) {
          res.status(404);
          return res.send("user not found");
        }

        res.send({ row });
      }
    );
  } catch (err) {
    res.status(403);
    return res.send("unathorized");
  }
});

module.exports = router;
