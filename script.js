let frases = [
  `Não fui eu que ordenei a você? Seja forte e corajoso! Não se apavore nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar:     Josué 1:9`,
  
  `Tudo posso naquele que me fortalece: 
  Filipenses 4:13`,

 `Busquem, pois, em primeiro lugar o Reino de Deus e a sua justiça, e todas essas coisas serão acrescentadas a vocês: 
  Mateus 6:33`,

  `Mesmo quando eu andar por um vale de trevas e morte, não temerei perigo algum, pois tu estás comigo; a tua vara e o teu cajado me protegem: 
  Salmos 23:4`,

 `Venham a mim, todos os que estão cansados e sobrecarregados, e eu darei descanso a vocês:
  Mateus 11:28`,

  `Entregue o seu caminho ao Senhor; confie nele, e ele agirá:
     Salmos 37:5`,

     ` E conhecerão a verdade, e a verdade os libertará:
      João 8:32`,

      `Devido ao aumento da maldade, o amor de muitos esfriará,
      Mateus 24:12`,

      `Deus não é homem para que minta,
      nem filho de homem
      para que se arrependa.
      Acaso ele fala e deixa de agir?
      Acaso promete e deixa de cumprir?
      Números 23:19`,

      ` A tua palavra é lâmpada
        que ilumina os meus passos
        e luz que clareia o meu caminho:
        Salmos 119:105`,

        `Se o mundo os odeia, tenham em mente que antes odiou a mim:
          João 15:18, `,

          `Sobre tudo o que se deve guardar, guarda o teu coração, porque dele procedem as fontes da vida:
           Provérbios 4:23`,


          `Eu fiz de você luz para os gentios, para que você leve a salvação até os confins da terra:
          Atos 13:47`,

          `Mil poderão cair ao seu lado;
          dez mil, à sua direita,
          mas nada o atingirá:
          Salmos 91:7`, 

          ` Pois nada é impossível para Deus:
            Lucas 1:37`,

            `E tudo o que pedirem em oração, se crerem, vocês receberão:
            Mateus 21:22`,


            `Não se deixem enganar: de Deus não se zomba. Pois o que o homem semear isso também colherá:
               Gálatas 6:7 `,


               `Falando novamente ao povo, Jesus disse: "Eu sou a luz do mundo. Quem me segue, nunca andará em trevas, mas terá a luz da vida":
              João 8:12`,

              `É necessário que ele cresça e que eu diminua:
              João 3:30`,

              `Porque vivemos por fé, e não pelo que vemos:
                2 Coríntios 5:7`,

                `Pois, que adianta ao homem ganhar o mundo inteiro e perder a sua alma?:
                Marcos 8:36`,

                `Nós amamos porque ele nos amou primeiro.
                1 João 4:19`,

                `Ele fortalece o cansado
                e dá grande vigor ao que está sem forças.
                Isaías 40:29`,


                `Que diremos, pois, diante dessas coisas? Se Deus é por nós, quem será contra nós?
                Romanos 8:31 `,

                 `Vocês ouvirão falar de guerras e rumores de guerras, mas não tenham medo. É necessário que tais coisas aconteçam, mas ainda não é o fim.
                Mateus 24:6`,
                
                `O coração em paz dá vida ao corpo,
                mas a inveja apodrece os ossos.
                Provérbios 14:30`,

                `porque para mim o viver é Cristo e o morrer é lucro.
                Filipenses 1:21`,

                `E disse-lhes: "Vão pelo mundo todo e preguem o evangelho a todas as pessoas.
                Marcos 16:15`,

                `Jesus is King.`,
                





]

function gerarFrase(){
    let frase = frases[
      Math.floor(Math.random() *       
      frases.length)
    ]
    
    document.querySelector('#frase-gerada').textContent=frase;
}