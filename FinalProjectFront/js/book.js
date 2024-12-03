document.getElementById('form-livro').addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('titulo-livro').value;
    const author = document.getElementById('autor-livro').value;
    const price = document.getElementById('preco-livro').value;

    try {
      const response = await fetch('http://localhost:3000/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, author, price }),
      });

      if (response.ok) {
        alert('Cadastro do Livro realizado com sucesso!');
        console.log({title, author, price})
      } else {
        throw new Error();
      }
    } catch {
      alert('Tente realizar novamente o cadastro do livro.');
    }
  });

  document.getElementById('form-livro').addEventListener("reset", (e) =>{
    e.preventDefault();
    window.location.href = 'login.html';
  })