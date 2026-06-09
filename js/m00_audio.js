// ================================
// M-00 - Sistema de Áudios Aleatórios
// Chance: 1 em 500 a cada 30 segundos
// ================================

const m00Audios = [
    "../assets/audio/Especial1.mp3",
    "../assets/audio/Especial2.mp3",
    "../assets/audio/Especial3.mp3",
    "../assets/audio/Especial4.mp3",
    "../assets/audio/Especial5.mp3",
    "../assets/audio/Especial6.mp3"
];

let ultimoAudio = -1;

function tocarAudioM00() {

    // Chance de 1 em 25
    const sorteio = Math.floor(Math.random() * 25);

    if (sorteio !== 0) return;

    let indice;

    // Evita repetir o último áudio
    do {
        indice = Math.floor(Math.random() * m00Audios.length);
    } while (indice === ultimoAudio && m00Audios.length > 1);

    ultimoAudio = indice;

    const audio = new Audio(m00Audios[indice]);

    audio.volume = 0.5;

    audio.play().catch(() => {
        // Alguns navegadores bloqueiam áudio automático.
    });

}

// Faz a verificação a cada 30 segundos
setInterval(tocarAudioM00, 30000);