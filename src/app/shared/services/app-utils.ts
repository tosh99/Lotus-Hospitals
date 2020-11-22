import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';


/*
*  This is the file which contains exposable global common functions
*  ready to be used inside the project.
*/

@Injectable()
export class AppUtils {

    constructor(public http: HttpClient) {
    }

    // Internal HTTP Functions --------------------------------------------------------------------- //
    private update(url, params): Observable<any> {
        return this.http.patch(url, params);
    }

    private delete(url): Observable<any> {
        return this.http.delete(url);
    }

    private getRequest(url): Observable<any> {
        return this.http.get(url);
    }

    private postRequest(url, params): Observable<any> {
        return this.http.post(url, params);
    }

    public parseEnv(urlkey, method = 'GET', payload = {}): Observable<any> {
        const url = 'assets/jsons/' + environment.apilist[urlkey];


        if (method === 'GET') {
            return this.getRequest(url);
        } else if (method === 'POST') {
            return this.postRequest(url, payload);
        } else if (method === 'UPDATE') {
            return this.update(url, payload);
        } else if (method === 'DELETE') {
            return this.delete(url);
        }
    }


}
