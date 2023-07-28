const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, apagaLivro }= require("../services/livro")

function getLivros(req, res){
    try{
        const livros = getTodosLivros();
        res.send(livros)
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function getLivro(req, res){
    try{
        const id = req.params.id;

        if(id && Number(id)) {
            const livro = getLivroPorId(id)
             res.send(livro)
         }else{
            res.status(422);
            res.send("Invalid Id.")
         }

    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function postLivro(req, res){
    try{
        const livroNovo = req.body;

        if(req.body.nome) {
             insereLivro(livroNovo);
             res.status(201);
             res.send("Book successfully created!")
         }else{
            res.status(422);
            res.send("Field name is mandatory.")
         }
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function patchLivro(req, res){
    try{
        const id = req.params.id;

        if(id && Number(id)) {
            const body = req.body;
            modificaLivro(body, id);
            res.send("Book successfully altered!")
         }else{
            res.status(422);
            res.send("Invalid Id.")
         }
       
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivro(req, res){
    try{
        const id = req.params.id;

        if(id && Number(id)) {
            apagaLivro(id);
            res.send("Book successfully deleted!");
         }else{
            res.status(422);
            res.send("Invalid Id.")
         }
        
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

module.exports={
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}