document.addEventListener('DOMContentLoaded', function() {
    // Código existente para o formulário
    const form = document.getElementById('meuFormulario');
    const mensagemSucesso = document.getElementById('mensagem-sucesso');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simula o envio do formulário (aqui você colocaria a lógica real de envio)
        setTimeout(function() {
            // Mostra a mensagem de sucesso
            mensagemSucesso.classList.remove('oculto');
            
            // Reseta o formulário
            form.reset();
            
            // Oculta a mensagem após 5 segundos
            setTimeout(function() {
                mensagemSucesso.classList.add('oculto');
            }, 5000);
        }, 1000); // Simula um atraso de 1 segundo no envio
    });

    // Código atualizado para o botão "Voltar ao topo"
    var btnTopo = document.getElementById("btnTopo");

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) { // Usando scrollY em vez de pageYOffset
            btnTopo.classList.add('visivel');
        } else {
            btnTopo.classList.remove('visivel');
        }
    });

    btnTopo.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
    
});

