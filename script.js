
const credenciaisAtualizadas = {
    urlImagem:'www.google.com',
    email:'anapaula@gmail.com',
    nome:'Ana'
}

const botaoAtualizar = document.getElementById('botaoAtualizar');
botaoAtualizar.addEventListener('click', () => {
    event.preventDefault()
    
        localStorage.setItem('urlImagem', JSON.stringify(credenciaisAtualizadas.urlImagem));
        localStorage.setItem('email', JSON.stringify(credenciaisAtualizadas.email));
        localStorage.setItem('nome', JSON.stringify(credenciaisAtualizadas.nome));
});

const botaoRemover = document.getElementById('botaoRemover');
botaoRemover.addEventListener('click', () => {
    event.preventDefault()
    
        localStorage.removeItem('urlImagem', JSON.stringify(credenciaisAtualizadas.urlImagem));
        localStorage.removeItem('email', JSON.stringify(credenciaisAtualizadas.email));
        localStorage.removeItem('nome', JSON.stringify(credenciaisAtualizadas.nome));
});