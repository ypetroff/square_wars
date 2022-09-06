import { html } from '../lib.js';

const level_1Template = () => html `
<section class="level1">
<h1>This is level_1</h1>
<p>Lorem ipsum dolor sit amet consecteturd? Magnam reprehenderit, officiis ab molestiae obcaecati odio atque iusto hic maiores, voluptates deleniti ea dolorum, recusandae suscipit ad laudantium dolore?</p>
<button>Start Game</button>
</section>
`;

export function level_1 (ctx) {
    ctx.render(level_1Template());

    function onStart() {

    }
}

