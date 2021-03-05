let buscandoNoticia = false;
let primeiraExecucao = true;
let botaoAtual;

function arrumarLayout(){

    const options = {left:"0"};
    const callback = function(){

        $(this).css("justify-content", "flex-end");
        $("div#noticias").removeClass("hide");

    }

    $("div#seletorDeNoticias").animate(options, 1500, callback);
    $("h3#texto").fadeOut(1500, function(){$(this).remove()});

}

function lidarCliqueBotaoTema(botao){

    if (primeiraExecucao){
        arrumarLayout(); primeiraExecucao = false;
    }   

    if (!buscandoNoticia){

        $("div#noticias").animate({opacity:0},200);
        buscarNoticias(botao.id, ()=>{
            $("div#noticias").animate({opacity:1},1000);
            
                botaoAtual? $(botaoAtual).removeClass("active") : "";
                botaoAtual = botao; 
                $(botaoAtual).addClass("active")

            });

    }

}

function limparUlNoticias(){

    $("div#noticias>ul").html("");

}

//Request:

function buscarNoticias(tema, callback){

    const url = "https://ch4pl1n-noticiasapi.herokuapp.com";

    buscandoNoticia = true;

    fetch(`${url}/${tema}`)
    .then(res => res.json())
    .then(res => res.content)
    .then(noticias=> {

        limparUlNoticias()

        noticias.forEach(noticia=>{

            $(`<li class = noticia>
                
                <a href = ${noticia.link}>${noticia.nome}</a>
                <p>${noticia.resumo}</p>
                
            </li>`).appendTo("div#noticias>ul")

        })

        buscandoNoticia = false;
        callback();

    })
    .catch(err => console.log(err));
    
}

//Input:

$("#temasNoticias").click((event)=>{

    lidarCliqueBotaoTema(event.target);

})