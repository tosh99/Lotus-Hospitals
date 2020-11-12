import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
    selector: 'app-womens-package',
    templateUrl: './womens-package.component.html',
    styleUrls: ['./styles/womens-package.component.scss']
})
export class WomensPackageComponent implements OnInit {
    faqlist = [
        {
            title: 'Why do women need to get a master healthcare check-up done?\n',
            content: 'A health check-up is an effective process that helps in identifying early signs of health issues and helps in maintaining a healthy life. A master health check-up is done to identify these issues, and advise diagnosis and cure at a very early stage. \n',
            isvisible: false
        },
        {
            title: 'What checkup is recommended based on age?',
            content: 'A master health check-up is recommended between the ages of  25 - 35 years. Above 35 years an executive health check-up is recommended, twice a year.',
            isvisible: false
        },
        {
            title: 'How often should I get a health check-up done?',
            content: 'Even if you feel fine, a master / executive health check-up is recommended once a year or as per your doctor’s advice. These health check-ups help you prevent future health problems.',
            isvisible: false
        },
        {
            title: 'What should an annual health check-up package for women include?',
            content: 'A typical healthcare package for women would include Ultrasound, PaP Smear, Clinical Breast Examination and other routine blood investigations.\n Look at the Annual Health Check-up Package at Lotus Hospitals',
            isvisible: false
        },
        {
            title: 'What is the protocol after the test results are out?',
            content: 'As soon as your results are ready, meet with your gynecologist and consult with them  or you can set up an appointment with one of our esteemed gynecologists at Lotus Hospitals through the website or call at the given branch number on the Contact page.',
            isvisible: false
        },
        {
            title: 'How do I get the healthcare check-up done?',
            content: 'Please contact our call centre at 040 - 4040 4455',
            isvisible: false
        },

    ];

    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Women’s healthcare packages at Lotus Hospitals');
        this.meta.updateTag({
            name: 'description', content: 'Get your master health check-up for an early detection and treatment at Lotus Hospitals.' +
                ' Visit your nearest branch now to consult with the best gynecologists.'
        });
    }

    ngOnInit(): void {
        window.scrollTo(0, 0);
    }

}
