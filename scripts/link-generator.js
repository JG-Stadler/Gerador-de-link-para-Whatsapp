const submitButton = document.getElementById("generate-link");
const ShowLinkBox = document.getElementById('show-link');
const CopyBTN = document.getElementById("copy-link");
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
    ShowLinkBox.innerText = link;
});

// Botão para copiar o link

CopyBTN.addEventListener("click",()=>{
    if (!link) {
       alert("Gere o link primeiro!");
    return;
    }

    navigator.clipboard.writeText(link);
    alert("Link copiado!");
});