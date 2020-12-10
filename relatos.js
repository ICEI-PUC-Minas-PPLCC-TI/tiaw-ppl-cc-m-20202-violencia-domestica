//comentarioss funcoes e bancos de dados
// declara um conjunto inicial de contatos
var cm_comentarios_inicial = {
  "size": 2,
  "data": [
      {
          "idRelato" : "0",
          "id": 1,
          "nome": "pessoa",
          "comentario": "tocante!"
      },
      {
        "idRelato" : "1",
        "id": 2,
        "nome": "nome",
        "comentario": "tocante!"
    },
  ]
}
// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var cm = JSON.parse(localStorage.getItem('cm_comentario'));
if (!cm) {
    cm = cm_comentarios_inicial
};

//funcao para exibir
function formComentario() {
  let texto = '';
  // Montar texto HTML dos relatos
      for (i = 0; i < cm.size; i++) {
        if(sessionStorage.getItem('id_Relato') == cm.data[i].idRelato){
        let coment = cm.data[i]; 
      texto += `
      <div style="background-color: rgba(0, 0, 0, 0.37); padding: 10px; color: white; margin: 10px; margin-top:20px;">
                    <p>
                        <h6>${coment.nome}</h6> ${coment.comentario}
                    </p>
                    </div>`;}}
  // Preencher a DIV com o texto HTML
  $('#comentario').html(texto);
}

//funcao opara inserir
function insertComentario(comentario) {
  // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
  let novoId = cm.data[cm.data.length - 1].id + 1;
  let novoComentario = {
      "idRelato": sessionStorage.getItem("relComent"),
      "id": novoId,
      "nome": comentario.nome,
      "comentario": comentario.comentario
  };

  // Insere o novo objeto no array
  cm.data.push(novoComentario);
  cm.size +=1;
  alert("Comentário inserido com sucesso");

  // Atualiza os dados no Local Storage
  localStorage.setItem('cm_comentario', JSON.stringify(cm));
}

window.onload = () => {
  $(document).ready(function () {
  showRelato(sessionStorage.getItem("id_Relato"));

  formComentario();
      $("#btn_coment").click(function () {
           // Obtem os valores dos campos do formulário
          let campoNome = document.querySelector("#nomeComent").value; 
          let campoComentario = document.querySelector("#coment").value; 
          let comentario = { nome: campoNome, 
              comentario: campoComentario };

          insertComentario(comentario);

          // Reexibe os contatos
          formComentario();

          // Limpa o formulario
          $("#formComent")[0].reset();
      });
});};