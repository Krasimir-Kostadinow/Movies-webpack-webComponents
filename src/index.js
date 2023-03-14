const { html, render } = require('lit-html');
const axios = require('axios').default;
const text = require('../src/commands.txt');
const appStyle = require('../src/app.css');

const template = (ctx) => html`
<style>${appStyle}</style>
<div>
    <button id="btn" @click=${ctx.myShow}>show header</button>
    <h1 id="header">header</h1>
    <button @click=${ctx.krasi}>krasi console</button>
    <h2>${ctx.contentText}</h2>
</div>
    `;



class AppRoot extends HTMLElement {

    contentText = text;

    krasi = () => {
        console.log('krasi');
        console.log(this);
    };

    constructor() {
        super();
        this.name = 'Krasimir';
        this.fullName = `${this.name} Kostadinov and heks`;
        const root = this.attachShadow({ mode: 'open' });
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
        console.log(123);
        axios.get('https://jsonplaceholder.typicode.com/users').then((users) => {
            console.log(users);
        });
    }



}

customElements.define('app-root', AppRoot);




// const root = document.getElementById('root');




// class App {
//     constructor(name) {
//         this.base = "My name is";
//         this.content = `${this.base} ${name}`;
//     }
// }

// let data = new App('Krasimir');
// console.log(data);
// root.textContent = data.content;