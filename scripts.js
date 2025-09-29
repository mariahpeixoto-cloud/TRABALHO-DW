const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passawordConfimation = document.getElementById('password-confirmation');
const tipoPessoa = document.getElementById('tipoPessoa');
const PessoaFisica = document.getElementById('PessoaFisica');
const PessoaJuridica = document.getElementById('PessoaJuridica');
const campoCPF = document.getElementById('campoCPF');
const campoCNPJ = document.getElementById('campoCNPJ');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkImput();
})

function checkImput() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const passawordConfimationValue = passawordConfimation.value;
  const tipoPessoaValue = tipoPessoa.value;
  const PessoaFisicaValue = PessoaFisica.value;
  const PessoaJuridicaValue = PessoaJuridica.value;

  if (usernameValue === '') {
    setErrorFor(username, 'O nome de usuário é obrigatorio');
  } else {
    setSuccessFor(username);
  }

  if (emailValue === '') {
    setErrorFor(email, 'O email é obrigatório');
  } else if (!checkEmail(emailValue)) { setErrorFor(email, 'email inválido'); }
  else {
    setSuccessFor(email);
  }

  if (passwordValue === '') {
    setErrorFor(password, 'Senha obrigatória');
  } else if (passwordValue.length < '8') { setErrorFor(password, 'mínimo oito carácteres') }
  else {
    setSuccessFor(password);
  }

  if (passawordConfimationValue === '') {
    setErrorFor(passawordConfimation, 'Confirmação de senha obrigatórioa');
  } else if (passawordConfimationValue !== passwordValue) { setErrorFor(passawordConfimation, "as senhas não conferem") }
  else {
    setSuccessFor(passawordConfimation);
  }
  if (tipoPessoaValue === 'pf') {

    if (PessoaFisicaValue === '') {
      setErrorFor(PessoaFisica, 'CPF obrigatório');
    } else if (PessoaFisicaValue.length !== 11) {
      setErrorFor(PessoaFisica, 'CPF deve conter exatamente 11 dígitos numéricos');
    } else {
      setSuccessFor(PessoaFisica);
    }
  } else if (tipoPessoaValue === 'pj') {
    if (PessoaJuridicaValue === '') {
      setErrorFor(PessoaJuridica, 'CNPJ obrigatório');
    } else if (PessoaJuridicaValue.length !== 14) {
      setErrorFor(PessoaJuridica, 'CNPJ deve conter exatamente 14 dígitos numéricos');
    } else {
      setSuccessFor(PessoaJuridica);
    }
  } else {

  }

}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  small.innerText = message;

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