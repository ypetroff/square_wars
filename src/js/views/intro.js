import { html } from "../lib.js";

const introTemplate = (onStart) => html`
  <section class="intro">
    <h1>How it all staarted</h1>
    <p>
      Lorem ipsum dolor sit amet consecteturd? Magnam reprehenderit, officiis ab
      molestiae obcaecati odio atque iusto hic maiores, voluptates deleniti ea
      dolorum, recusandae suscipit ad laudantium dolore?
    </p>
    <button @click=${onStart}>Start Game</button>
  </section>
`;

export function intro(ctx) {
  ctx.render(introTemplate(onStart));

  function onStart() {
    ctx.page.redirect("/level_1");
  }
}


