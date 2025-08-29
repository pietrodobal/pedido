document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById("card");
    const yesBtn = document.getElementById("yes");
    const noBtn = document.getElementById("no");

    // Exibir a mensagem caso seja selecionado o 'sim'
    yesBtn.addEventListener("click", function () {
        const question = document.getElementById("question");
        const message = document.getElementById("answer");

        card.style.backgroundImage = "url('https://img1.picmix.com/output/stamp/normal/5/1/0/1/1171015_f458c.gif')";
        question.style.display = "none";
        message.style.display = "flex";
    });

    // Movimento aleatório do botão 'não'
    noBtn.addEventListener("mouseover", function () {
        let width = window.innerWidth - 50;
        let height = window.innerHeight - 50;

        this.style.position = "absolute";
        this.style.top = Math.random() * height + "px";
        this.style.left = Math.random() * width + "px";
    });
});