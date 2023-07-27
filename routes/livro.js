const { Router } = require("express");
const { getLivros, getLivro, postLivro } = require("../controllers/livro")

const router = Router();

router.get('/', getLivros);

router.get('/:id', getLivro);

router.post('/', postLivro);

router.patch('/', (req, res) =>{
    res.send("PATCH Livro")
});

router.delete('/', (req, res) =>{
    res.send("DELETE Livro")
});

module.exports = router;