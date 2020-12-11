//garantir que haja vagas fictícias postadas 
if (sessionStorage.getItem('AceitarGatilho') === null) {
  sessionStorage.setItem('AceitarGatilho', 0)} else {
  console.log("local storage preenchido");
}
//relatos funcoes e bancos de dados
// declara um conjunto inicial de contatos
var db_relatos_inicial = {
  "size": 4,
  "data": [
      {
          "id": 1,
          "nome": "Jovem de 21 anos de Içara teve 40% do corpo queimado pelo ex-companheiro.",
          "categoria": "mulheres",
          "resumo": "O homem, que era atencioso e carinhoso no começo foi gradualmente tomando controle da vida da jovem, até que o controle virou violência.",
          "relato": "No começo, o homem era extremamente romântico e cuidadoso. Ao passar do tempo, começou a dar presentes em troca de pequenas concessões:“essa saia é muito curta”, “o decote está demais”. Após um certo tempo, pediu a senha das redes sociais, chegou a um ponto que a roupa que eu ia colocar tinha que pedir para ele. Após questionar o namorado por uma mensagem recebida por ele, Vanessa foi seriamente agredida por seu ex-namorado. </br> Fonte: https://www.nsctotal.com.br/noticias/violencia-domestica-conheca-historias-de-mulheres-que-lutaram-contra-a-morte"
      },
      {
        "id": 2,
        "nome": "'Meu príncipe virou um monstro', conta bancária vítima de violência doméstica",
        "categoria": "mulheres",
        "resumo": "No mês da mulher, trabalhadora revela parte do que sofreu durante anos e espera servir de alerta para outras possíveis vítimas; Sindicato deu apoio jurídico.",
        "relato": "No início do relacionamento, ele era um príncipe. Mas, com o tempo, começaram aparecer as primeiras cenas de ciúmes e agressões. Eu sofria calada essa violência física e psicológica. Fui afastada dos amigos e da família e, por isso, ninguém sabia o que eu estava passando. Minha relação com ele virou um círculo vicioso. Se ele estivesse mal, me agredia. Se acordava bem, me pedia desculpas e dizia me amar. E assim fui levando essa situação por anos.”  </br> Fonte: https://spbancarios.com.br/03/2018/meu-principe-virou-um-monstro-conta-bancaria-vitima-de-violencia-domestica"
      },
      {
        "id": 3,
        "nome": "Agressões, ameaças, injúria: veja relatos de vítimas na delegacia recordista de casos de violência contra mulher no RJ",
        "categoria": "mulheres",
        "resumo": "G1 passou um dia na Deam de Caxias, onde mais de 300 mulheres registraram algum tipo de violência por mês no ano passado. Segundo dados do ISP, foram 3,8 mil casos em 2018.",
        "relato": "“Ontem, ele [seu companheiro] me deu um soco na cabeça e hoje ele puxou a faca e veio para cima de mim. Eu corri para o quintal, comecei a gritar ajuda só que ninguém veio. Eu subi na laje e lá tem como os vizinhos verem. Ele não subiu, ficou em casa com a neném no colo. Eu fiquei lá em cima e liguei para a polícia”, disse a mulher. </br> “Ele me vê como se eu fosse um animal. Eu tenho que fazer todas as vontades dele, não posso usar um short curto, não posso interagir com colegas, família. Eu não posso nem visitar a minha mãe, tenho que ficar trancada dentro de casa e fazer todas as vontades dele”. </br> Fonte: https://g1.globo.com/rj/rio-de-janeiro/noticia/2019/04/18/agressoes-ameacas-injuria-veja-relatos-de-vitimas-na-delegacia-recordista-de-casos-de-violencia-contra-mulher-no-rj.ghtml"
      },
      {
        "id": 4,
        "nome": "‘Tinha medo do que iam pensar de mim’, diz homem vítima de violência doméstica.",
        "categoria": "homens",
        "resumo": "Mark Kirkpatrick foi atacado repetidas vezes pela namorada com martelo e garrafa; segundo polícia e ONGs inglesas, estigma ainda é barreira para que homens denunciem violência.",
        "relato": "Mark Kirkpatrick, de 30 anos, foi encontrado em uma rua do condado de Lancashire, no noroeste da Inglaterra, sete meses atrás, depois que sua ex-namorada Gemma Hollings, de 37, o atacou usando uma estaca, um martelo e uma garrafa.“Os homens provavelmente sentem medo de denunciar porque têm receio do que as pessoas vão pensar. Não ouvimos isso frequentemente sobre os homens, mas eles também não merecem sofrer. Ninguém merece – nem homens, nem mulheres”, disse Kirkpatrick à BBC. </br> Fonte: http://g1.globo.com/mundo/noticia/2014/12/tinha-medo-do-que-iam-pensar-de-mim-diz-homem-vitima-de-violencia-domestica.html"
      },
  ]
}
// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_relato'));
if (!db) {
    db = db_relatos_inicial
};

//funcao opara inserir
function insertRelato(relato) {
  // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
  let novoId = db.data[db.data.length - 1].id + 1;
  let novoRelato = {
      "id": novoId,
      "nome": relato.nome,
      "categoria": relato.categoria,
      "resumo": relato.resumo,
      "relato": relato.relato
  };

  // Insere o novo objeto no array
  db.data.push(novoRelato);
  db.size +=1;
  alert("Contato inserido com sucesso");

  // Atualiza os dados no Local Storage
  localStorage.setItem('db_relato', JSON.stringify(db));
}
//funcao para exibir
function formRelatos() {
  
  let texto = '';
  // Montar texto HTML dos relatos
      for (i = 0; i < db.size; i++) {
        let relatos = db.data[i]; 
      texto += `
      <div class="container">
              <div class="top">
              <h1>${relatos.nome}</h1>
              <h3> ${relatos.resumo}
              </h3>
              <p style="display:none;"> ${relatos.relato} </p>
              <a href="relatosCompletos.html" id="butt_rel" onclick="sessionStorage.setItem('id_Relato', ${i});"><button type="button" class="btn btn-outline-dark button_r">Saiba Mais</button></a>
              </div>
          </div>`;}
  // Preencher a DIV com o texto HTML
  $('#relatosjs').html(texto);
}

//funcao para exibir
function showRelato(id) {
  
  let texto = '';
  // Montar texto HTML dos relatos
        let relatos = db.data[id]; 
        console.log(id);

      texto += `
      <section class="container-fluid tituloRelato">
          <div class="container">
              <div class="top">
              <div class="fb-share-button" data-href="https://fenixa-app.herokuapp.com/relatosCompletos.html" data-layout="button_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Compartilhar</a></div>
                   <h1>${relatos.nome} - ${relatos.categoria}</h1>
              </div>
          </div>
      </section>
      <section class="container-fluid imagemRelato">
          <div class="container">
          </div>
      </section>

      <section class="container-fluid Relato">
              <div class="container">
              <div class="top">
              <p> ${relatos.relato} </p>
              </div>
          </div>
      </section>`;
  // Preencher a DIV com o texto HTML
  $('#preencheRel').html(texto);
}

window.onload = () => {
  $(document).ready(function () {
    //----------------------------RELATOS
    //caso aceite uma vez, fica salvo
    if (sessionStorage.getItem("AceitarGatilho") != "1") {
      //variáveis (modal e botão continuar)
      let modal = document.getElementById("modal");
      let continuar = document.getElementById("button");
      //função janela modal, só acontece se existir modal
      if (modal) {
        //adiciona classe mostrar
        $(modal).addClass('mostrar');
        //evento clique em continuar
        modal.addEventListener("click", (e) => {
          if(e.target.value == "Continuar"){
            //remove classe e armazena dados
              $(modal).removeClass("mostrar");
              sessionStorage.setItem("AceitarGatilho",1);
          }
        });
      }
      //se clicar em continuar remove classe e aloca decisão
      $(continuar).click(function aceita(){
        $(modal).removeClass('mostrar');
      });
    }
    //-----------------------formulário relatos
    //variaveis
    let form = document.querySelector("#abrir_form");
    let buts = document.querySelector(".button_r");
    //abrir formulario
    buts.addEventListener("click", function () {
      $(form).toggleClass("hide");
    });
    //chama funções
   
      // Adiciona funções para tratar os eventos 
      // Reexibe os contatos
      formRelatos();
      $("#btn_rel").click(function () {
          // Verfica se o formulário está preenchido corretamente
          if (!$('#formRel')[0].checkValidity()) {
              alert("Preencha o formulário corretamente.");
              return;
          }

          // Obtem os valores dos campos do formulário
          let campoNome = document.querySelector("#nome").value; 
          let campoCategoria = document.querySelector("#categoria").value; 
          let campoResumo = document.querySelector("#resumoR").value; 
          let campoRelato = document.querySelector("#relatoR").value; 
          let relato = { nome: campoNome, 
              categoria: campoCategoria,
              resumo: campoResumo,
              relato: campoRelato };

          insertRelato(relato);

          // Reexibe os contatos
          formRelatos();

          // Limpa o formulario
          $("#formRel")[0].reset();
      });
  });
};
