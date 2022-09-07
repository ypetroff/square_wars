import { html } from "../lib.js";

//TODO: add survival mod

const introTemplate = (onStart) => html`
  <section class="screen intro">
    <article>
    <h1>How it all started</h1>
    <p class="par">
      Lorem ipsum dolor sit amet consecteturd? Magnam reprehenderit, officiis ab
      molestiae obcaecati odio atque iusto hic maiores, voluptates deleniti ea
      dolorum, recusandae suscipit ad laudantium dolore?
    </p>
    </article>
    <article>
    <h2>Instructions</h2>
    <p class="par">
      Lorem ipsum dolor sit amet consecteturd? Magnam reprehenderit, officiis ab molestiae obcaecati odio atque iusto hic maiores, voluptates deleniti ea dolorum, recusandae suscipit ad laudantium dolore?
    </p>
    </article>
    
    <button class="button game" @click=${onStart}>Start Game</button>
    <button class="button survival">Survival Mod</button>
  </section>
`;

export function intro(ctx) {
  ctx.render(introTemplate(onStart));

  function onStart() {
    ctx.page.redirect("/level_1");
  }
}


