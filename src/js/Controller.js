import { Theme } from "./Theme.js";
import { About } from "./About.js";
import { Help } from "./Help.js";
import { History } from "./History.js";
import { Resume } from "./Resume.js";
import { Connect } from "./Connect.js";
import { Contact } from "./Contact.js";
import { UniversalFunction } from "./UniversalFunction.js";
import { Skills } from "./Skills.js"; 

export class Controller {
    constructor(InputedCommand) {
        this.InputedCommand = InputedCommand;
        this.parseCommand();
    }

    parseCommand() {
        let cmd = this.InputedCommand.split(" ")[0].toLowerCase();
        switch (cmd) {
            case "help":
                new Help().updateDOM();
                break;
            case "about":
                new About().updateDOM();
                break;
            case "whoami":
                new UniversalFunction().updateElement("div", "output",
                    "Ainda tô tentando descobrir...");
                break;
            case "theme":
                new Theme(this.InputedCommand.substring(cmd.length).trim().toLowerCase());
                break;
            case "history":
                new History().updateDOM();
                break;
            case "resume":
                new Resume(this.InputedCommand.substring(cmd.length).trim().toLowerCase());
                break;
            case "connect":
                new Connect().updateDOM();
                break;
            case "contact":
                new Contact().updateDOM();
                break;
            case "skills": // Novo caso para o comando skills
                new Skills().updateDOM();
                break;
            case "clear":
                document.querySelector("#terminal").innerHTML = "";
                break;
            case "exit":
                new UniversalFunction().updateElement("div", "error",
                    "Due to security reasons, you can't close this window using the 'exit' command.");
                break;
            default:
                let errMsg = `${cmd}: The term '${cmd}' is not recognized as a name of a command.<br>type 'help' to see the list of available commands.`;
                new UniversalFunction().updateElement("div", "error", errMsg);
                break;
        }
    }
}