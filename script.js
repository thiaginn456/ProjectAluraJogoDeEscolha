const avanca = document.querySelectorAll('.op');

avanca.forEach(buttom => {
    buttom.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'es-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})