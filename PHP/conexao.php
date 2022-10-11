<?php
    $bd_servidor = "localhost";
    $bd_name = "cadastro";
    $bd_usuario = "root";
    $$bd_senha = "";

    $conexao = mysqli_connect($bd_servidor, $bd_usuario, $bd_senha, $bd_name);

    if(!$conexao)
      die("Problemas com a conexão com o banco de dados. Descrição do problema: " . mysqli_connect_error());
    echo "Conexão realizada com sucesso!";
?>