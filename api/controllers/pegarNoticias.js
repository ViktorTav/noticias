const axios = require("axios");
const cheerio = require("cheerio");

const siteNoticias = "https://g1.globo.com/"

const paginaNoticias = {

    tecnologia: "economia/tecnologia",
    politica: "politica",
    saude: "ciencia-e-saude",
    educacao: "educacao",

}

const pegarNoticias = (tema)=>{

    const url = `${siteNoticias}${paginaNoticias[tema]}`;
    const noticias = [];

    return axios(url)
    .then(res=>{

        const html = res.data;
        const $ = cheerio.load(html);

        const bodyNoticias = $(".feed-post-body");

        let noticiasBuscadas = 0;

        bodyNoticias.each(function(){

            if (noticiasBuscadas > 4) return;
            
            if ($(this).find(".feed-post-body-resumo").text() != ""){

                const a = $(this).find(".feed-post-body-title>div>a");

                const nome = a.text();
                const link = a.attr("href");

                const resumo = $(this).find(".feed-post-body-resumo").text();

                noticias.push({nome: nome,link: link,resumo: resumo});
                noticiasBuscadas++;

            }            
    
        })

        const retorno = {

            stauts: "ok",
            content: noticias

        }

        return retorno;

    })
    .catch(err => {
       throw new Error("Erro ao buscar notícias: " + err); 
    })


}

module.exports = pegarNoticias;