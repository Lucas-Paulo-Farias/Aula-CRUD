const form = document.getElementById('user_form')

form.addEventListener('submit', e =>{
    e.preventDefault()
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value

    cadastrarUsuario(nome, email)
})

function cadastrarUsuario(nome, email) {
    fetch('/api/users', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({nome, email})
    })
    .then (() => {
        form.reset()
    })
}

//PASSAR NOMES PARA O HTML