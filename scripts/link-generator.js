const submitButton = document.getElementById("generate-link");
let link = "";

submitButton.addEventListener('click',()=>{
    const countryCode = document.getElementById("country-code").value;
    const phoneNumber = document.getElementById("phone-number").value;
    const defaultMessage = document.getElementById("message").value;
    
    link = `https://wa.me/${countryCode}${phoneNumber}?text=${defaultMessage}`;
    console.log(link);
});