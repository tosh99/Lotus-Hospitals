import {Component, OnInit} from '@angular/core';
import {DropdownConfigModel} from '../shared/components/dropdown/shared/models/dropdown.model';
import {Meta, Title} from '@angular/platform-browser';
import {AppUtils} from '../shared/services/app-utils';

@Component({
    selector: 'app-doctors',
    templateUrl: './doctors.component.html',
    styleUrls: ['./styles/doctors.component.scss']
})
export class DoctorsComponent implements OnInit {
    searchText = '';
    doctors = [];

    dpLocation = new DropdownConfigModel();
    dpSpecialty = new DropdownConfigModel();

    locations = [];
    specialties = [];
    selectedSpecialty;
    selectedLocation;
    endslice = 16;

    constructor(private title: Title, private meta: Meta, private appUtils: AppUtils) {
        this.title.setTitle('Lotus Hospitals houses the best doctors in Hyderabad & Vizag');
        this.meta.updateTag({
            name: 'description', content: 'Led by the expert pediatrician and founder of Lotus Hospitals, ' +
                'Dr. V.S.V. Prasad, our team of doctors and specialists are some of the best in the field.'
        });
    }

    ngOnInit(): void {
        window.scrollTo(0, 0);
        this.dpLocation.dropdown_placeholder = 'Location';
        this.dpSpecialty.dropdown_placeholder = 'Specialty';

        this.appUtils.parseEnv('doctors').subscribe((resp) => {
            this.doctors = resp.doctors;

            for (const doctor of this.doctors) {
                for (const specialty of doctor.specialty) {
                    if (this.specialties.indexOf(specialty) < 0) {
                        this.specialties.push(specialty);
                    }
                }

                for (const location of doctor.location) {
                    if (this.locations.indexOf(location) < 0) {
                        this.locations.push(location);
                    }
                }
            }


        }, (err) => {
        });
    }

    getLink(doctor): void{
        doctor.imglink = 'https://image.freepik.com/free-vector/doctor-character-background_1270-84.jpg';
    }

    search(): void {
        // Filter By String
        for (const doctor of this.doctors) {
            doctor.isdisplayed = true;


            if (this.searchText && this.searchText.trim().length > 0) {
                this.endslice = 500;

                doctor.isdisplayed = doctor.doctor_name.toLowerCase().includes(this.searchText.toLowerCase()) ||
                    doctor.specialty.toString().toLowerCase().includes(this.searchText.toLowerCase()) ||
                    doctor.qualifications.toString().toLowerCase().includes(this.searchText.toLowerCase());

                if (doctor.doctor_name.toLowerCase().includes(this.searchText.toLowerCase()) ||
                    doctor.specialty.toString().toLowerCase().includes(this.searchText.toLowerCase()) ||
                    doctor.qualifications.toString().toLowerCase().includes(this.searchText.toLowerCase())) {

                    console.log(doctor.doctor_name.toLowerCase());
                    console.log(this.searchText.toLowerCase());
                }

            }

        }

        // Filter By Specialty
        for (const doctor of this.doctors) {
            if (doctor.isdisplayed === true && this.selectedSpecialty) {
                doctor.isdisplayed = doctor.specialty.includes(this.selectedSpecialty);
            }
        }

        // Filter By Location
        for (const doctor of this.doctors) {
            if (doctor.isdisplayed === true && this.selectedLocation) {
                doctor.isdisplayed = doctor.location.includes(this.selectedLocation);
            }
        }
    }

    viewMore(): void {
        this.endslice = this.endslice + 16;
    }

}
