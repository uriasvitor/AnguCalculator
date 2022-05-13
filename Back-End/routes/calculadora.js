const router = require("express").Router();
const pool = require("../mariadb");

router.post("/", (req, res) => {
  const { count } = req.body;

  if (/^[0-9\+\-\*/]*$/.test(count)) {
    const calculo = `${eval(count)}`
    pool.getConnection()
      .then((conn) => {
        conn
          .query(`INSERT INTO logcalculos(expressao,resultado,data) VALUES ("${count}","${calculo}","${Date.now()}")`)
          .then((rows) => {
            console.log(rows);
            conn.end();
          })
          .catch((err) => {
            console.log(err);
            conn.end();
          });
      })
      .catch((err) => {});
    res.send(calculo);
  } else {
    res.status(500).send("Erro na expressão!");
  }
});

router.get("/",(req,res)=>{
  pool.getConnection()
      .then((conn) => {
        conn
          .query(`SELECT * FROM logcalculos`)
          .then((rows) => {
            res.send(rows)
            console.log(rows);
            conn.end();
          })
          .catch((err) => {
            console.log(err);
            res.status(500).send("Erro na Conexão");
            conn.end();
          });
      }).catch((err) => {
        res.status(500).send("Erro na Conexão");
      });
})

module.exports = router;
