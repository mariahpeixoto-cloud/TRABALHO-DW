const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');
const tipoPessoa = document.getElementById('tipoPessoa');
const PessoaFisica = document.getElementById('PessoaFisica');
const PessoaJuridica = document.getElementById('PessoaJuridica');
const campoCPF = document.getElementById('campoCPF');
const campoCNPJ = document.getElementById('campoCNPJ');

tipoPessoa.addEventListener('change', () => {
const tipo = tipoPessoa.value;
if (tipo === 'pf') {
campoCPF.style.display = 'block';
campoCNPJ.style.display = 'none';
clearField(PessoaJuridica);
} else if (tipo === 'pj') {
campoCNPJ.style.display = 'block';
campoCPF.style.display = 'none';
clearField(PessoaFisica);
} else {
campoCPF.style.display = 'none';
campoCNPJ.style.display = 'none';
clearField(PessoaFisica);
clearField(PessoaJuridica);
}
});


form.addEventListener('submit', (e) => {
e.preventDefault();
checkInput();
});


function clearField(inputEl) {
inputEl.value = '';
const parent = inputEl.parentElement;
parent.className = 'form-control';
const small = parent.querySelector('small');
if (small) small.innerText = '';
}


function checkInput() {
const usernameValue = username.value.trim();
const emailValue = email.value.trim();
const passwordValue = password.value.trim();
const passwordConfirmationValue = passwordConfirmation.value.trim();
const tipoPessoaValue = tipoPessoa.value;
const PessoaFisicaValue = PessoaFisica.value.trim();
const PessoaJuridicaValue = PessoaJuridica.value.trim();


if (usernameValue === '') {
setErrorFor(username, 'O nome de usuário é obrigatório');
} else {
setSuccessFor(username);
}


if (emailValue === '') {
setErrorFor(email, 'O email é obrigatório');
} else if (!checkEmail(emailValue)) {
setErrorFor(email, 'Email inválido');
} else {
setSuccessFor(email);
}


if (passwordValue === '') {
setErrorFor(password, 'Senha obrigatória');
} else if (passwordValue.length < 8) {
setErrorFor(password, 'Mínimo de 8 caracteres');
} else {
setSuccessFor(password);
}


if (passwordConfirmationValue === '') {
setErrorFor(passwordConfirmation, 'Confirmação de senha obrigatória');
} else if (passwordConfirmationValue !== passwordValue) {
setErrorFor(passwordConfirmation, 'As senhas não conferem');
} else {
setSuccessFor(passwordConfirmation);
}

if (tipoPessoaValue === 'pf') {
if (PessoaFisicaValue === '') {
setErrorFor(PessoaFisica, 'CPF obrigatório');
} else if (!/^\d{11}$/.test(PessoaFisicaValue)) {
setErrorFor(PessoaFisica, 'CPF deve conter exatamente 11 dígitos numéricos');
} else {
setSuccessFor(PessoaFisica);
}
} else if (tipoPessoaValue === 'pj') {
if (PessoaJuridicaValue === '') {
setErrorFor(PessoaJuridica, 'CNPJ obrigatório');
} else if (!/^\d{14}$/.test(PessoaJuridicaValue)) {
setErrorFor(PessoaJuridica, 'CNPJ deve conter exatamente 14 dígitos numéricos');
} else {
setSuccessFor(PessoaJuridica);
}
}
}


function setErrorFor(input, message) {
const formControl = input.parentElement;
const small = formControl.querySelector('small');
if (small) small.innerText = message;
formControl.className = 'form-control error';
}

function setSuccessFor(input) {
const formControl = input.parentElement;
formControl.className = 'form-control success';
}


function checkEmail(email) {
return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
email
);
}



