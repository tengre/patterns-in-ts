/**
 * $Git: index.ts 0.4.0-25-1 2022-10-31 03:00:10+04:00 yds $
 */

import {Observable} from "./observable";
import {Observer} from "./observer";
import {Entity} from "./constructor";

console.log('--Pattern Constructor example--');
const entity = new Entity("entity", {id: 1, description: "entity object"});
console.log('name:', entity.key, 'value:', entity.value);

console.log('--Pattern Observer example--');
const stream$ = new Observable();
const obs1 = new Observer(1);
const obs2 = new Observer(42);
stream$.subscribe(obs1);
stream$.subscribe(obs2);
console.log(`observer1 ${obs1.getState()}, observer2 ${obs2.getState()}`);
stream$.update({type: 'INC'});
console.log(`observer1 ${obs1.getState()}, observer2 ${obs2.getState()}`);
stream$.update({type: 'DEC'});
console.log(`observer1 ${obs1.getState()}, observer2 ${obs2.getState()}`);
stream$.update({type: 'ADD', payload: 21});
console.log(`observer1 ${obs1.getState()}, observer2 ${obs2.getState()}`);
stream$.update({type: 'SUB', payload: 43});
console.log(`observer1 ${obs1.getState()}, observer2 ${obs2.getState()}`);
