let buscandoNoticia = false;
let primeiraExecucao = true;
let botaoAtual;

function mostrarMensagem(texto){

    limparConteudoElemento("#mensagem");

    $("#mensagem").html(`
    
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            ${texto}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>

    `)

}

function arrumarLayout(){

    const options = {left:"0"};
    const callback = function(){

        $(this).css("justify-content", "flex-end");
        $("div#noticias").css("display", "flex");

    }

    $("div#seletorDeNoticias").animate(options, 1500, callback);
    $("h3#texto").fadeOut(1500, function(){$(this).remove()});

}

function lidarCliqueBotaoTema(botao, callback){

    if (primeiraExecucao){
        arrumarLayout(); 
        primeiraExecucao = false;
    }   

    if (!buscandoNoticia){

        $("div#noticias").animate({opacity:0},200);
        callback(botao.id, ()=>{
            $("div#noticias").animate({opacity:1},1000);
            
                botaoAtual? $(botaoAtual).removeClass("active") : "";
                botaoAtual = botao; 
                $(botaoAtual).addClass("active");

            });

    }

}

function limparConteudoElemento(elemento){

    $(elemento).html("");

}

//Request:

function buscarNoticias(tema, callback){

    const url = "https://ch4pl1n-noticiasapi.herokuapp.com";

    buscandoNoticia = true;

    fetch(`${url}/${tema}`)
    .then(res => res.json())
    .then(res => res.content)
    .then(noticias=> {

        limparConteudoElemento("div#noticias>ul");

        noticias.forEach(noticia=>{

            $(`<li class = noticia>
                
                <a href = ${noticia.link}>${noticia.nome}</a>
                <p>${noticia.resumo}</p>
                
            </li>`).appendTo("div#noticias>ul")

        })

        buscandoNoticia = false;
        callback();

    })
    .catch(err => {
        console.log(err);
        mostrarMensagem("Não foi possível buscar notícias :(")
    });
    
}

//Input:

$("#temasNoticias").click((event)=>{

    lidarCliqueBotaoTema(event.target, buscarNoticias);

})