import { UniversalFunction } from "./UniversalFunction.js";

export class About {
    toString() {
        return `<p>Sou o Carlos, estudante do <b>Senac</b>, <b>atualmente cursando TI, mas já fiz Análise e desenvolvimento de sistemas.</b> Sou natural de São Paulo. Sempre gostei de tecnologia e hoje busco aprimorar minhas habilidades todos os dias. Estou mais envolvido com desenvolvimento web, utilizando JavaScript, CSS e HTML. Também estou estudando para me tornar um profissional de Design UI/UX. Quando não estou codando ou estudando, estou jogando xadrez, escutando música ou tocando guitarra. Gosto de ler e de explorar um mundo introspectivo.
        Aqui vai um pouco do que gosto de escutar:
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/1WuqlDJb7Z2ipBhM6ww7QI?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
        </iframe>
        </p>`;
    }
    
    updateDOM() {
        new UniversalFunction().updateElement("div", "output", this.toString());
    }
}