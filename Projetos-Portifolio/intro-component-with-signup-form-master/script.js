let nome = document.querySelector("#name");
let sobrenome = document.querySelector('#last-name');
let email = document.querySelector("#email");
let senha = document.querySelector("#password");
let enviar = document.querySelector("#submit");

let divNome = document.querySelector('.nome');
let divSobrenome = document.querySelector('.sobrenome');
let divEmail = document.querySelector('.email');
let divSenha = document.querySelector('.senha');

let pErronome = document.querySelector('.erroNome');
let pErroSobrenome = document.querySelector('.erroSobreNome')
let pErroEmail = document.querySelector(".erroEmail");
let pErroSenha = document.querySelector('.erroSenha');

enviar.addEventListener('click', (e) => {
  e.preventDefault();


  if (!nome.value) {
    nome.style.border = '2px solid red';
    divNome.children[1].style.display = 'inline-block';
    pErronome.innerHTML = 'First Name cannot be empty'


  } else {
    nome.style.border = "1px solid var(--borderColor)"
    divNome.children[1].style.display = 'none'
    pErronome.innerHTML = '';

  }


  if (!sobrenome.value) {
    sobrenome.style.border = '2px solid red';
    divSobrenome.children[1].style.display = 'inline-block';
    pErroSobrenome.innerHTML = 'Last Name cannot be empty'



  } else {
    sobrenome.style.border = "1px solid var(--borderColor)";
    divSobrenome.children[1].style.display = 'none'
    pErroSobrenome.innerHTML = ''


  }

  if (!email.value) {
    email.style.border = '2px solid red';
    divEmail.children[1].style.display = 'inline-block'
    pErroEmail.innerHTML = 'Email cannot be empty'

  } else {
    email.style.border = "1px solid var(--borderColor)"
    divEmail.children[1].style.display = 'none'
    pErroEmail.innerHTML = ''

  }

  if (!senha.value) {
    senha.style.border = '2px solid red';
    divSenha.children[1].style.display = 'inline-block';
    pErroSenha.innerHTML = 'Password cannot be empty'

  } else {
    senha.style.border = "1px solid var(--borderColor)"
    divSenha.children[1].style.display = 'none'
    pErroSenha.innerHTML = '';
  }

})
