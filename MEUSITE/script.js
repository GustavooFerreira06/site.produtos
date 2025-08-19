document.getElementById("formContato").addEventListener("submit", function(e){
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    document.getElementById("resposta").textContent = 
        `Obrigado, ${nome}! Sua mensagem foi recebida. Em breve entraremos em contato no email ${email}.`;

    this.reset();
});
