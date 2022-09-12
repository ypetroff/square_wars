import { page, render } from "./lib.js";
import { intro } from "./views/intro.js";
import { level_1 } from "./views/levels/level_1.js";


const game = document.querySelector(".game");

page(decorateContext);
page("/", intro);
page("/level_1", level_1);

page.start();

export function decorateContext(ctx, next) {
  ctx.render = renderGame;

  next();
}

function renderGame(templateResult) {
  render(templateResult, game);
}