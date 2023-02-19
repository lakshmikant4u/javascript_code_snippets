// Instructions either run npm run play_rxjs or node rxjs_examples.js after npm i.
// 1. from operator

import { from } from 'rxjs';

const array = [1, 2, 'three', true];

from(array)
    .subscribe((val) => console.log(val)); // 1,2, 'three' true

// The simplest analogy is[].forEach(callback) :

// array → Observable
// forEach → subscribe
// callback → Observer

// Observer contains next, error, and complete functions… typescript way
// export interface Observer<T> { 
//     closed?: boolean;
//     next: (value: T) => void;
//     error: (err: any) => void;
//     complete: () => void;
// }

// 1.1 from with all three call back function of Observer

const array2 = [1, 2, 3];

from(array2).subscribe({
    next: (v) => console.log(v),
    complete: console.info,
    error: console.error
});
// 1, 2, 3

// 2. of operator
import { of } from 'rxjs';

// 3. Observables are lazy Push collections of multiple values.

import { Observable } from 'rxjs';

const observable = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
    }, 1000);
});

console.log('just before subscribe');
observable.subscribe({
    next(x) {
        console.log('got value ' + x);
    },
    error(err) {
        console.error('something wrong occurred: ' + err);
    },
    complete() {
        console.log('done');
    },
});
console.log('just after subscribe');

