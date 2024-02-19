const botao = document.getElementById('button');

function botaoEnviar(){
    const c = parseFloat(document.getElementById('C').value);
    const i = parseFloat(document.getElementById('I').value) / 100;
    const n = parseFloat(document.getElementById('N').value);

    const montante = Math.floor(c * Math.pow(1 + i, n));

    document.querySelector("#mte").textContent = `Montante = R$ ${montante}`;
}

botao.addEventListener('click', botaoEnviar);