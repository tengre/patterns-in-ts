/**
 * $Git: index.ts v0.2.0-8-2 2022-10-25 03:04:35+04:00 toor $
 */

import {Observable} from "./observable";
import {Observer} from "./observer";

const stream$ = new Observable();
const obs1 = new Observer(1);

console.log(`observer1 ${obs1.getState()}`);
