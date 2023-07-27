const { Router } = require("express");

const router = Router();

router.get('/', (req, res) =>{
    try{
        res.send("GET Livros")
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
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