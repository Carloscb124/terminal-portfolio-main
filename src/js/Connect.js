import { UniversalFunction } from "./UniversalFunction.js";

export class Connect{
    toString(){
        return `<p class="two-col">
                    <span class='keyword'>GitHub</span>
                    <span><a href="https://github.com/Carloscb124" target="_blank">github.com/Carloscb124</a></span>
                    <span class='keyword'>LeetCode</span>
                    <span><a href="https://leetcode.com/u/Carloscb124/" target="_blank">leetcode.com/Carloscb124/</a></span>
                    <span class='keyword'>LinkedIn</span>
                    <span><a href="https://www.linkedin.com/in/carloscb124" target="_blank">linkedin.com/in/Carloscb124/</a></span>
                </p>
        `;
    }
    updateDOM(){
        new UniversalFunction().updateElement("div", "output", this.toString());
    }
}