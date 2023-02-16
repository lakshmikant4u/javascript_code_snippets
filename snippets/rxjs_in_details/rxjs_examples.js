// Instructions either run npm run play_rxjs or node rxjs_examples.js after npm i.
// 1. from operator

import { from } from 'rxjs';

const array = [1, 2, 'three', true];

from(array)
    .subscribe((val) => console.log(val)); // 1,2, 'three' true

