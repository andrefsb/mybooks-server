const { Router } = require("express");
const { getLivros, getLivro } = require("../controllers/livro")

const router = Router();

router.get('/', getLivros);

router.get('/:id', getLivro);

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