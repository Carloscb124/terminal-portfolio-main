import { UniversalFunction } from "./UniversalFunction.js";

export class Skills {
    constructor() {
        this.skillsData = {
            "FRONT-END": [
                { name: "JavaScript", level: 30, icon: "" },
                { name: "HTML5", level: 70, icon: "" },
                { name: "CSS3", level: 50, icon: "" },
                { name: "Flutter", level: 30, icon: "" }
            ],
            "BACK-END/DADOS": [
                { name: "SQL Server", level: 40, icon: "" },
                { name: "Java", level: 30, icon: "" },
                { name: "WordPress", level: 88, icon: "" }
            ],
            "TI/INFRAESTRUTURA": [
                { name: "Redes", level: 92, icon: "" },
                { name: "Servidores", level: 57, icon: "" },
                { name: "Segurança", level: 65, icon: "" },
                { name: "Hardware", level: 90, icon: "" }
            ],
            "HABILIDADES PROFISSIONAIS": [
                { name: "Resolução de Problemas", level: 95, icon: "" },
                { name: "Aprendizado Rápido", level: 90, icon: "" },
                { name: "Trabalho em Equipe", level: 85, icon: "" },
                { name: "Web Design", level: 88, icon: "" }
            ]
        };
        
        // Estilo unificado para todas as barras
        this.barStyle = { 
            empty: "─", 
            filled: "■", 
            color: "#36f445"  // Verde tecnológico
        };
    }

    createSkillBar(level) {
        const barLength = 20;
        const filled = Math.round((level / 100) * barLength);
        return `<span style="color: ${this.barStyle.color}">${this.barStyle.filled.repeat(filled)}${this.barStyle.empty.repeat(barLength - filled)}</span>`;
    }

    updateDOM() {
        let output = `<div class='skills-output infra-style'>`;
        output += `<pre>╭─ HABILIDADES TÉCNICAS ${'─'.repeat(38)}╮</pre>`;
        
        for (const category in this.skillsData) {
            output += `<pre>│  <span class='infra-category'> ${category}</span>${' '.repeat(55 - category.length)}│</pre>`;
            
            this.skillsData[category].forEach(skill => {
                const bar = this.createSkillBar(skill.level);
                const levelColor = skill.level > 70 ? "#36f445" : 
                                 skill.level > 40 ? "#f4d736" : "#f47236";
                
                output += `<pre>│  ${skill.icon} <span class="infra-skill">${skill.name.padEnd(20)}</span> ${bar} <span style="color: ${levelColor}">${skill.level}%</span>│</pre>`;
            });
            
            output += `<pre>│${' '.repeat(60)}│</pre>`;
        }
        
        output += `<pre>╰─ ${'─'.repeat(58)}╯</pre>`;
        output += `</div>`;
        
        new UniversalFunction().updateElement("div", "output", output);
    }
}
