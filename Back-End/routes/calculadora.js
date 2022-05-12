const router = require("express").Router()

router.post("/", (req, res) => {
    let { numb1, numb2, operador } = req.query

    numb1 = Number(numb1)
    numb2 = Number(numb2)

    if(!numb1 || !numb2){
        res.status(500).send("Os Numeros nao podem ser nulos")
        return
    }

    let calcResult = null

    if(operador === "+") calcResult = numb1 + numb2
    else if(operador === "-") calcResult = numb1 - numb2
    else if(operador === "/") calcResult = numb1 / numb2
    else if(operador === "*") calcResult = numb1 * numb2
    else {
        res.status(500).send("Deu Merda no operador")
        return
    }


    res.send(`${calcResult}`)
})

module.exports = router