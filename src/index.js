
const { html, render } = require('lit-html');
const axios = require('axios').default;

import text from '../src/commands.txt';
import appStyle from '../src/app.css';
import * as utils from './utils';

const template = (ctx) => html`
<style>${appStyle}</style>
<div>
    <button id="btn" @click=${ctx.myShow}>show header</button>
    <h1 id="header">header</h1>
    <input id="content" type="text" />
    <br><br><br>
    <button @click=${ctx.krasi}>show name</button>
    <h2>${ctx.textContent}</h2>

</div>
    `;



class AppRoot extends HTMLElement {

    textContent = text;

    krasi = (event) => {
        const divEl = event.target.parentElement;
        const inputEl = divEl.children[2];
        let result = utils.myName(inputEl.value);
        let h2El = divEl.children[7];
        h2El.textContent = result;


    };

    constructor() {
        super();
        this.name = 'Krasimir';
        this.fullName = `${this.name} Kostadinov`;
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

// const template = (ctx) => html`

// <div>
//     <h1>Hello Webpack</h1>
//     <p>${ctx.krasi('Alex')}</p>
// </div>
//     `;



// class AppRoot extends HTMLElement {

//     krasi = (name) => {
//         let result = utils.myName(name);
//         return result;
//     };

//     constructor() {
//         super();
//         this.name = 'Krasimir';
//         this.fullName = `${this.name} Kostadinov`;
//         const root = this.attachShadow({ mode: 'open' });
//         this.update = () => {
//             render(template(this), root, { eventContext: true });
//         }

//         this.update();
//     }

//     connectedCallback() {
//         axios.get('https://jsonplaceholder.typicode.com/users').then((users) => {
//             console.log(users);
//         });

//     }



// }

// customElements.define('app-root', AppRoot);