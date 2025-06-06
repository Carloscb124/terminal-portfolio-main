import { UniversalFunction } from "./UniversalFunction.js";

export class Skills {
    constructor() {
        this.skillsData = {
            "FRONT-END": [
                { name: "JavaScript", level: 90 },
                { name: "HTML5", level: 95 },
                { name: "CSS3", level: 85 },
                { name: "Flutter", level: 70 }
            ],
            "BACK-END/DADOS": [
                { name: "SQL Server", level: 80 },
                { name: "WordPress", level: 88 }
            ],
            "TI/INFRAESTRUTURA": [
                { name: "Redes", level: 92 },
                { name: "Servidores", level: 87 },
                { name: "Segurança", level: 85 },
                { name: "Hardware", level: 90 }
            ],
            "HABILIDADES PROFISSIONAIS": [
                { name: "Resolução de Problemas", level: 95 },
                { name: "Aprendizado Rápido", level: 90 },
                { name: "Trabalho em Equipe", level: 85 },
                { name: "Web Design", level: 88 }
            ]
        };
    }

    createSkillBar(level) {
        const barLength = 20;
        const filled = Math.round((level / 100) * barLength);
        return '█'.repeat(filled) + ' '.repeat(barLength - filled);
    }

    updateDOM() {
        let output = "<div class='skills-output'>";
        output += "<pre>╭─ Habilidades Técnicas ───────────────────────────────────────────╮</pre>";
        
        for (const category in this.skillsData) {
            output += `<pre>│  <span class='skill-category'>[${category}]</span>${' '.repeat(56 - category.length)}│</pre>`;
            
            this.skillsData[category].forEach(skill => {
                const bar = this.createSkillBar(skill.level);
                output += `<pre>│  █ ${skill.name.padEnd(18)} ${bar} ${skill.level}%${' '.repeat(8 - skill.level.toString().length)}│</pre>`;
            });
            
            output += "<pre>│                                                                  │</pre>";
        }
        
        output += "<pre>╰──────────────────────────────────────────────────────────────────╯</pre>";
        output += "</div>";
        
        new UniversalFunction().updateElement("div", "output", output);
    }
}