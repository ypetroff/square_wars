import { html } from "../../lib.js";
import { gameLoop } from "../../engine.js";

const level_1Template = () => html`
  <section class="screen level1">
    <h1>Level 1</h1>
    <div class="hero"></div>
  </section>
`;

export function level_1(ctx) {
  
  window.requestAnimationFrame(gameLoop);
  ctx.render(level_1Template());
}
