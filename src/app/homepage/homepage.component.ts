import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./styles/homepage.component.scss']
})
export class HomepageComponent implements OnInit {
    slideIndex = 1;
    stopAnimation = false;

    constructor() {
    }

    ngOnInit(): void {
        window.scrollTo(0, 0);
        this.showSlides();
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
