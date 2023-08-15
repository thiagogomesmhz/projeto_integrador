function voltar(){
    // Volta para pagina inicial
    window.location.href = "index.html";
}

function enviar(){

    let countMensagemErro = 0;

    // Busca elementos e zera classes de validação
    let nome = document.getElementById("txtNome");
    nome.classList.remove("form-control-invalid");    
    let validaNome = document.getElementById("validaNome");    
    validaNome.className = "validationMessageOff";
    
    let sobrenome = document.getElementById("txtSobrenome");
    sobrenome.classList.remove("form-control-invalid");
    let validaSobrenome = document.getElementById("validaSobrenome");    
    validaSobrenome.className = "validationMessageOff";

    let telefone = document.getElementById("txtTelefone");
    telefone.classList.remove("form-control-invalid");
    let validaTelefone = document.getElementById("validaTelefone");    
    validaTelefone.className = "validationMessageOff";

    let email = document.getElementById("txtEmail");
    email.classList.remove("form-control-invalid");
    let validaEmail = document.getElementById("validaEmail");    
    validaEmail.className = "validationMessageOff";

    let texto = document.getElementById("txtTexto");
    texto.classList.remove("form-control-invalid");
    let validaTexto = document.getElementById("validaTexto");    
    validaTexto.className = "validationMessageOff";

    // Valida��o dos campos e aplica a classe de campo invalido
    if (nome.value == "" || nome.value.length < 3 ) {
        validaNome.className = 'validationMessage';
        nome.className += ' form-control-invalid';
        countMensagemErro +=1;
    }
    if(sobrenome.value == "" || sobrenome.value.length < 3 ){
        validaSobrenome.className = 'validationMessage';
        sobrenome.className += ' form-control-invalid';
        countMensagemErro +=1;
    }
    if(telefone.value == "" || telefone.value.length < 11 || !TelefoneValido(telefone.value)){
        validaTelefone.className = 'validationMessage';
        telefone.className += ' form-control-invalid';
        countMensagemErro +=1;
    }
    if(email.value == "" || email.value.length < 10 || !EmailValido(email.value)){
        validaEmail.className = 'validationMessage';
        email.className += ' form-control-invalid';
        countMensagemErro +=1;
    }
    if (texto.value == "" || texto.value.length < 3 ) {
        validaTexto.className = 'validationMessage';
        texto.className += ' form-control-invalid';
        countMensagemErro +=1;
    }

    // Caso n�o haja erros exibe sucesso
    if(countMensagemErro == 0){        
        clearCadastro();
        if (confirm("Cadastro Efetivado com sucesso") == true) {
            window.location.href = "index.html";
        }
    }
}

function clearCadastro(){
    // Busca elementos
    let nome = document.getElementById("txtNome");
    let sobrenome = document.getElementById("txtSobrenome");
    let telefone = document.getElementById("txtTelefone");
    let email = document.getElementById("txtEmail");
    let texto = document.getElementById("txtTexto");
    // Limpa o conteudo dos campos preenchidos
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