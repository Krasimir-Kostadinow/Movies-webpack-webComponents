import { html, render } from 'lit-html';


const template = (ctx) => html`
<div>
    <button id="btn" @click=${ctx.myShow}>show header</button>
    <h1 id="header">Im header</h1>
</div>
    `;



class AppRoot extends HTMLElement {
    constructor() {
        super();
        this.name = 'Krasimir';
        this.fullName = `${this.name} Kostadinov`;
        const root = this.attachShadow({ mode: 'closed' });
        this.update = () => {
            render(template(this), root, { eventContext: true });
        }

        this.myShow = (event) => {
            const divEl = event.target.parentElement;
            const header = divEl.children[1];
            if (event.target.textContent === 'show header') {
                event.target.textContent = 'hide header';
                header.textContent = this.fullName;
                header.style.display = 'block';
                this.update();
            } else {
                event.target.textContent = 'show header';
                header.textContent = '';
                header.style.display = 'none';
                this.update();
            }
        }

        this.update();
    }

    connectedCallback() {

    }



}

customElements.define('app-root', AppRoot);









