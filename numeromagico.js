let numeroSecreto;
let intentosMaximos = 10;
let intentos;

function iniciarJuego() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    intentos = 0;
    document.getElementById("mensaje").textContent = "Tienes 10 intentos para adivinar un número entre 1 y 100.";
    document.getElementById("mensaje2").textContent = "¡Buena suerte!";
    document.getElementById("intentosRestantes").textContent = `Intentos restantes: ${intentosMaximos}`;
    document.getElementById("numeroInput").disabled = false;
    document.getElementById("botonAdivinar").textContent = "Intentar";
}

function verificarNumero() {
    const numeroUsuario = parseInt(document.getElementById("numeroInput").value);

    if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
        document.getElementById("mensaje").textContent = "Por favor, ingresa un número válido entre 1 y 100.";
        document.getElementById("mensaje2").textContent = "intenta de nuevo.";
        return;
    }

    intentos++;
    const intentosRestantes = intentosMaximos - intentos;

    if (numeroUsuario === numeroSecreto) {
        document.getElementById("mensaje").textContent = `¡Felicidades! Adivinaste el número en ${intentos} intentos.`;
        document.getElementById("mensaje2").textContent = `El Numero Magico era el ${numeroSecreto}`;
        finalizarJuego();
    } else if (numeroUsuario < numeroSecreto) {
        document.getElementById("mensaje").textContent = "El número secreto es mayor.";
        document.getElementById("mensaje2").textContent = 'intenta de nuevo.';
    } else {
        document.getElementById("mensaje").textContent = "El número secreto es menor.";
        document.getElementById("mensaje2").textContent = 'intenta de nuevo.';
    }

    document.getElementById("intentosRestantes").textContent = `Intentos restantes: ${intentosRestantes}`;

    if (intentosRestantes === 0 && numeroUsuario !== numeroSecreto) {
        document.getElementById("mensaje").textContent = `Se acabaron los intentos. El número era: ${numeroSecreto}`;
        document.getElementById("mensaje2").textContent = 'Suerte la proxima vez.';
        finalizarJuego();
    }

    document.getElementById("numeroInput").value = "";
}

function finalizarJuego() {
    document.getElementById("numeroInput").disabled = true;
    document.getElementById("botonAdivinar").textContent = "Jugar de nuevo";
}

document.getElementById("botonAdivinar").addEventListener("click", function () {
    if (this.textContent === "Jugar de nuevo") {
        iniciarJuego();
    } else {
        verificarNumero();
    }
});

iniciarJuego();
