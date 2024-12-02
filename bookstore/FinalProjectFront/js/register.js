document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      let url = "http://localhost:3000/register"
      const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });


      if (response.ok) {
        alert('Registro realizado com sucesso!');
        window.location.href = 'login.html';
      } else {
        throw new Error();
      }
    } catch {
      alert('Tente novamente se registrar');
    }
  });