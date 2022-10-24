/**
 *  $Git: observer.ts v0.1.1-3-2 2022-10-25 01:13:13+04:00 toor $
 */
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
