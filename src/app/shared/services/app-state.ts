import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';


@Injectable()
export class AppState {

    public static appstate = new BehaviorSubject(null);

    constructor() {
        let gbstate = localStorage.getItem('globalState');
        if (gbstate === null || gbstate === undefined) {
            gbstate = JSON.parse('{}');
        } else {
            if (typeof (gbstate) === 'string') {
                try {
                    gbstate = JSON.parse(gbstate);
                } catch (e) {
                    gbstate = JSON.parse('{}');
                }
            }
        }

        AppState.appstate.next(gbstate);
    }

    // Exposed Functions --------------------------------------------------------------------- //
    public setGlobalState(key, value): void {

        // Check Global State Definition
        let temp = AppState.appstate.getValue();

        if (temp === null || temp === undefined) {
            temp = {};
        } else {
            if (typeof (temp) === 'string') {
                try {
                    temp = JSON.parse(temp);
                } catch (e) {
                    temp = {};
                }
            } else {
                try {
                    temp = JSON.stringify(temp);
                    temp = JSON.parse(temp);
                } catch (e) {
                    temp = {};
                }
            }
        }

        // Set Global State Value
        try {
            temp[key] = value;
        } catch (e) {
            temp = {};
            temp[key] = value;
        }

        localStorage.setItem('globalState', JSON.stringify(temp));
        AppState.appstate.next(temp);
    }

    public removeGlobalState(key): void {
        let temp = AppState.appstate.getValue();
        if (temp === null || temp === undefined) {
            temp = {};
        } else {
            if (typeof (temp) === 'string') {
                try {
                    temp = JSON.parse(temp);
                } catch (e) {
                    temp = {};
                }
            } else {
                try {
                    temp = JSON.stringify(temp);
                    temp = JSON.parse(temp);
                } catch (e) {
                    temp = {};
                }
            }
        }
        delete temp[key];

        AppState.appstate.next(temp);
        localStorage.setItem('globalState', JSON.stringify(temp));
    }

    public clearGlobalState(): void {
        localStorage.clear();
    }

}
