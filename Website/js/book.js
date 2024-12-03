let livros = [];

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
      livros.push({ title, author, price });
      console.log('Livros cadastrados:', livros);
      alert('Cadastro do Livro realizado com sucesso!');
    } else {
      throw new Error('Erro no cadastro');
    }
  } catch (error) {
    console.error(error);
    alert('Tente realizar novamente o cadastro do livro.');
  }
});

// Evento de reset do formulário
document.getElementById('form-livro').addEventListener("reset", (e) => {
  e.preventDefault();
  window.location.href = 'login.html';
});
