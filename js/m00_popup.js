// ==================================
// M-00 - Pop-up Aleatório
// Chance: 1 em 1000 a cada minuto
// ==================================

const mensagens = [

    "Sai.Daqui.",
    "Vai.Embora.",
    ":)",
    "Você.Voltou.",
    "Ainda.Aqui.",
    ":<",
    "Nada.",
    "Eu.Estou.Observando.",
    "Você.Consegue.Me.Ouvir."


];

const mensagensRaras = [

    "Não.Era.Pra.Você.Ver.Isso.",
    "Nada.É.Real.",
    "Sorria.Você.Está.Sendo.Filmado",
    ":3",
    "Obrigado.Por.Tudo.Que.Vocês.Fizeram.Por.Esse.Servidor."

];

function criarPopup() {

    // 5% de chance do nome verdadeiro

    const titulo =
        Math.random() < 0.05
            ? "I.W.H.M.S.exe"
            : "M-00.exe";

    let mensagem;

    // 1% de chance de mensagem rara

    if (Math.random() < 0.01) {

        mensagem =
            mensagensRaras[
                Math.floor(Math.random() * mensagensRaras.length)
            ];

    } else {

        mensagem =
            mensagens[
                Math.floor(Math.random() * mensagens.length)
            ];

    }

    const popup = document.createElement("div");

    popup.style.position = "fixed";
    popup.style.width = "300px";
    popup.style.background = "#dcdcdc";
    popup.style.border = "2px solid black";
    popup.style.boxShadow = "5px 5px 10px rgba(0,0,0,0.4)";
    popup.style.fontFamily = "Arial";
    popup.style.zIndex = "999999";

    popup.style.left =
        Math.random() * (window.innerWidth - 320) + "px";

    popup.style.top =
        Math.random() * (window.innerHeight - 150) + "px";

    popup.innerHTML = `

        <div style="
            background:#003399;
            color:white;
            padding:5px;
            display:flex;
            justify-content:space-between;
            font-weight:bold;
        ">

            <span>${titulo}</span>

            <span style="cursor:pointer;">X</span>

        </div>

        <div style="
            padding:15px;
            color:black;
        ">

            ${mensagem}

        </div>

    `;

    document.body.appendChild(popup);

    // Remove sozinho depois de 2 segundos

    setTimeout(() => {

        popup.remove();

    }, 2000);

}

// Verifica a cada minuto

setInterval(() => {

    const sorteio = Math.floor(Math.random() * 1000);

    if (sorteio === 0) {

        criarPopup();

    }

}, 60000);