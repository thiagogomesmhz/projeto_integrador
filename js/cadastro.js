function cadastrar(){
    let result = document.getElementById("divResult");
    let email = document.getElementById("txtEmail");
    let mensagemErro = "";

    if(email.value == "" || email.value.length < 10 || !EmailValido(email.value)){
        email.classList.add ('erro');
        mensagemErro += "E-Mail Invalido" + "<br/>";
    }else {
        email.classList.remove ('erro')
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
    let email = document.getElementById("txtEmail");    
    email.value = "";
}    

function EmailValido(email) {
    let regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}
