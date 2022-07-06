const comCarencia = document.querySelector('#comCarencia');
const listaSuspensa = document.querySelector('#listaSuspensa');

//Aparecer/Desaparecer a lista 'com carência'
comCarencia.addEventListener('change', function() {
    if(this.checked) {
        listaSuspensa.removeAttribrute('hidden');
    } else {
        listaSuspensa.setAttribute('hidden', 'hidden');
    }
})