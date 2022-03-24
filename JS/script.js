form_button = document.getElementById("formulario-btn")
nome = document.getElementById("Nome")
erro_nome = document.getElementById("erro_nome")
erro_nome2 = document.getElementById("erro_nome2")
erro_nome.classList.add("somir")
erro_nome2.classList.add("somir")
email = document.getElementById("Email")
erro_email = document.getElementById("erro_email")
erro_email2 = document.getElementById("erro_email2")
erro_email.classList.add("somir")
erro_email2.classList.add("somir")
msg = document.getElementById("mensagem")
erro_msg = document.getElementById("erro_msg")
erro_msg.classList.add("somir")

form_button.addEventListener("click",function(event){
    event.preventDefault()
    if (validaEmail() == true && validaNome() == true || validaMsg() == true){
        enviaEmail()
    }
});

function validaNome(){
    if (nome.value == ""){
        erro_nome2.classList.remove("somir")
        return false
    } else {
        erro_nome2.classList.add("somir")
        if (nome.value.indexOf(" ") == -1){
            erro_nome.classList.remove("somir")
            return false
        } else {
            erro_nome.classList.add("somir")
            return true
        }
    }
}

function validaEmail(){
    if (email.value == ""){
        erro_email2.classList.remove("somir");
        return false
    } else{
        erro_email2.classList.add("somir");
        if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
            erro_email.classList.remove("somir")
            return false
        } else {
            if (email.value.indexOf(" ") != -1){
                erro_email.classList.remove("somir")
                return false
            } else {
                erro_email.classList.add("somir")
                return true    
            }
        }
    }
}   

function validaMsg(){
    if (msg.value == ""){
        erro_msg.classList.remove("somir")
        return false;
    } else {
        erro_msg.classList.add("somir")
        return true;
    }
}

function enviaEmail(){
    console.log("Felicidade é viver comigo todo dia")
}