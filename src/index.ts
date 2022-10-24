/**
 * $Git: index.ts v0.2.0-8-4 2022-10-25 03:17:29+04:00 toor $
 */

import {Observable} from "./observable";
import {Observer} from "./observer";

const stream$ = new Observable();

const obs1 = new Observer(1);
const obs2 = new Observer(42);

stream$.subscribe(obs1);
stream$.subscribe(obs2);

console.log(`observer1 ${obs1.getState()}, observer2 ${obs2.getState()}`);
