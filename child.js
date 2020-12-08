const API_KEY = '647689560b6945638cfd2c0fd9e88e4c';

function exibeNoticias () {
    let divTela = document.getElementById('container');
    let texto = '';

    // Montar texto HTML das noticias
    let dados = JSON.parse (this.responseText);
    for (i=0; i< 10; i++) {
        let noticia = dados.articles[i];
        let data = new Date (noticia.publishedAt);


        texto = texto + `
        <div class="top">
                    <img src="${noticia.urlToImage}" alt="">
                    <h2>${noticia.title}</h2>
                    <h6>
                    ${data.toLocaleDateString ()} - 
                    ${noticia.source.name} - 
                    ${noticia.author}<br>
                    </h6>
                <p>${noticia.content} <a href="${noticia.url}">Leia mais ...</p>
                </div>`;
    };

    // Preencher a DIV com o texto HTML
    divTela.innerHTML = texto;
}

function executaPesquisa () {
    let query = document.getElementById('txtPesquisa').value;

    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeNoticias;
    xhr.open ('GET', `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`);
    xhr.send ();
}

document.getElementById ('btn_sub').addEventListener ('click', executaPesquisa);