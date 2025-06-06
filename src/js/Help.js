import { UniversalFunction } from "./UniversalFunction.js";

const commands = [
    { 
        "name": "help", 
        "description": "Lista de comandos disponíveis no terminal.",
        "usage": "help [comando]"
    },
    { 
        "name": "about", 
        "description": "Mostra informações sobre mim e este projeto.",
        "usage": "about"
    },
    { 
        "name": "whoami", 
        "description": "Uma reflexão filosófica sobre identidade digital.",
        "usage": "whoami"
    },
    { 
        "name": "clear", 
        "description": "Limpa todo o conteúdo do terminal.",
        "usage": "clear"
    },
    { 
        "name": "history", 
        "description": "Mostra o histórico de comandos executados.",
        "usage": "history"
    },
    { 
        "name": "exit", 
        "description": "Tenta fechar o terminal (funcionalidade limitada por segurança).",
        "usage": "exit"
    },
    { 
        "name": "theme", 
        "description": "Altera o tema visual do terminal.",
        "usage": "theme [opções]",
        "options": [
            { 
                "option": "--name [nome-do-tema]", 
                "description": "Muda para o tema especificado (ex: dark-forest, light-vanilla)" 
            },
            { 
                "option": "--list", 
                "description": "Lista todos os temas disponíveis" 
            }
        ]
    },
    { 
        "name": "connect", 
        "description": "Conecte-se comigo através das redes sociais.",
        "usage": "connect [opções]",
        "options": [
            {  
                "option": "--goto [rede-social]", 
                "description": "Abre o link da rede social especificada" 
            },
            {  
                "option": "--list", 
                "description": "Lista todas as redes sociais disponíveis" 
            }
        ]
    },
    { 
        "name": "contact", 
        "description": "Mostra minhas informações de contato profissional.", 
        "usage": "contact [opções]",
        "options": [
            {  
                "option": "--goto [método-contato]", 
                "description": "Abre o método de contato especificado" 
            },
            {  
                "option": "--list", 
                "description": "Lista todos os métodos de contato" 
            }
        ]
    },
    { 
        "name": "skills", 
        "description": "Mostra minhas habilidades técnicas e profissionais com níveis de proficiência.",
        "usage": "skills",
        "details": "Este comando exibe uma representação visual das minhas habilidades em:\n- Desenvolvimento Front-end\n- Banco de dados\n- Infraestrutura de TI\n- Habilidades profissionais"
    },
    { 
        "name": "projects", 
        "description": "Mostra meus projetos mais relevantes com links e descrições.",
        "usage": "projects",
        "details": "Lista projetos completos demonstrando minhas habilidades em:\n- Desenvolvimento Web\n- Aplicações móveis\n- Soluções de TI"
    },
    { 
        "name": "resume", 
        "description": "Acesso ao meu currículo profissional.",
        "usage": "resume [opções]",
        "options": [
            {
                "option": "--download", 
                "description": "Faz download do currículo em formato PDF" 
            },
            {
                "option": "--view", 
                "description": "Visualiza o currículo diretamente no terminal" 
            }
        ]
    },
];

export class Help {
    constructor(command) {
        this.command = command ? command.toLowerCase() : null;
    }

    getCommandHelp(cmd) {
        const command = commands.find(c => c.name === cmd);
        if (!command) return `<p class="error">Comando "${cmd}" não encontrado.</p>`;
        
        let helpText = `<div class="command-help">
            <h3>${command.name}</h3>
            <p><strong>Descrição:</strong> ${command.description}</p>
            <p><strong>Uso:</strong> <span class="code">${command.usage}</span></p>`;
        
        if (command.options) {
            helpText += `<p><strong>Opções:</strong></p><ul>`;
            command.options.forEach(opt => {
                helpText += `<li><span class="code">${opt.option}</span> - ${opt.description}</li>`;
            });
            helpText += `</ul>`;
        }
        
        if (command.details) {
            helpText += `<p><strong>Detalhes:</strong></p>
                <div class="details">${command.details.replace(/\n/g, '<br>')}</div>`;
        }
        
        helpText += `</div>`;
        return helpText;
    }

    getGeneralHelp() {
        let helpText = `<div class="help-general">
            <h3>Terminal Commands</h3>
            <p>Digite <span class="code">help [comando]</span> para mais informações sobre um comando específico.</p>
            <div class="commands-list">`;
        
        commands.forEach(cmd => {
            helpText += `<div class="command-item">
                <span class="command-name">${cmd.name}</span>
                <span class="command-desc">${cmd.description}</span>
            </div>`;
        });
        
        helpText += `</div></div>`;
        return helpText;
    }

    toString() {
        if (this.command) {
            return this.getCommandHelp(this.command);
        }
        return this.getGeneralHelp();
    }
    
    updateDOM() {
        new UniversalFunction().updateElement("div", "output", this.toString());
    }
}