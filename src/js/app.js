import page from '../../node_modules/page/page.mjs';
import { intro } from './views/intro.js';

page('/', intro);

page.start();