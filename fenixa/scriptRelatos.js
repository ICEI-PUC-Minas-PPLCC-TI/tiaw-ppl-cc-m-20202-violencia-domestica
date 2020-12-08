//garantir que haja vagas fictícias postadas 
if (sessionStorage.getItem('AceitarGatilho') === null) {
  sessionStorage.setItem('AceitarGatilho', 0)} else {
  console.log("local storage preenchido");
}
//relatos funcoes e bancos de dados
// declara um conjunto inicial de contatos
var db_relatos_inicial = {
  "size": 2,
  "data": [
      {
          "id": 1,
          "nome": "Relato 1",
          "categoria": "geral",
          "resumo": "Resumo Violencia Domestica",
          "relato": "Relato completo"
      },
      {
        "id": 2,
        "nome": "Relato 2",
        "categoria": "geral2",
        "resumo": "Resumo Violencia Domestica2",
        "relato": "Relato completo2"
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
  localStorage.setItem('db_contato', JSON.stringify(db));
}
//funcao para exibir
function formRelatos() {
  
  let texto = '';
  // Montar texto HTML dos relatos
      for (i = 0; i < db.size; i++) {
        let relatos = db.data[i]; 
        console.log(db.size);
      texto += `
      <div class="container">
              <div class="top">
              <h1>${relatos.nome} - ${relatos.categoria}</h1>
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
  sessionStorage.setItem("relComent", id);
  // Montar texto HTML dos relatos
        let i = id;
        let relatos = db.data[i]; 
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
