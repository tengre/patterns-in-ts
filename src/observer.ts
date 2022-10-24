/**
 * $Git: observer.ts v0.1.1-3-4 2022-10-25 02:46:00+04:00 toor $
 */
import {Action} from "./types";

export class Observer {
    protected state: number;
    protected initialState: number;
    constructor(state: number) {
        this.state = state;
        this.initialState = state;
    }

    getState() {
        return this.state;
    }

    getInitialState() {
        return this.initialState;
    }

    update(action: Action) {
        switch(action.type) {
            case 'INC':
                this.state = ++this.state;
                break;
            case 'DEC':
                this.state = --this.state;
                break;
            case 'ADD':
                this.state = this.state + (action?.payload ?? 0);
                break;
            case 'SUB':
                this.state = this.state - (action?.payload ?? 0);
                break;
            default: {
                this.state = this.initialState;
            }
        }
    }
}