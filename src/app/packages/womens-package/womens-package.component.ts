import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-womens-package',
    templateUrl: './womens-package.component.html',
    styleUrls: ['./styles/womens-package.component.scss']
})
export class WomensPackageComponent implements OnInit {
    faqlist = [
        {
            title: 'Early Detection of Anemia',
            content: 'Anemia  is  very  common  in  growing  children  and  the  leading  cause  of  growth  failure  and  poor  intellectual  performance  in  school  going  children.',
            isvisible: false
        },
        {
            title: 'Early Detection of Anemia',
            content: 'Anemia  is  very  common  in  growing  children  and  the  leading  cause  of  growth  failure  and  poor  intellectual  performance  in  school  going  children.',
            isvisible: false
        },
        {
            title: 'Early Detection of Anemia',
            content: 'Anemia  is  very  common  in  growing  children  and  the  leading  cause  of  growth  failure  and  poor  intellectual  performance  in  school  going  children.',
            isvisible: false
        },

    ];

    constructor() {
    }

    ngOnInit(): void {
        window.scrollTo(0, 0);
    }

}
