const { Router } = require("express");

const router = Router();

router.get('/', (req, res) =>{
    res.send("GET Livros")
});

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