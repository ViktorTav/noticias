# Noticias

* https://viktortav.github.io/noticias/

## Descrição:

* Site que traz as noticias mais recentes do portal de notícias [G1](https://g1.globo.com/) em 4 temas que podem ser escolhidos pelo usuário:

  - Tecnologia
  - Saúde 
  - Educação 
  - Política (Tá okay?)

## Conteúdo do Repositório:

Este repositório contém a Api criada em Node.Js e o código do Site, caso queira executar o projeto por si próprio.

Para instalar as dependências use `npm install` e para iniciar a api use `npm start`. A mesma será iniciada na porta `4000`.

## Desenvolvimento:

Este Projeto foi desenvolvido para um desafio de programação em um servidor do [Discord](https://disboard.org/server/743482187365613641). O objetivo do desafio era a construção de [webscraper](https://pt.wikipedia.org/wiki/Coleta_de_dados_web) em qualquer linguagem, que pegaria as cinco notícias mais recentes de temas pré-definidos (já citados acima), em algum portal de notícias, onde o usuário poderia escolher algum deles. As notícias poderiam ser entregues em forma de arquivo .txt ou em um display, como um terminal ou site. O prazo de entrega do mesmo eram 5 dias.

Eu optei por fazer uma API em Node.Js, apesar de eu nunca ter criado uma ou mesmo ter desenvolvido algo com webscraping, mas me comprometi a aprender.

Criar um webscraper se mostrou ser mais fácil do que eu pensava. Utilizando o Axios, para acessar o HTML do site, e o Cheerio, para manipular esse HTML, em pouco tempo eu já tinha o mesmo pronto, só faltando criar as rotas com o Express. A API ficou pronta logo no primeiro dia e fiz o seu deploy no Heroku, que inclusive levou algum tempo para eu entender como fazia, além de alguns rages também. 

A parte que eu acreditava ser a mais simples e menos demorada, acabou sendo o que levou o maior tempo de desenvolvimento: Mostrar as noticias na tela.

"Como?", você deve estar se pergutando agora e falando, "mas era só oolocar um pouco de HTML aqui, um CSS ali, uma chamada para API com Javascript e pronto!. É... Isso é verdade, porém eu tenho a mania de tentar fazer coisas que eu não sei, como fazer bons layouts, e isso me levou um bom tempo, fazendo o site passar por 3 a 4 layouts, pra no final eu optar a fazer algo mais simples mesmo, mas que eu até gostei.

## Futuras funcionalidades:

* Envio de notícias pelo e-mail

## Thank you!

![Marcos Jeeves diz: Thank you!](https://media1.tenor.com/images/b37f90c715bc2dd1ca46c825aec889e8/tenor.gif?itemid=19943938)
