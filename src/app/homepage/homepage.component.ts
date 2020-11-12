import {Component, HostListener, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./styles/homepage.component.scss']
})
export class HomepageComponent implements OnInit {
    slideIndex = 1;
    stopAnimation = false;
    isLeftAwardsDisplayed = true;
    screenHeight;
    screenWidth;
    isDesktop = true;


    @HostListener('window:resize', ['$event'])
    getScreenSize(event?): void {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
    }


    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Quality Healthcare at Lotus Hospitals, Hyderabad & Vizag');
        this.meta.updateTag({name: 'description', content: 'We are central to your family\'s comprehensive care. Find Lotus Hospitals near you - Lakdi ka Pul, Kukatpally, LB Nagar & Visakhapatnam.'});
        this.getScreenSize();
    }

    ngOnInit(): void {
        window.scrollTo(0, 0);
        this.showSlides();

        if (this.screenWidth < 768) {
            this.isDesktop = false;
            this.showAwards();
        }
    }

    showAwards(): void {
        this.isLeftAwardsDisplayed = !this.isLeftAwardsDisplayed;

        setTimeout(() => {
            this.showAwards();
        }, 2500);
    }

    // Next/previous controls
    plusSlides(n): void {
        this.slideIndex += n;
        this.stopAnimation = true;
        this.showSlides();
    }


    showSlides(): void {
        let i;
        const slides = document.getElementsByClassName('mySlides') as HTMLCollectionOf<HTMLElement>;

        if (!this.stopAnimation) {
            this.slideIndex += 1;
        }

        if (this.slideIndex > slides.length) {
            this.slideIndex = 1;
        } else if (this.slideIndex === 0) {
            this.slideIndex = slides.length;
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slides[this.slideIndex - 1].style.display = 'block';

        if (!this.stopAnimation) {
            setTimeout(() => {
                this.showSlides();
            }, 6000); // Change image every 2 seconds
        }

    }

}
