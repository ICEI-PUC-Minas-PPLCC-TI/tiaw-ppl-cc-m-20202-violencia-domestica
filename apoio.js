//apoios funcoes e bancos de dados
// declara um conjunto inicial de contatos
var ra_apoios_inicial = {
  "data": [
      {
          "id": 1,
          "nome": "Casa 1",
          "sobre": "Casa de acolhimento para jovens adultos que não tenham um lar. Ele se foca em pessoas entre 18 e 25 anos. Pode-se contactar fisicamente ou via internet em seu site.",
          "site": "https://www.casaum.org",
          "cpf": "-",
          "email": "-"
      },
      {
        "id": 2,
        "nome": "Casa Chama",
        "sobre": "Casa Chama é uma rede de acolhimento LGBT. Eles te ajudam e em troca pedem seu voluntariado. Assim, os ajudados, depois, acabam por ajudar. Contato via local físico ou via site.",
        "site": "https://www.casachama.org",
        "cpf": "-",
        "email": "-"
      },
      {
        "id": 3,
        "nome": "ALL OUT",
        "sobre": "ALL OUT é uma organização de nível mundial e não governamental que preza pelo acolhimento LGBT. Eles dão apoio jurídico entre outras ajudas. Sua forma de contato é via site.",
        "site": "https://allout.org/pt",
        "cpf": "-",
        "email": "-"
      },
      {
        "id": 4,
        "nome": "Casa Lucas",
        "sobre": "É uma rede de apoio a crianças abandonadas e seu contato pode ser em local físico ou via site.",
        "site": "http://www.casalucas.org",
        "cpf": "-",
        "email": "-"
      },
  ]
}
// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var ra = JSON.parse(localStorage.getItem('ra_apoio'));
if (!ra) {
    ra = ra_apoios_inicial
};

//funcao para exibir
function formApoios(i) {
  let texto = '';
  // Montar texto HTML dos apoios
  for (i = 0; i < ra.data.length; i++) {
      let ap = ra.data[i]; 
      texto += `
      <div style="background-color: rgba(0, 0, 0, 0.329); padding: 20px; margin: 20px; color: white;">
                    <h1>${ap.nome}</h1>
                    <h3>${ap.sobre}</h3>
                <a href="${ap.site}" target="_blank"><button id="btn_redes" style="font-size: 17px; float: right; margin-top: -30px;">CONTATO</button></a></div>`;}
  // Preencher a DIV com o texto HTML
  $('#apoios').html(texto);
}

//funcao para exibir
function showApoios() {
  let texto = '';
  // Montar texto HTML dos apoios
      for (i = 0; i < 2; i++) {
        let ap = ra.data[i]; 
      texto += `
      <div  style="background-color: rgba(0, 0, 0, 0.329); padding: 10px; margin: 20px;">
      <h3 style="color: white; margin-top: 10px;">
        ${ap.nome}
      </h3>
      </div>`;}
  // Preencher a DIV com o texto HTML
  $('#redes').html(texto);
}

//funcao opara inserir
function insertApoio(apoio) {
  // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
  let novoId = ra.data[ra.data.length - 1].id + 1;
  let novoApoio = {
      "id": novoId,
      "nome": apoio.nome,
      "sobre": apoio.sobre,
      "site": apoio.site,
      "cpf": apoio.cpf,
      "email": apoio.email
  };

  // Insere o novo objeto no array
  ra.data.push(novoApoio);
  ra.size +=1;
  alert("Rede de Apoio inserido com sucesso");

  // Atualiza os dados no Local Storage
  localStorage.setItem('ra_apoio', JSON.stringify(ra));
}


window.onload = () => {
  $(document).ready(function () {
    formApoios(sessionStorage.getItem('id_Apoio'));
  showApoios();
      $("#btn_apoio").click(function () {
        // Verfica se o formulário está preenchido corretamente
        if (!$('#formApoio')[0].checkValidity()) {
          alert("Preencha o formulário corretamente.");
          return;
      }
           // Obtem os valores dos campos do formulário
          let campoNome = document.querySelector("#nomeApoio").value; 
          let campoSobre = document.querySelector("#sobreApoio").value; 
          let campoSite = document.querySelector("#site").value; 
          let campoCPF = document.querySelector("#cpf").value; 
          let campoEmail = document.querySelector("#email").value; 
          let redeAp = { nome: campoNome, 
              sobre: campoSobre, 
              site: campoSite,
              cpf: campoCPF,
              email: campoEmail};

          insertApoio(redeAp);

          // Reexibe os contatos
          showApoios();

          // Limpa o formulario
          $("#formApoio")[0].reset();
      });
});};