(function(){
    emailjs.init("_D0Ziq-98kIR3SgSh");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const statusMensagem = document.getElementById('status-mensagem');
    statusMensagem.textContent = 'Enviando...';
    statusMensagem.className = 'mensagem-status';

    const templateParams = {
        from_name: document.getElementById('nome').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('mensagem').value
    };

    emailjs.send('service_q44osl4', 'template_d4u9z81', templateParams)
        .then(function(response) {
            statusMensagem.textContent = 'Mensagem enviada com sucesso!';
            statusMensagem.classList.add('mensagem-sucesso');
            
            document.getElementById('contact-form').reset();
        }, function(error) {
            statusMensagem.textContent = 'Erro ao enviar mensagem. Tente novamente.';
            statusMensagem.classList.add('mensagem-erro');
        });
});

particlesJS("particles-js", {
particles: {
    number: { value: 30 },
    size: { value: 1 },
    color: { value: "#ffffff" },
    move: { speed: 1 },
    line_linked: { enable: true, color: "#ffffff" }
}
});