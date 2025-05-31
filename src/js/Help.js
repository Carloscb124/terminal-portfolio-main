import { UniversalFunction } from "./UniversalFunction.js";

const commands = [
    { "name": "help", "description": "Lista de comandos." },
    { "name": "about", "description": "Sobre mim." },
    { "name": "whoami", "description": "Estou descobrindo quem eu sou. Haha" },
    { "name": "clear", "description": "Limpa o terminal. " },
    {"name": "history", "description": "Histórico de comandos. "},
    {"name": "exit", "description": "Sai do terminal."},
    { "name": "theme", "description": "Muda o tema do terminal.", 
        "options": [
            { "option": "--name [theme-name]", "description": "Change the theme to the given theme name." },
            { "option": "--list", "description": "List all the themes." }
        ]
    },
    { "name": "connect", "description": "Conecte-se comigo.", 
        "options": [
            {  "option": "--goto [social-network]", "description": "Go to the given social network." },
            {  "option": "--list", "description": "List all the social networks." }
        ]
    },
    { "name": "contact", "description": "Mostrar informações de contato. ", 
        "options": [
            {  "option": "--goto [contact-method]", "description": "Go to the given contact method." },
            {  "option": "--list", "description": "List all the contact methods." }
        ]
    },
    { "name": "skills", "description": "Mostrar skills."},
    { "name": "projects", "description": "Mostrar projetos." },
    { "name": "resume", "description": "Mostrar CV.", 
        "options": [
            {"option": "--download", "description": "Download the resume. 📥"}
        ]
    },
];

export class Help{
    toString(){
        return commands.map(command => `<p class="two-col"> <span class='keyword'>${command.name}
        </span><span>${command.description}</span></p>`).join("");
    }
    
    updateDOM(){
        new UniversalFunction().updateElement("div", "output", this.toString());
    }
}
