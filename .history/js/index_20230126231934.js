const hourE1 = document.getElementById("hora");
const minE1 = document.getElementById("minuto");
const segE1 = document.getElementById("segundo");

function atualizacaoRelogio() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    h = h < 10 ? "0" + s : s;

    hourE1.innerText = h;
    minE1.innerText = m;
    segE1.innerText = s;

    setTimeout(() => {
        atualizacaoRelogio()
    }, 1000)

}


atualizacaoRelogio();