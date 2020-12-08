window.onload = () => {
  $(document).ready(function () {
    //------------------------icones sobre integrantes
    //variaveis
    let icones = document.querySelectorAll("#nos");
    let modal = document.querySelectorAll(".bg");
    let voltar = document.querySelectorAll("#voltarB");
    //percorrer todas as imagens
    for (let i = 0; i < icones.length; i++) {
      //abrir modal
      icones[i].addEventListener("click", function () {
        $(modal[i]).addClass("mostrar");
      });
      //fechar modal
      voltar[i].addEventListener("click", function () {
        $(modal[i]).removeClass("mostrar");
      });
    }

    //-----------------------formulário de contato
    //variaveis
    let janela = document.querySelector(".convite");
    let form = document.querySelector(".form");
    let formulario = document.querySelector("#formulario");
    //abrir formulario
    janela.addEventListener("click", function () {
      $(form).toggleClass("hidden");
      $(formulario).toggleClass("mostrar");
      $(janela).toggleClass("remover");
      $(janela).toggleClass("mostrar");
    });

    //-----------------------formulário de contato (send)
    $("#contato").submit(function (event) {
      event.preventDefault();
      //variaveis
      var post_url = "email.php";
      var request_method = "POST";
      let nome = document.querySelector("#nomeQ").value;
      let email = document.querySelector("#emailQ").value;
      let assunto = document.querySelector("#assuntoQ").value;
      let mensagem = document.querySelector("#mensagemQ").value;
      let dataQ = {
        name: nome,
        email: email,
        assunto: assunto,
        mensagem: mensagem,
      };
      //Ajax para submissão dos dados e mostrar modal de confirmação ou falha
      let modal = document.querySelector("#modal");
      let modal1 = document.querySelector("#modal1");
      let success = document.querySelector(".s");
      let error = document.querySelector(".e");
      let button = document.querySelector("#status");
      $.ajax({ url: post_url, type: request_method, data: dataQ }).done(function (response) {
          //-----------------------modal resultado
          console.log("OKas");
          //alert("sucesso");
          $(success).addClass("mostrar");
          $(modal).addClass("mostrar");
          button.addEventListener("click", function(){
            $(success).removeClass("mostrar");
            $(modal).removeClass("mostrar");
            console.log("deu");
            location.reload();
          });
        })
        .fail(function (response) {
          //-----------------------modal resultado
          console.log("FAIL");
          //alert("erro");
          $(error).addClass("mostrar");
          $(modal1).addClass("mostrar");
          button.addEventListener("click", function(){
            $(error).removeClass("mostrar");
            $(modal1).removeClass("mostrar");
            location.reload();
          });
        });
    }); 
  }); 
};    //end window