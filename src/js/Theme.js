import { UniversalFunction } from "./UniversalFunction.js";

export class Theme {
    constructor(options) {
        this.options = options;
        this.listOfThemes = ["dark-forest", "dark-ocean", "dark-space", "dark-night",
            "dark-cave", "dark-sea", "light-vanilla", "light-haze", "light-day", "light-sky"];
        this.loadSavedTheme(); // Carrega o tema salvo ao iniciar
        this.parseCommand();
    }

    parseCommand() {
        if (this.options === "") {
            this.list("");
            return;
        }
        let parts = this.options.split(" ");
        if (parts.length > 2) {
            let errMsg = `theme: too many arguments.<br>type 'theme --help' for help.`;
            new UniversalFunction().updateElement("div", "error", errMsg);
            return;
        }
        switch (parts[0]) {
            case "--name":
                this.setTheme(parts[1]);
                break;
            case "--list":
                this.list(parts.slice(1).toString());
                break;
            case "--help":
                this.help(parts.slice(1).toString());
                break;
            default:
                let errMsg = `theme: '${parts[0]}' is not a valid argument.<br>type 'theme --help' for help.`;
                new UniversalFunction().updateElement("div", "error", errMsg);
                break;
        }
    }

    setTheme(theme) {
        let output = document.createElement("div");
        let commandElements = document.getElementsByClassName("command");
        
        if (this.listOfThemes.includes(theme)) {
            // Remove todas as classes de tema primeiro
            document.body.classList.remove(...this.listOfThemes);
            // Adiciona o novo tema
            document.body.classList.add(theme);
            
            // Salva no localStorage
            localStorage.setItem("selectedTheme", theme);
            
            output.classList.add("output");
            output.innerHTML = `theme: theme set to ${theme}`;
        } else {
            output.classList.add("error");
            output.innerHTML = `theme: '${theme}' is not a valid theme.<br>
            type 'theme --list' to see the list of themes.`;
        }
        commandElements[commandElements.length - 1].appendChild(output);
    }

    loadSavedTheme() {
        const savedTheme = localStorage.getItem("selectedTheme");
        if (savedTheme && this.listOfThemes.includes(savedTheme)) {
            document.body.classList.add(savedTheme);
        }
    }

    list(value) {
        let outMsg = `List of available themes:<br>${this.listOfThemes.join("<br>")}`;
        new UniversalFunction().updateElement("div", "output", outMsg);
    }

    help(value) {
        let outMsg = `theme: sets the theme of the terminal.<br>
        usage: theme [option] [value]<br>
        options:<br>
        --name [theme name] sets the theme to the given theme name.<br>
        --list lists all the available themes.<br>
        --help shows this help message.`;
        new UniversalFunction().updateElement("div", "output", outMsg);
    }
}