/**
 * @file
 * An example file for modules
 * NOTE - This is the one file that uses webpack.
 */

import { ColorChange } from './modules/colorChange.js';

ColorChange.changeColor(`dodgerblue`, document.body);
