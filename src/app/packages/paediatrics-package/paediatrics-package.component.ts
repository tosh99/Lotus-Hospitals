import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-paediatrics-package',
    templateUrl: './paediatrics-package.component.html',
    styleUrls: ['./styles/paediatrics-package.component.scss']
})
export class PaediatricsPackageComponent implements OnInit {
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
