function cadastrar(){
    let countMensagemErro = 0;

    // Busca elementos e zera classes de validação
    let email = document.getElementById("txtEmail");
    email.classList.remove("form-control-invalid");    
    let validaEmail = document.getElementById("validaEmail");    
    validaEmail.className = "validationMessageOff";

    if(email.value == "" || email.value.length < 10 || !EmailValido(email.value)){
        validaEmail.className = 'validationMessageCenter';
        email.className += ' form-control-invalid';
        countMensagemErro += 1;
    }

    if(countMensagemErro == 0){
        clearCadastro();
        if (confirm("Cadastro Efetivado com sucesso") == true) {
            window.location.href = "index.html";
        }
    }
}

function clearCadastro(){
    // Busca elemento e Limpa o conteudo
    let email = document.getElementById("txtEmail");    
    email.value = "";
}    

function EmailValido(email) {
    let regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}
