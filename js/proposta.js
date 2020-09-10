const buttonSubmit = document.querySelector('.submitButton')


buttonSubmit.addEventListener('click', function (event){
    event.preventDefault()
    function capturar() {
        const nome = document.getElementById('nome').value
        const email = document.getElementById('email').value
        const ideia = document.getElementById('ideia').value
    }
    capturar()
})

