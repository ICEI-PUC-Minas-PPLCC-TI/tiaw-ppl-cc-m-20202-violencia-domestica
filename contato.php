<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Contato</title>
    </head>
    <body>
		<h1>Contato</h1>
                    <div id="formulario">
                    <form id="contato" method="POST" action="email.php" >
                        <div class="convite mostrar">
                            <h5>Clique aqui para enviar uma mensagem.</h5>
                            <h5>Clique aqui para fechar o formulário.</h5>
                        </div>
                    <div class="form hidden">
                        <div id="nome">
                            <label id="nome"> Nome * </label>
                            <input type="text" id="nome" name="nome" autocomplete="off" placeholder="Nome" required/>
                        </div>
                        <div id="email">
                            <label id="email"> E-mail * </label>
                            <input type="text" id="email" name="email" autocomplete="off" placeholder="email@dominio.com" required/>
                        </div>
                        <div id="assunto">
                            <label id="assunto"> Assunto </label>
                            <input type="text" name="assunto" id="assunto" autocomplete="off" placeholder="Assunto"/>
                        </div>
                        <div>
                            <p id="conteudo">
                                <textarea name="mensagem" placeholder="Conteúdo*" required></textarea>
                            </p>
                        </div>
                        <p><button class="be" id="formulario" type="submit">Enviar</button></p>
                        <p><button class="bc" id="formulario" type="submit">Cancelar</button></p>
                    </div>
                    </form>
                    </div>
	</body>
</html>