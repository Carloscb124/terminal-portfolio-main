import { UniversalFunction } from "./UniversalFunction.js";

export class Contact{
    toString(){
        return `<p class="two-col">
                    <span class='keyword'>Telefone</span>
                    <span><a href="tel:+55(15)998533336">+55(15)998533336</a></span>
                    <span class='keyword'>Email</span>
                    <span><a href="mailto:cb473355@gmail.com">cb473355@gmail.com</a></span>
                    <span class='keyword'>Whatsapp</span>
                    <span><a href="https://wa.me/+5515998533336" target="_blank">+5515998533336</a></span>
                </p>
        `;
    }
    updateDOM(){
        new UniversalFunction().updateElement("div", "output", this.toString());
    }
}