const router = require("express").Router()

router.post("/", (req, res) => {
    const {count} = req.body

    if(/^[0-9\+\-\*/]*$/.test(count)){
        res.send(`${eval(count)}`)
    }else{
        res.status(500).send("Erro na expressão!")
    }
})

module.exports = router