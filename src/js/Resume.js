import { UniversalFunction } from "./UniversalFunction.js";

export class Resume {
    constructor(options) {
        this.options = options;
        this.parseCommand();
    }

    parseCommand() {
        if (this.options === "") {
            this.displayResume();
            return;
        }
        let parts = this.options.split(" ");
        if (parts.length > 2) {
            let errMsg = `resume: muitos argumentos.<br>digite 'resume --help' para ajuda.`;
            new UniversalFunction().updateElement("div", "error", errMsg);
            return;
        }
        switch (parts[0]) {
            case "--download":
                this.downloadResume(parts.slice(1).toString().trim());
                break;
            case "--help":
                this.help();
                break;
            default:
                let errMsg = `resume: '${parts[0]}' não é um argumento válido.<br>digite 'resume --help' para ajuda.`;
                new UniversalFunction().updateElement("div", "error", errMsg);
                break;
        }
    }

    downloadResume(format) {
        if (format === "" || format === "pdf") this.downloadFile("curriculoCarlos.pdf");
        else if (format === "doc") this.downloadFile("curriculoCarlos.docx");
        else {
            let errMsg = `resume: '${format}' não é um formato válido.<br>digite 'resume --help' para ajuda.`;
            new UniversalFunction().updateElement("div", "error", errMsg);
            return;
        }
    }

    downloadFile(fileName) {
        const link = document.createElement("a");
        link.href = `assets/resume/${fileName}`;
        link.setAttribute("download", fileName);
        link.click();
        URL.revokeObjectURL(link.href);
        link.remove();
    }

    help() {
        let outMsg = `resume: Exibe ou faz download do meu currículo.<br>
        uso: resume [opção] [valor]<br>
        opções:<br>
        --download [pdf(Padrão) | doc] faz download do currículo no formato especificado.<br>
        --help mostra esta mensagem de ajuda.<br>
        digite 'resume' para exibir meu currículo.`;
        new UniversalFunction().updateElement("div", "output", outMsg);
    }

    getHeader() {
        return `<div class="header">
        <h1>Carlos Eduardo Camargo Barbosa</h1>
        <h2>Desenvolvedor Front-End | Web Design</h2><hr>
        <p>
            <span><a href="tel:+55(15)998533336">+55(15)998533336</a> | </span>
            <span><a href="mailto:cb473355@gmail.com">cb473355@gmail.com</a> | </span>
            <span><a href="https://www.linkedin.com/in/carloscb124" target="_blank">LinkedIn</a> | </span>
            <span><a href="https://github.com/Carloscb124" target="_blank">GitHub</a></span>
        </p><hr>
        </div>`;
    }

    getSummary() {
        return `<div class="summary">
            <h2>RESUMO</h2><hr>
            <p>Sou Carlos, estudante de Técnico de Informática pelo SENAC, com experiência prévia no setor de TI, tanto na área de manutenção quanto em desenvolvimento web. Entusiasta de novas tecnologias, busco estar sempre atualizado com as tendências do mercado.</p>
            <p>Tenho foco em desenvolvimento com JavaScript, HTML, CSS, WordPress, Elementor e Flutter. Me considero ágil e consistente ao aprender novas linguagens e me adaptar a diferentes cenários. Estou sempre pronto para enfrentar novos desafios com uma postura otimista, perseverante e dedicada.</p>
        </div>`;
    }

    getEducation() {
        return `<div class="education">
            <div>
                <h2>FORMAÇÃO ACADÊMICA</h2><hr>
            </div>
            <div class="education-item">
                <strong>Senac São Paulo</strong>  <strong>São Paulo, Brasil</strong>
                <p>Tecnologia da Informação</p>  <p>Agosto 2024 - Fevereiro 2026</p>
            </div>
            <div class="education-item">
                <strong>Universidade Paulista</strong> <strong>São Paulo, Brasil</strong>
                <p>Análise e Desenvolvimento de Sistemas</p> <p>Fevereiro 2022 - Dezembro 2023</p>
            </div>
        </div>`;
    }

    getProfessionalExperience() {
        return `<div class="professional-experience">
            <div>
                <h2>EXPERIÊNCIA PROFISSIONAL</h2><hr>
            </div>
            <div class="professional-experience-item">
                <strong>Prefeitura Municipal de São Miguel Arcanjo</strong> <strong>São Miguel Arcanjo, SP</strong>
                <p><strong>Especialista em TI</strong></p> <p>Fevereiro 2022 - Dezembro 2023 (1 ano 11 meses)</p>
                <ul>
                    <li>Configuração e manutenção de redes</li>
                    <li>Administração de sistemas computacionais</li>
                    <li>Implementação de infraestruturas de rede</li>
                    <li>Resolução de problemas complexos em hardware e software</li>
                    <li>Criação de sites e design web</li>
                    <li>Implementação de nova rede para maior eficiência e segurança de dados</li>
                </ul>
            </div>
            <div class="professional-experience-item">
                <p><strong>Estagiário de TI</strong></p> <p>Abril 2022 - Dezembro 2023 (1 ano 9 meses)</p>
                <ul>
                    <li>Instalação e configuração de softwares</li>
                    <li>Otimização de desempenho de sistemas</li>
                    <li>Suporte técnico e manutenção de equipamentos</li>
                </ul>
            </div>
        </div>`;
    }

    getSkills() {
        return `<div class="skills">
            <div>
                <h2>HABILIDADES TÉCNICAS</h2><hr>
            </div>
            <ul>
                <li><strong>Linguagens:</strong> JavaScript, HTML, CSS</li>
                <li><strong>Plataformas:</strong> WordPress, Elementor</li>
                <li><strong>Frameworks:</strong> Flutter</li>
                <li><strong>Banco de Dados:</strong> Microsoft SQL Server</li>
                <li><strong>Redes:</strong> Configuração e manutenção</li>
                <li><strong>Ferramentas:</strong> Git, GitHub</li>
                <li><strong>Sistemas Operacionais:</strong> Windows, Linux</li>
            </ul>
        </div>`;
    }

    getProjects() {
        return `<div class="projects">
            <div>
                <h2>PROJETOS PESSOAIS</h2><hr>
            </div>
            <div class="projects-item">
                <strong>Portfólio em Terminal | HTML, CSS, JavaScript | 
                    <a href="https://github.com/Carloscb124" target="_blank">[GitHub]</a>
                </strong>
                <ul>                  
                    <li>Portfólio interativo com interface de terminal</li>
                    <li>Armazenamento local para histórico de comandos</li> 
                    <li>Design responsivo e experiência de usuário inovadora</li>
                </ul>
            </div>
        </div>`;
    }

    getInterests() {
        return `<div class="interests">
            <div>
                <h2>INTERESSES</h2><hr>
            </div>
            <ul>
                <li>Desenvolvimento Web Front-end</li>
                <li>Design UI/UX</li>
                <li>Xadrez</li>
                <li>Música (tocar guitarra)</li>
                <li>Exploração de novas tecnologias</li>
            </ul>
        </div>`;
    }

    toString() {
        return `${this.getHeader()}
        ${this.getSummary()}
        ${this.getEducation()}
        ${this.getProfessionalExperience()}
        ${this.getSkills()}
        ${this.getProjects()}
        ${this.getInterests()}
        `;
    }

    displayResume() {
        new UniversalFunction().updateElement("div", "output resume", this.toString());
        new UniversalFunction().updateElement("div", "output", 
            `<p>Use <em>resume --download [tipo-de-arquivo pdf ou docx]</em> para baixar o currículo acima no formato especificado.</p>`
        );
    }
}