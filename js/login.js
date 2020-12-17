  const f = document.querySelector('#login');
  console.log(f);
  const u = JSON.parse(localStorage.getItem('customer')) || [];  
  
  f.addEventListener('submit', e => {
    e.preventDefault();
    const email2 = f.email.value;      console.log(email2);
    const password2 = f.password.value;
  
    const exist = u.find(user => user.email === email2 && user.password === password2);
    console.log(exist);
  
    const userC = { id: exist.id,  email: exist.email };
    
    if (exist) {
      localStorage.setItem('userConnected', JSON.stringify(userC));
      location.href = 'checkout1.html';
    } else {
      alert('email or password incorrect');
    }
  });