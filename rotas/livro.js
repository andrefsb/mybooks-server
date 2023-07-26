const { Router } = require("express");

const router = Router();

router.get('/', (req, res) =>{
    res.send("Livros")
});

module.exports = router;