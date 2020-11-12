import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
    selector: 'app-paediatrics-package',
    templateUrl: './paediatrics-package.component.html',
    styleUrls: ['./styles/paediatrics-package.component.scss']
})
export class PaediatricsPackageComponent implements OnInit {
    faqlist = [
        {
            title: 'How do I get the healthcare check-up done?',
            content: ['Please contact our call centre at 040 - 4040 4455'],
            isvisible: false
        },
        {
            title: 'How often should I be getting the healthcare check-up done for my child?',
            content: ['For early detection, prevention and treatment, we recommend getting regular healthcare check-ups once a year'],
            isvisible: false
        },
        {
            title: 'Why does my child need to get the master healthcare check-up done?',
            content: [
                'Early detection of anemia (low hemoglobin)', 'Anemia is very common in growing children and the leading cause of growth failure and poor intellectual performance in school going children.',
                'Early detection of urinary problems & kidney diseases',
                'Urinary infections and undetected kidney diseases in children can adversely affect their health growing up.',
                'Early detection of dental diseases',
                'Decaying of the teeth and gum diseases adversely affect children’s overall health. Oral hygiene is extremely important.',
                'Early detection of enlarged tonsils and adenoids ',
                'Tonsillar and adenoidal enlargement causes recurrent throat, sinus and ear infections affecting children’s health and can sometimes cause deafness if left undiagnosed.',
                'Early detection of liver diseases',
                'Abnormal functioning of the liver affects digestive and other systemic function in a child’s body.',
                'Early detection of heart, nervous system and other ailments',
                'Our pediatricians can examine and detect early heart, brain (nervous  system) and other organ system disease and counsel regarding appropriate evaluation and treatment.',
                'Proper Nutritional Guidance & Counselling',
                'Children have different rates of growth during infancy and childhood. Diet and nutrition play a vital role in their overall health and the development of a strong immune system.']
        },

    ];

    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Children’s healthcare packages at Lotus Hospitals');
        this.meta.updateTag({
            name: 'description', content: 'Get your child’s master health check-up for an early detection and treatment at the ' +
                'best pediatric hospital. Visit your nearest branch now.'
        });
    }

    ngOnInit(): void {
        window.scrollTo(0, 0);
    }

}
