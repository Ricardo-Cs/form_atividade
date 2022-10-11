<?php
    include('conexao.php');

    $nome = $_POST['nome'];
    $senha = $_POST['senha'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $sexo = ['sexo'];
    $data_nascimento = $_POST['data_nascimento'];
    $cidade = ['cidade'];
    $estado = ['estado'];
    $endereco = ['endereco'];

    
    $sql = "INSERT INTO usuarios(nome, senha, email, telefone, nascimento, ) VALUES ('$nome', '$senha', '$email', '$telefone', '$data_nascimento')";

    if(mysqli_query($conexao, $sql))
        echo 'Cadastrado  com sucesso';
    else    
        echo "Erro!";

    mysqli_close($conexao);
?>