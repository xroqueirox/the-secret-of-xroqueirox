// Animação para explosões e mensagens
document.querySelectorAll(".explodable").forEach((element, index) => {
    element.addEventListener("click", () => {
        const phrases = [
            "Boom! Você achou algo? ... Não, só poeira.",
            "Explodiu, mas era só um teste!",
            "Talvez a próxima pista esteja em outro lugar..."
        ];
        element.textContent = "💥"; // Explosão ao clicar
        element.style.color = "red";
        alert(phrases[index]);
        setTimeout(() => {
            element.style.display = "none"; // Elemento desaparece
        }, 1000);
    });
});

document.querySelectorAll(".message").forEach((element, index) => {
    element.addEventListener("click", () => {
        const phrases = [
            "Estou pensando... mas não sei de nada.",
            "Você acha que vou revelar o segredo? Tente outra vez.",
            "Hmmm... Será que você está no caminho certo?"
        ];
        alert(phrases[index]);
    });
});

// Redirecionamento no login
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "roqueiro?#00001??" && password === "the-past21093#$%^^") {
        window.location.href = "https://xroqueirox.github.io/olho.html";
    } else {
        alert("Username ou senha incorretos. Tente novamente.");
    }
});