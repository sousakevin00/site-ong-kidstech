# Site da ONG KidsTech

![KidsTech Logo](images/turma-kidstech.jpg) Repositório do projeto de website para a ONG fictícia KidsTech, desenvolvido como parte das atividades da disciplina [Nome da Disciplina - Ex: Desenvolvimento Web I] do curso [Nome do Curso - Ex: Análise e Desenvolvimento de Sistemas] na [Nome da Instituição - Ex: Faculdade XYZ].

## 📜 Descrição do Projeto

O site da KidsTech é uma Single Page Application (SPA) desenvolvida com HTML, CSS e JavaScript puro. O objetivo da ONG é promover a inclusão digital para crianças e jovens de comunidades carentes, oferecendo cursos de tecnologia. O site serve como portal informativo, plataforma de engajamento para voluntários e canal para doações.

## ✨ Funcionalidades Implementadas

* **Navegação SPA:** Carregamento de conteúdo das páginas (Início, Projetos, Cadastro) sem recarregamento total.
* **Design Responsivo:** Layout adaptado para visualização em desktops, tablets e smartphones (Mobile First).
* **Validação de Formulário:** Verificação de campos obrigatórios e consistência de dados (ex: e-mails) no formulário de cadastro, com mensagens de erro customizadas via JavaScript.
* **Templates JavaScript:** Geração dinâmica do conteúdo dos cards de projeto.
* **Menu Lateral Responsivo:** Menu estilo "hambúrguer" no mobile que se transforma em menu lateral fixo no desktop.
* **Modo Escuro (Dark Mode):** Tema alternativo acessível com persistência da preferência do usuário via `localStorage`.
* **Acessibilidade (WCAG 2.1 AA):**
* Estrutura HTML semântica.
* Navegação por teclado funcional com `:focus-visible`.
* Alto contraste no Modo Escuro.

## 🚀 Tecnologias Utilizadas

* HTML5 (Semântico)
* CSS3 (Flexbox, Grid, Variáveis, Media Queries)
* JavaScript (ES6+, Manipulação do DOM, Eventos, `localStorage`)
* Git & GitHub (Controle de Versão, Issues, Pull Requests)

## 🛠️ Como Executar o Projeto Localmente

1. Clone este repositório:

    ```bash
    git clone [https://github.com/sousakevin00/site-ong-kidstech.git](https://github.com/sousakevin00/site-ong-kidstech.git)
    ```

2. Navegue até a pasta do projeto:

    ```bash
    cd site-ong-kidstech
    ```

3. Abra o arquivo `index.html` em seu navegador, preferencialmente usando uma extensão como o "Live Server" do VS Code para visualizar corretamente o comportamento da SPA.

## 📝 Estrutura de Pastas

```/ ├── index.html ├── projetos.html ├── cadastro.html ├── css/ │ ├── style.css (Código fonte CSS) │ └── style.min.css (Versão minificada usada no site) ├── js/ │ ├── main.js (Código fonte JavaScript) │ └── main.min.js (Versão minificada usada no site) ├── images/ │ └── [imagens otimizadas do projeto] └── README.md```

## 👨‍💻 Autor

* **Kevin Sousa** - [GITHUB] - (<https://github.com/sousakevin00>)
