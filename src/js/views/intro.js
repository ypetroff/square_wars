import { html, render } from '../../../node_modules/lit-html/lit-html.js';

const introTemplate = () => html `
<section class="intro">
<h1>How it all staarted</h1>
<p>Lorem ipsum dolor sit amet consecteturd? Magnam reprehenderit, officiis ab molestiae obcaecati odio atque iusto hic maiores, voluptates deleniti ea dolorum, recusandae suscipit ad laudantium dolore?</p>
<button>Start Game</button>
</section>

`;

export const intro = () => {
    render(introTemplate(), document.querySelector('.game'));
}

function onStart() {

}