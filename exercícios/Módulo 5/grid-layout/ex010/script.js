function adicionarCaractere(caractere) {
    const valorInput = document.querySelector('.display');
    valorInput.value += caractere;
}

document.querySelectorAll('button').forEach(botao => {
    botao.addEventListener('click', e => {
        if (e.target.innerText === "AC") {
            limparTela();
        } else if (e.target.innerText === "=") {
            calcular();
        } else {
            adicionarCaractere(e.target.innerText);
        }
    });
});

function limparTela() {
    document.querySelector('.display').value = "";
}

function calcular() {
    const valorInput = document.querySelector('.display').value;
    document.querySelector('.display').value = eval(valorInput);
}
