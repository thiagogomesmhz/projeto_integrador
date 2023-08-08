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

    if (nome.value == "" || nome.value.length < 4 ) {
        nome.classList.add ('erro');
        mensagemErro += "Nome Invalido" + "<br/>";
    }else {
        nome.classList.remove ('erro')
    }

    if(sobrenome.value == "" || sobrenome.value.length < 4 ){
        sobrenome.classList.add ('erro');
        mensagemErro += "Sobrenome Invalido" + "<br/>";
    }else {
        sobrenome.classList.remove ('erro')
    }

    if(telefone.value == "" || telefone.value.length < 11 || !TelefoneValido(telefone.value)){
        telefone.classList.add ('erro');
        mensagemErro += "Telefone Invalido" + "<br/>";
    }else {
        telefone.classList.remove ('erro')
    }

    if(email.value == "" || email.value.length < 10 || !EmailValido(email.value)){
        email.classList.add ('erro');
        mensagemErro += "E-Mail Invalido" + "<br/>";
    }else {
        email.classList.remove ('erro')
    }

    if(texto.value == "" || texto.value.length < 4 ) {
        texto.classList.add ('erro')
        mensagemErro += "Texto Invalido" + "<br/>";
    }else {
        texto.classList.remove ('erro')
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