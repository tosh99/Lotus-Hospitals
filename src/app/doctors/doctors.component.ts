import {Component, OnInit} from '@angular/core';
import {DropdownConfigModel} from "../shared/components/dropdown/shared/models/dropdown.model";

@Component({
    selector: 'app-doctors',
    templateUrl: './doctors.component.html',
    styleUrls: ['./styles/doctors.component.scss']
})
export class DoctorsComponent implements OnInit {
    searchText = '';
    doctors = [
        {
            doctor_name: 'Dr. V.S.V.Prasad',
            qualifications: 'MBBS, MD Pediatrics (A.I.I.M.S. New Delhi), India. F.R.C.P.C.H (UK)',
            position: 'Chief Consultant Neonatologist & Pediatric Intensivist',
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. V.S.V.Prasad',
            qualifications: 'MBBS, MD Pediatrics (A.I.I.M.S. New Delhi), India. F.R.C.P.C.H (UK)',
            position: 'Chief Consultant Neonatologist & Pediatric Intensivist',
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. V.S.V.Prasad',
            qualifications: 'MBBS, MD Pediatrics (A.I.I.M.S. New Delhi), India. F.R.C.P.C.H (UK)',
            position: 'Chief Consultant Neonatologist & Pediatric Intensivist',
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. V.S.V.Prasad',
            qualifications: 'MBBS, MD Pediatrics (A.I.I.M.S. New Delhi), India. F.R.C.P.C.H (UK)',
            position: 'Chief Consultant Neonatologist & Pediatric Intensivist',
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. V.S.V.Prasad',
            qualifications: 'MBBS, MD Pediatrics (A.I.I.M.S. New Delhi), India. F.R.C.P.C.H (UK)',
            position: 'Chief Consultant Neonatologist & Pediatric Intensivist',
            isdisplayed: true
        }
    ];

    dpLocation = new DropdownConfigModel();
    dpSpecialty = new DropdownConfigModel();

    locations = [1, 2, 3, 43];
    specialties = [];

    constructor() {
    }

    ngOnInit(): void {
        this.dpLocation.dropdown_placeholder = 'Location';
        this.dpSpecialty.dropdown_placeholder = 'Specialty';
    }

    search(): void {
        if (this.searchText === undefined || this.searchText.trim() === '') {
            for (const doctor of this.doctors) {
                doctor.isdisplayed = true;
            }
        } else {
            for (const doctor of this.doctors) {
                console.log(doctor.doctor_name.includes(this.searchText) || doctor.qualifications.includes(this.searchText) || doctor.position.includes(this.searchText));
                doctor.isdisplayed = doctor.doctor_name.includes(this.searchText) || doctor.qualifications.includes(this.searchText) || doctor.position.includes(this.searchText);
            }
        }

    }

}
