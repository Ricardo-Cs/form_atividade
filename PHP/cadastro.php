<?php
    $bd_servidor = "localhost";
    $bd_name = "cadastro";
    $bd_usuario = "root";
    $$bd_senha = "";

    $conexao = mysqli_connect($bd_servidor, $bd_usuario, $bd_senha, $bd_name);

    if(!$conexao)
      die("Problemas com a conexão com o banco de dados. Descrição do problema: " . mysqli_connect_error());
    echo "Conexão realizada com sucesso!";
    //Conetando com o bando de dados

    //Inserindo dados no banco
    $nome = $_POST['nome'];
    $senha = $_POST['senha'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $sexo = ['genero'];
    $data_nascimento = $_POST['data_nascimento'];
    $estado = ['estado'];
    $cidade = ['cidade'];
    $endereco = ['endereco'];

    
    $sql = "INSERT INTO usuarios(nome, senha, email, telefone, genero, data_nascimento, estado, cidade, endereco) VALUES ('$nome', '$senha', '$email', '$telefone', '$sexo', '$data_nascimento', '$estado', '$cidade', '$endereco')";

    if(mysqli_query($conexao, $sql))
        echo 'Cadastrado  com sucesso';
    else    
        echo "Erro!";

    mysqli_close($conexao);
?>