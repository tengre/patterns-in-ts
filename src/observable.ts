/**
 *  $Git: observable.ts v0.1.1-3-3 2022-10-25 02:41:10+04:00 toor $
 */
import {Observer} from "./observer";
import {Action} from "./types";

class Observable {
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
