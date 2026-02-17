// Caixas de exibição dos dados

const PhoneNumberBox = document.getElementById('exib-phone-number');
const MessageBox = document.getElementById('exib-message');

// inputs

const PhoneNumber = document.getElementById('phone-number');
const Message = document.getElementById('message');

// Funções para mudança de texto

const ChangePhoneNumberText = ()=>{PhoneNumberBox.innerText = PhoneNumber.value};
const ChangeMessageText = ()=>{MessageBox.innerText = Message.value};