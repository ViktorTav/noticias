const routes = require("express").Router();
const pegarNoticias = require("../controllers/pegarNoticias");
const rotasAceitas = ["tecnologia","politica","saude","educacao"];

routes.use(function(req,res,next){

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-type", "text/javascript");

    next();

})

routes.param("tipoNoticia",(req,res,next,value)=>{

    const rota = rotasAceitas.find(rotaAceita => rotaAceita == value);

    if (rota){

        req.tema = rota;
        next();
        
    } else{

        res.status(404).send("Pagina não encontrada!");

    }

})

routes.get("/:tipoNoticia", (req,res)=>{

    pegarNoticias(req.tema)
    .then(retorno=> res.status(200).send(retorno))
    .catch(err=>{

        console.log(err);

        res.status(503).send({message:"Não foi possível buscar noticias"});

    })

})

routes.get("/", (req,res)=>{

    res.status(401).send("Não Autorizado!");

})

module.exports = routes;