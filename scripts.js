const form= document.getElementById('form');
const username= document.getElementById('username');
const email= document.getElementById('email');
const password= document.getElementById('password');
const passawordConfimation= document.getElementById('password-confirmation');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkImput();
})

 function checkImput(){
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passawordConfimationValue = passawordConfimation.value;

   if (usernameValue === ''){
      setErrorFor(username, 'O nome de usuário é obrigatorio');
   } else {
    setSuccessFor(username);
   }

   if (emailValue === ''){
    setErrorFor(email, 'O email é obrigatório');
   } else if (!checkEmail(emailValue)){ setErrorFor(email, 'email inválido');}
   else{
  setSuccessFor(email);
   }

   if (passwordValue === ''){
     setErrorFor(password, 'Senha obrigatória');
   } else if(passwordValue.length < '8') { setErrorFor(password, 'mínimo oito carácteres') }
   else{
     setSuccessFor(password);
   }

   if (passawordConfimationValue === ''){
     setErrorFor(passawordConfimation, 'Confirmação de senha obrigatórioa');
   } else if (passawordConfimationValue !== passwordValue ){ setErrorFor (passawordConfimation, "as senhas não conferem")}
   else{
     setSuccessFor(passawordConfimation);
   }
 }

 function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
 }


 function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

 }










function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }