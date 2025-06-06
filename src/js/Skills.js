import { UniversalFunction } from "./UniversalFunction.js";

export class Skills {
    constructor() {
        this.skillsData = {
            "FRONT-END": [
                { name: "JavaScript", level: 30, icon: "" },
                { name: "HTML5", level: 70, icon: "" },
                { name: "CSS3", level: 50, icon: "" },
                { name: "Flutter", level: 30, icon: "" }
            ],
            "BACK-END/DADOS": [
                { name: "SQL Server", level: 40, icon: "" },
                { name: "WordPress", level: 88, icon: "" }
            ],
            "TI/INFRAESTRUTURA": [
                { name: "Redes", level: 92, icon: "" },
                { name: "Servidores", level: 57, icon: "" },
                { name: "Segurança", level: 65, icon: "" },
                { name: "Hardware", level: 90, icon: "" }
            ],
            "HABILIDADES PROFISSIONAIS": [
                { name: "Resolução de Problemas", level: 95, icon: "" },
                { name: "Aprendizado Rápido", level: 90, icon: "" },
                { name: "Trabalho em Equipe", level: 85, icon: "" },
                { name: "Web Design", level: 88, icon: "" }
            ]
        };
        
        this.barStyles = [
            { empty: "░", filled: "█", color: "#4fc3f7" },
            { empty: "○", filled: "●", color: "#b5cea8" },
            { empty: "▱", filled: "▰", color: "#dcdcaa" },
            { empty: "⚬", filled: "⚫", color: "#ce9178" }
        ];
    }

    createSkillBar(level, styleIndex = 0) {
        const style = this.barStyles[styleIndex % this.barStyles.length];
        const barLength = 20;
        const filled = Math.round((level / 100) * barLength);
        return `<span style="color: ${style.color}">${style.filled.repeat(filled)}${style.empty.repeat(barLength - filled)}</span>`;
    }

    getRandomEmoji() {
        const emojis = ["✨", "⚡", "🚀", "🔧", "🎯", "🧠", "👨‍💻", "🔨", "🌈"];
        return emojis[Math.floor(Math.random() * emojis.length)];
    }

    updateDOM() {
        let output = `<div class='skills-output'>`;
        output += `<pre>╭─ 🛠️ HABILIDADES ${this.getRandomEmoji()} ${'─'.repeat(40)}╮</pre>`;
        
        let categoryIndex = 0;
        for (const category in this.skillsData) {
            output += `<pre>│  <span class='skill-category'>📁 ${category.toUpperCase()}</span>${' '.repeat(50 - category.length)}│</pre>`;
            
            this.skillsData[category].forEach(skill => {
                const bar = this.createSkillBar(skill.level, categoryIndex);
                const levelColor = skill.level > 70 ? "#b5cea8" : 
                                 skill.level > 40 ? "#dcdcaa" : "#ce9178";
                
                output += `<pre>│  ${skill.icon || "•"} <span class="skill-name">${skill.name.padEnd(20)}</span> ${bar} <span style="color: ${levelColor}">${skill.level}%</span>│</pre>`;
            });
            
            output += `<pre>│  ${' '.repeat(58)}│</pre>`;
            categoryIndex++;
        }
        
        output += `<pre>╰─ 🔍 Dica: experimente 'skills --style' para mudar o visual ${'─'.repeat(7)}╯</pre>`;
        output += `</div>`;
        
        new UniversalFunction().updateElement("div", "output", output);
    }
}
