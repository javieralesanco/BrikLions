document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('formularioDePaco').addEventListener('submit', (event) => {
        event.preventDefault();
        const usuario = document.getElementById('usuario').value;
        const contraseña = document.getElementById('contraseña').value;
        if (usuario == 'paco' && contraseña == 'pacoeselmejorjefeyelmasguapoyquiendigalocontrariomiente')
            location.href = 'estadisticas.html';
        else
            location.href = 'index.html';
    })
})