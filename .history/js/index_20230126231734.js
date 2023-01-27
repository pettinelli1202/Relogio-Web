const hourE1 = document.getElementById("hora");
const minE1 = document.getElementById("minuto");
const segE1 = document.getElementById("segundo");

function atualizacaoRelogio() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    hourE1.innerText = h;
    minE1.innerText = m;
    segE1.innerText = s;

    setTimeout(() = > {
        atualizacaoRelogio
    }, 1000)

}


atualizacaoRelogio();