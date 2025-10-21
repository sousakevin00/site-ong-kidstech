/* ==========================================================================
   Banco de Dados Falso (para simular templates)
   ========================================================================== */
const db = {
    projetos: [
        {
            imgSrc: "images/projeto-coding.jpg",
            imgAlt: "Crianças aprendendo a programar",
            titulo: "Oficina de Programação",
            descricao: "Ensinamos lógica e as primeiras linhas de código de forma lúdica, com projetos práticos e desenvolvimento de pequenos jogos."
        },
        {
            imgSrc: "images/projeto-robotica.jpg",
            imgAlt: "Crianças montando um robô",
            titulo: "Laboratório de Robótica",
            descricao: "Os alunos projetam, montam e programam seus próprios robôs, estimulando a criatividade e o trabalho em equipe."
        },
        {
            imgSrc: "images/projeto-apps.jpg",
            imgAlt: "Interface de um aplicativo sendo desenhada",
            titulo: "Desenvolvimento de Apps",
            descricao: "Um curso introdutório onde os jovens aprendem a criar seus próprios aplicativos para celular, da ideia à publicação."
        }
    ]
};

/* ==========================================================================
   Funções de Template (As "Plantas" de cada Página)
   ========================================================================== */

function getTemplateInicio() {
    return `
        <section id="hero">
            <div class="container">
                <div class="hero-content"> <h1>Transformando Vidas Através da Tecnologia</h1>
                    <p>Capacitamos crianças e jovens de comunidades para se tornarem os criadores do futuro digital.</p>
                    <a href="projetos.html" class="cta-button nav-link">Conheça Nossos Projetos</a>
                </div> </div>
        </section>
        <section id="sobre-nos">
            <div class="container">
                <h2>Quem Somos</h2>
                <p>A KidsTech acredita no poder da educação tecnológica como ferramenta de transformação social. Desde 2020, já impactamos a vida de centenas de jovens no Rio de Janeiro, oferecendo cursos de programação, robótica e pensamento computacional de forma gratuita e acessível.</p>
                <img src="images/turma-kidstech.jpg" alt="Turma de alunos da KidsTech sorrindo em sala de aula" style="width:100%; max-width:600px; margin-top: 1rem; border-radius: 8px;">
            </div>
        </section>
        <section id="nossos-projetos">
            <div class="container">
                <h2>Nossos Principais Programas</h2>
                <div class="projetos-grid">
                    <article class="projeto-card">
                        <img src="images/projeto-coding.jpg" alt="Crianças aprendendo a programar">
                        <h3>Oficina de Programação</h3>
                        <p>Ensinamos lógica e as primeiras linhas de código de forma lúdica e divertida.</p>
                    </article>
                    <article class="projeto-card">
                        <img src="images/projeto-robotica.jpg" alt="Crianças montando um robô">
                        <h3>Laboratório de Robótica</h3>
                        <p>Os alunos projetam, montam e programam seus próprios robôs, estimulando a criatividade.</p>
                    </article>
                </div>
            </div>
        </section>
        <section id="contato">
            <div class="container">
                <h2>Entre em Contato</h2>
                <p>Ficou com alguma dúvida ou quer saber mais sobre parcerias? Fale conosco!</p>
                <div class="contato-info">
                    <p><strong>E-mail:</strong> contato@kidstech.org</p>
                    <p><strong>Telefone:</strong> (21) 99999-8888</p>
                    <p><strong>Endereço:</strong> Av. Principal, 123, Rio de Janeiro - RJ, Brasil</p>
                </div>
            </div>
        </section>
    `;
}

function getTemplateProjetos() {
    let cardsHtml = db.projetos.map(projeto => {
        return `
            <article class="projeto-card">
                <img src="${projeto.imgSrc}" alt="${projeto.imgAlt}">
                <h3>${projeto.titulo}</h3>
                <p>${projeto.descricao}</p>
            </article>
        `;
    }).join('');

    return `
        <section id="projetos-lista">
            <div class="container">
                <h2>Nossos Projetos</h2>
                <p>Estes são os programas que oferecemos para capacitar a próxima geração de inovadores.</p>
                <div class="projetos-grid">
                    ${cardsHtml}
                </div>
            </div>
        </section>
        <section id="voluntariado">
            <div class="container">
                <h2>Seja um Voluntário</h2>
                <p>Nossos voluntários são a força por trás do nosso impacto. Junte-se a nós!</p>
                <a href="cadastro.html" class="nav-link cta-button" style="margin-top: 1rem;">Quero me voluntariar</a>
            </div>
        </section>
        <section id="doacoes">
            <div class="container">
                <h2>Faça uma Doação</h2>
                <p>Sua contribuição financeira nos ajuda a adquirir equipamentos e expandir nosso impacto.</p>
                <div class="doacoes-info">
                    <h3>Como Doar:</h3>
                    <p><strong>PIX (Chave E-mail):</strong> doe@kidstech.org</p>
                </div>
            </div>
        </section>
    `;
}

function getTemplateCadastro() {
    return `
        <section id="cadastro-form">
            <div class="container">
                <h2>Cadastro de Voluntários</h2>
                <p>Preencha o formulário abaixo para iniciar sua jornada de voluntariado conosco. Entraremos em contato em breve!</p>
                <form action="#" method="POST" id="form-cadastro" novalidate>
                   <fieldset>
                        <legend>Dados Pessoais</legend>
                        <div>
                            <label for="nome">Nome Completo:</label>
                            <input type="text" id="nome" name="nome_completo" required placeholder="Digite seu nome completo">
                            <div class="error-message" data-error-for="nome"></div>
                        </div>
                        <div>
                            <label for="email">E-mail:</label>
                            <input type="email" id="email" name="email" required placeholder="seu.email@exemplo.com">
                            <div class="error-message" data-error-for="email"></div>
                        </div>
                        <div>
                            <label for="confirmar-email">Confirmar E-mail:</label>
                            <input type="email" id="confirmar-email" name="confirmar_email" required placeholder="Confirme seu e-mail">
                            <div class="error-message" data-error-for="confirmar-email"></div>
                        </div>
                        <div>
                            <label for="cpf">CPF:</label>
                            <input type="text" id="cpf" name="cpf" required placeholder="000.000.000-00">
                            <div class="error-message" data-error-for="cpf"></div>
                        </div>
                        <div>
                            <label for="telefone">Telefone:</label>
                            <input type="tel" id="telefone" name="telefone" required placeholder="(00) 00000-0000">
                            <div class="error-message" data-error-for="telefone"></div>
                        </div>
                        <div>
                            <label for="nascimento">Data de Nascimento:</label>
                            <input type="date" id="nascimento" name="data_nascimento" required>
                            <div class="error-message" data-error-for="nascimento"></div>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Endereço</legend>
                        <div>
                            <label for="cep">CEP:</label>
                            <input type="text" id="cep" name="cep" required placeholder="00000-000">
                            <div class="error-message" data-error-for="cep"></div>
                        </div>
                        <div>
                            <label for="cidade">Cidade:</label>
                            <input type="text" id="cidade" name="cidade" required placeholder="Sua cidade">
                            <div class="error-message" data-error-for="cidade"></div>
                        </div>
                        <div>
                            <label for="estado">Estado:</label>
                            <input type="text" id="estado" name="estado" required placeholder="Seu estado">
                            <div class="error-message" data-error-for="estado"></div>
                        </div>
                    </fieldset>
                    <button type="submit" class="cta-button">Enviar Cadastro</button>
                </form>
            </div>
        </section>
    `;
}


/* ==========================================================================
   Lógica de Validação de Formulário
   ========================================================================== */

function inicializarValidacaoFormulario() {
    const form = document.getElementById("form-cadastro");
    if (!form) return; 

    const requiredInputs = form.querySelectorAll("[required]");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 
        clearAllErrors(form); 

        let isValid = validateForm(requiredInputs);

        if (isValid) {
            alert("Cadastro enviado com sucesso! (Funcionalidade de back-end não implementada)");
            form.reset();
        }
    });
}

function validateForm(requiredInputs) {
    let formValid = true;

    requiredInputs.forEach(input => {
        if (!input.value.trim()) {
            showError(input, "Este campo é obrigatório.");
            formValid = false;
        }
    });

    const email = document.getElementById("email");
    const confirmEmail = document.getElementById("confirmar-email");
    if (email && confirmEmail && email.value && confirmEmail.value && email.value !== confirmEmail.value) {
        showError(confirmEmail, "Os e-mails não são iguais.");
        formValid = false;
    }
    
    const cpf = document.getElementById("cpf");
    if (cpf) {
        const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        if (cpf.value && !cpfRegex.test(cpf.value)) {
            showError(cpf, "Formato de CPF inválido. Use 000.000.000-00.");
            formValid = false;
        }
    }

    return formValid;
}

function showError(input, message) {
    const inputParentDiv = input.parentElement;
    const errorDiv = inputParentDiv.querySelector(".error-message");
    if (errorDiv) {
        inputParentDiv.classList.add("invalid");
        errorDiv.textContent = message;
    }
}

function clearAllErrors(form) {
    form.querySelectorAll("div.invalid").forEach(div => {
        div.classList.remove("invalid");
    });
    form.querySelectorAll(".error-message").forEach(div => {
        div.textContent = "";
    });
}


/* ==========================================================================
   Motor da SPA (Single Page Application) e Roteamento
   ========================================================================== */

const routes = {
    "index.html": getTemplateInicio,
    "projetos.html": getTemplateProjetos,
    "cadastro.html": getTemplateCadastro
};

function getRouteKey(pathname) {
    const parts = pathname.split('/');
    const file = parts[parts.length - 1];
    
    if (file === "" || !file.includes(".html")) {
        return "index.html";
    }
    return file; 
}

function navigate(path) {
    const mainContent = document.querySelector("main");
    if (!mainContent) return; 

    const routeKey = getRouteKey(path); 
    const renderFunction = routes[routeKey] || routes["index.html"];
    
    const newHtml = renderFunction();
    mainContent.innerHTML = newHtml;
    
    if (routeKey === "cadastro.html") {
        inicializarValidacaoFormulario();
    }
}

/* ==========================================================================
   Ponto de Entrada Principal (DOMContentLoaded)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    // --- LÓGICA DO MENU HAMBÚRGUER ---
    const hamburgerButton = document.getElementById("hamburger-button");
    const sidebarNav = document.getElementById("sidebar-nav");
    const overlay = document.getElementById("overlay");

    function toggleMenu() {
        if(sidebarNav && overlay && hamburgerButton) { // Verifica se existem
            sidebarNav.classList.toggle("active");
            overlay.classList.toggle("active");
            const isExpanded = sidebarNav.classList.contains("active");
            hamburgerButton.setAttribute("aria-expanded", isExpanded);
        }
    }

    function closeMenu() {
        if(sidebarNav && overlay && hamburgerButton) { // Verifica se existem
            sidebarNav.classList.remove("active");
            overlay.classList.remove("active");
            hamburgerButton.setAttribute("aria-expanded", "false");
        }
    }

    if (hamburgerButton) {
        hamburgerButton.addEventListener("click", toggleMenu);
    }
    if (overlay) {
        overlay.addEventListener("click", closeMenu);
    }
    // --- FIM DA LÓGICA DO MENU ---


    // --- LÓGICA DO SPA (ROTEAMENTO) ---
    document.body.addEventListener("click", event => {
        const targetLink = event.target.closest("a.nav-link");

        if (targetLink) {
            event.preventDefault(); 
            
            const path = new URL(targetLink.href).pathname;
            window.history.pushState({}, "", targetLink.href);
            
            navigate(path); 

            closeMenu(); // Fecha o menu ao navegar
        }
    });

    // Carrega o conteúdo correto no carregamento inicial da página
    const initialPath = window.location.pathname;
    navigate(initialPath);
});