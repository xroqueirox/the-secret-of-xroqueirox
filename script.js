document.addEventListener("DOMContentLoaded", () => {
    const titleElement = document.getElementById("typing-title");
    const titleText = "Bem-vindo ao Mistério";
    let index = 0;

    function typeTitle() {
        if (index < titleText.length) {
            titleElement.textContent += titleText.charAt(index);
            index++;
            setTimeout(typeTitle, 100); // Velocidade da digitação
        } else {
            // Remover cursor após a animação
            titleElement.style.borderRight = "none";
        }
    }

    typeTitle();

    // Adicionar evento de login
    document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Verificação do username e senha
        if (username === "roqueiro?#00001??" && password === "the-past21093#$%^^") {
            alert("Bem-vindo ao mundo dos desafios!");
        } else {
            alert("Username ou senha incorretos. Tente novamente.");
        }
    });
});