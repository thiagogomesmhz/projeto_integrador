function voltar(){
    window.location.href = "index.html";
}

function enviar(){
    let result = document.getElementById("divResult");
    let nome = document.getElementById("txtNome");
    let sobrenome = document.getElementById("txtSobrenome");
    let telefone = document.getElementById("txtTelefone");
    let email = document.getElementById("txtEmail");
    let texto = document.getElementById("txtTexto");
    let mensagemErro = "";

    if (nome.value == "" || nome.value.length < 3 ) {
        mensagemErro += "Nome Invalido" + "<br/>";
    }
    if(sobrenome.value == "" || sobrenome.value.length < 3 ){
        mensagemErro += "Sobrenome Invalido" + "<br/>";
    }
    if(telefone.value == "" || telefone.value.length < 11 || !TelefoneValido(telefone.value)){
        mensagemErro += "Telefone Invalido" + "<br/>";
    }
    if(email.value == "" || email.value.length < 10 || !EmailValido(email.value)){
        mensagemErro += "E-Mail Invalido" + "<br/>";
    }
    if (texto.value == "" || texto.value.length < 3 ) {
        mensagemErro += "Texto Invalido" + "<br/>";
    }

    result.innerHTML = "";
    if(mensagemErro!=""){
        result.innerHTML+="<span style='text-align:center'>" + mensagemErro + "</span>";            
    }else{
        clearCadastro();
        if (confirm("Cadastro Efetivado com sucesso") == true) {
            window.location.href = "index.html";
        }
    }
}

function clearCadastro(){
    let nome = document.getElementById("txtNome");
    let sobrenome = document.getElementById("txtSobrenome");
    let telefone = document.getElementById("txtTelefone");
    let email = document.getElementById("txtEmail");
    let texto = document.getElementById("txtTexto");
    nome.value = "";
    sobrenome.value = "";
    telefone.value = "";
    email.value = "";
    texto.value = "";
}    

function EmailValido(email) {
    let regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

function TelefoneValido(telefone){
    let regex = /^\([1-9]{2}\)[0-9]{4,5}-[0-9]{4}$/;
    return regex.test(telefone);
}