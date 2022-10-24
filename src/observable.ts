/**
 *  $Git: observable.ts v0.2.0-8-2 2022-10-25 03:04:03+04:00 toor $
 */
import {Observer} from "./observer";
import {Action} from "./types";

export class Observable {
    protected observers: Observer[];
    constructor() {
        this.observers = [];
    }

    subscribe(observer: Observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer: Observer) {
        this.observers = this.observers.filter(item => item !== observer);
    }

    update(action: Action) {
        this.observers.forEach(
            observer => {
                observer.update(action)
            }
        )
    }
}
