const { Router } = require("express");
const { getLivros } = require("../controllers/livro")

const router = Router();

router.get('/', getLivros);

router.post('/', (req, res) =>{
    res.send("POST Livro")
});

router.patch('/', (req, res) =>{
    res.send("PATCH Livro")
});

router.delete('/', (req, res) =>{
    res.send("DELETE Livro")
});

module.exports = router;