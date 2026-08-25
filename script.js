const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {
    let avaliado = false;
    botao.addEventListener("click", botaoClicado);

    function botaoClicado() {
        console.log("fui clicado");
        let texto = botao.querySelector("span");
        if (avaliado === false) {
            texto.textContent++;
            avaliado = true;
        } else {
            texto.textContent--;
            avaliado = false;
        }
    }
})

const  btnTemaEscuro = document.querySelector(".btn-tema-escuro");

btnTemaEscuro.addEventListener("click", mudaTema);

function mudaTema(){
    const corpoPagina = document.body;
    if (corpoPagina.classList.contains("tema-escuro")) {
        corpoPagina.classList.remove("tema-escuro");
    } else {
        corpoPagina.classList.add("tema-escuro");
    }
}

