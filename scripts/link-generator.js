const submitButton = document.getElementById("generate-link");
const ClipboardAlertWindow = document.querySelector(".clipboard-alert");//Janela de alerta da clipboard
const BlurDiv = document.getElementById("blur"); //Div para borrar a tela

let link = "";

submitButton.addEventListener('click',()=>{
    const countryCode = document.getElementById("country-code").value;
    const phoneNumber = document.getElementById("phone-number").value;
    const defaultMessage = document.getElementById("message").value;
    if(phoneNumber == ""){
        alert("Digite seu telefone antes de gerar o link");
        return;
    }
    
    link = `https://wa.me/${countryCode}${phoneNumber}?text=${defaultMessage}`;
    navigator.clipboard.writeText(link); // Função pora copiar o link para a clipboard
    
    ClipboardAlertWindow.classList.add("clipboard-alert-window-open"); //Adição da classe para abrir a janela
    const showLink = document.getElementById("show-final-link");
    showLink.innerText = link;

    BlurDiv.classList.add("blur");
});

const CloseWindowBTN = document.getElementById("close-window"); //Botão para fechar a janela 
CloseWindowBTN.addEventListener("click",()=>{
    ClipboardAlertWindow.classList.remove("clipboard-alert-window-open");
    BlurDiv.classList.remove("blur");
});