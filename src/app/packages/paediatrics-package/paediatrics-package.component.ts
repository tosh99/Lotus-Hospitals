import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-paediatrics-package',
    templateUrl: './paediatrics-package.component.html',
    styleUrls: ['./styles/paediatrics-package.component.scss']
})
export class PaediatricsPackageComponent implements OnInit {
    faqlist = [
        {
            title: 'How do I get the healthcare check-up done?',
            content: 'Please contact our call centre at 040 - 4040 4455',
            isvisible: false
        },
        {
            title: 'How often should I be getting the healthcare check-up done for my child?',
            content: 'For early detection, prevention and treatment, we recommend getting regular healthcare check-ups once a year',
            isvisible: false
        },
        {
            title: 'Why does my child need to get the master healthcare check-up done?',
            content: 'Early detection of anemia (low hemoglobin)\n' +
                'Anemia is very common in growing children and the leading cause of growth failure and poor intellectual performance in school going children.\n' +
                'Early detection of urinary problems & kidney diseases\n' +
                'Urinary infections and undetected kidney diseases in children can adversely affect their health growing up.\n' +
                'Early detection of dental diseases\n' +
                'Decaying of the teeth and gum diseases adversely affect children’s overall health. Oral hygiene is extremely important.\n' +
                'Early detection of enlarged tonsils and adenoids \n' +
                'Tonsillar and adenoidal enlargement causes recurrent throat, sinus and ear infections affecting children’s health and can sometimes cause deafness if left undiagnosed.\n' +
                'Early detection of liver diseases\n' +
                'Abnormal functioning of the liver affects digestive and other systemic function in a child’s body.\n' +
                'Early detection of heart, nervous system and other ailments\n' +
                'Our pediatricians can examine and detect early heart, brain (nervous  system) and other organ system disease and counsel regarding appropriate evaluation and treatment.\n' +
                'Proper Nutritional Guidance & Counselling\n' +
                'Children have different rates of growth during infancy and childhood. Diet and nutrition play a vital role in their overall health and the development of a strong immune system.\n', isvisible: false
        },

    ];

    constructor() {
    }

    ngOnInit(): void {
        window.scrollTo(0, 0);
    }

}
