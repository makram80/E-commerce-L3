const form = document.querySelector('#register');

const users = JSON.parse(localStorage.getItem('customer')) || [];
//const retrieve_data  = localStorage.getItem('key') ? JSON.parse(localStorage.getItem('key')) : [];

form.addEventListener('submit', e => {
  e.preventDefault();
  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;
  const random = Math.floor(Math.random() * 1000);

  const data = {
    name,
    email,
    password,
    id: random, };

  const unique = users.find(user => user.email === email);

  if (!unique) {
    users.push(data);
    localStorage.setItem('customer', JSON.stringify(users));
    form.reset();
    //location.reload()
    //location.href = 'register.html';
  } else {
    alert('email already in use');
    form.reset();
  }

});


  
