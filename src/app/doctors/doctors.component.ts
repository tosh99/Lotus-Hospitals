import {Component, OnInit} from '@angular/core';
import {DropdownConfigModel} from '../shared/components/dropdown/shared/models/dropdown.model';
import {Meta, Title} from '@angular/platform-browser';

@Component({
    selector: 'app-doctors',
    templateUrl: './doctors.component.html',
    styleUrls: ['./styles/doctors.component.scss']
})
export class DoctorsComponent implements OnInit {
    searchText = '';
    doctors = [
        {
            doctor_name: 'Dr. V.S.V. PRASAD',
            qualifications: 'MBBS, MD Pediatrics (A.I.I.M.S.). F.R.C.P.C.H (UK), Fellow in Pediatrics, Crit.Care & Neonatology (UK & USA)',
            specialty: [
                'NEONATOLOGY (NICU)',
                'PEDIATRICS',
                'PEDIATRICS INTENSIVE CARE'
            ],
            location: [
                'Lakadikapul', 'Kukatpally'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. ANNAPURNA TADAVARTHY',
            qualifications: 'MBBS, DCH (UK), MRCPCH (UK)',
            specialty: [
                'NEONATOLOGY (NICU)',
                'PEDIATRICS',
                'PEDIATRICS INTENSIVE CARE'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. R SRIDIVYA',
            qualifications: 'MBBS, DNB (PED)',
            specialty: [
                'NEONATOLOGY (NICU)',
                'PEDIATRICS',
                'PEDIATRICS INTENSIVE CARE'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. SAMRIDHI GOYAL',
            qualifications: 'MD Peds, ISPN Fellowship.Ped.Nephro',
            specialty: [
                'PEDIATRIC NEPHROLOGY'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. VAMSIDHAR KEDAR',
            qualifications: 'MBBS, DCH , DAA (CMC, VELLORE)',
            specialty: [
                'PEDIATRIC ALLERGY & ASTHMA'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. RAMESH SRINIVASAN',
            qualifications: 'MBBS. MD (PGI), MRCP (UK), FRCPCH (UK), CCT',
            specialty: [
                'PEDIATRIC GASTROENTEROLOGY'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. S.V.S.S. PRASAD',
            qualifications: 'MBBS, MD (PED), PGI, DM (MEDICAL ONCOLOGY)',
            specialty: [
                'PEDIATRIC HEMATOLOGY & ONCOLOGY'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. K. SAMBA SIVAIAH',
            qualifications: 'MBBS, MD, DM (MEDICAL ONCOLOGY)',
            specialty: [
                'PEDIATRIC HEMATOLOGY & ONCOLOGY'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. MRUDULA KARNATI',
            qualifications: 'MBBS, MD, DNB (Neuro)',
            specialty: [
                'PEDIATRIC NEUROLOGY'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. ANJAN PYAL',
            qualifications: 'MBBS, MD. DM (Neuro)',
            specialty: [
                'PEDIATRIC NEUROLOGY'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. CHANDRA SEKHAR',
            qualifications: 'MBBS, MS, MCH (Neuro)',
            specialty: [
                'PEDIATRIC NEURO SURGERY'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. A.LAXMAN RAO',
            qualifications: 'MBBS, MS, MCH (Neuro)',
            specialty: [
                'PEDIATRIC NEURO SURGERY'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. ANJANI KUMAR',
            qualifications: 'B.Sc, BPT (PHYSIO)',
            specialty: [
                'PEDIATRIC NEURO REHABILITATION AND PHYSIOTHERAPY'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. SUDEEP KUMAR',
            qualifications: 'BPT (Physio)',
            specialty: [
                'PEDIATRIC NEURO REHABILITATION AND PHYSIOTHERAPY'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'MS. SANDHYA & Mr. ARJUN',
            qualifications: 'DIPLOMA IN EEG',
            specialty: [
                'DEPT. OF EEG & NEURO ANCILLARY'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. ASNA ANJUM',
            qualifications: 'MBBS, MD (DERMATOLOGY)',
            specialty: [
                'PEDIATRIC DERMATOLOGY'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. AMARNATH KULKARNI',
            qualifications: 'MBBS, DCH (OSM), DNB (PED) , FELLOWSHIP IN PEDIATRICS & ADOLESCENT ENDOCRINOLOGY (RGUHS)',
            specialty: [
                'PEDIATRIC ENDOCRINOLOGY'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. MANDAVA RAMYA CHOWDARY',
            qualifications: 'BDS, MDS (Ped Prevenntive dentistry)',
            specialty: [
                'PEDIATRIC DENTISTRY'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. A. RADHA RAMA DEVI',
            qualifications: 'MBBS, MD (PEDIATRICS)',
            specialty: [
                'GENETIC AND METABOLOSIM'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. RAMA SWAMY',
            qualifications: 'MBBS, M.S , M.Ch (Pediatric Surg-AIIMS, N.Delhi)',
            specialty: [
                'PEDIATRIC SURGERY'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. YOGA NAGENDRA',
            qualifications: 'MBBS, M.S. M.Ch (Ped. Surg)',
            specialty: [
                'PEDIATRIC SURGERY'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. M. SHIVA RAM .',
            qualifications: 'MBBS, MS, M.Ch (Plastic & Cosmetic surgery)',
            specialty: [
                'PEDIATRIC PLASTIC & COSMETIC SURGERY'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. P. NALINI KANTH',
            qualifications: 'MBBS, DLO (ENT)',
            specialty: [
                'PEDIATRIC ENT SURGERY'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. KIRAN S. PARYANI',
            qualifications: 'MBBS, MS (ENT)',
            specialty: [
                'PEDIATRIC ENT SURGERY'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. MURALIDHAR',
            qualifications: 'MBBS, DNB, FRCS',
            specialty: [
                'PEDIATRIC OPTHALMOLOGY'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. P. SAI KIRANMAYEE',
            qualifications: 'MBBS, MS (Opthal)',
            specialty: [
                'PEDIATRIC OPTHALMOLOGY'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. MOHD. ASIF HANEEF',
            qualifications: 'MBBS, M. S (Ortho)',
            specialty: [
                'PEDIATRIC ORTHOPEDICS'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. VENKAT REDDY',
            qualifications: 'MBBS, MD (Pulmo)',
            specialty: [
                'DEPT. OF PULMONOLOGY'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. RAFI',
            qualifications: 'MBBS, MD (Pulm)',
            specialty: [
                'DEPT. OF PULMONOLOGY'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. SUDHEEP VARMA',
            qualifications: 'MBBS, MD, DM (Card)',
            specialty: [
                'PEDIATRIC CARDIOLOGY'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. ASIF',
            qualifications: 'MBBS, MD, DM (Card)',
            specialty: [
                'PEDIATRIC CARDIOLOGY'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. M.S.R.C. MURTHY',
            qualifications: 'MBBS, MD (ANESTHESIA)',
            specialty: [
                'DEPT. OF ANESTHESIA & CRITICAL CARE'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. MALLIKARJUN',
            qualifications: 'MBBS, MD (ANESTHESIA)',
            specialty: [
                'DEPT. OF ANESTHESIA & CRITICAL CARE'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. CHAITANYA',
            qualifications: 'MBBS, MD (ANESTHESIA)',
            specialty: [
                'DEPT. OF ANESTHESIA & CRITICAL CARE'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. SUJATHA AUDIMULAPU',
            qualifications: 'MBBS, MD, DGO',
            specialty: [
                'DEPT. OF OBSTETRICS & GYNECOLOGY'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. ARSHIA MEHNAZ',
            qualifications: 'MBBS, DGO (Russia)',
            specialty: [
                'DEPT. OF OBSTETRICS & GYNECOLOGY'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. K. UMA',
            qualifications: 'MBBS, DGO',
            specialty: [
                'DEPT. OF OBSTETRICS & GYNECOLOGY'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. VEENA MANNE',
            qualifications: 'MBBS, DNB (OBG)',
            specialty: [
                'DEPT. OF OBSTETRICS & GYNECOLOGY'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. VINODA VUNNAM',
            qualifications: 'Diploma in Lactation.',
            specialty: [
                'DEPT. OF LACTATION & DUALA SERVICES'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. SWETHA JAHNAVI',
            qualifications: 'MBBS, DGO, FELLOWSHIP (Lap.Surg)',
            specialty: [
                'GYNEC LAPAROSCOPIC SURGERY'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. B.R. NIRMALA',
            qualifications: 'MBBS, DGO, DNB , FELLOWSHIP IN FERTILITY',
            specialty: [
                'DEPT. OF FERTILITY'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. RAGINI GOUD',
            qualifications: 'MBBS, DGO, FELLOW IN REPRODUCTIVE MEDICINE',
            specialty: [
                'DEPT. OF FERTILITY'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. TAHER ALI',
            qualifications: 'MBBS, DNB (Gen.Med)',
            specialty: [
                'DEPT. OF DIABETOLOGY & INT. MEDICINE'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'MS. AFIA HUSSAIN',
            qualifications: 'M.Sc, (Nutrition)',
            specialty: [
                'DEPT. OF DIETICS & NUTRITION'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. V HEMA MALINI PRASAD',
            qualifications: 'MBBS, DNB (Radiology)',
            specialty: [
                'DEPT. OF RADIOLOGY & IMAGING SCIENCES'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. RAJINI',
            qualifications: 'MBBS, DMRD (Rad)',
            specialty: [
                'DEPT. OF RADIOLOGY & IMAGING SCIENCES'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. IRSHAD AHMED',
            qualifications: 'MBBS, MD (Patho)',
            specialty: [
                'PATHOLOGY'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. JOHA FATIMA',
            qualifications: 'MBBS, MD, (Patho)',
            specialty: [
                'PATHOLOGY'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. ARCY BILLORIA',
            qualifications: 'MBBS, MD (Micro)',
            specialty: [
                'MICROBIOLOGY'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. ARUNA KUMARI',
            qualifications: 'MBBS, MD (Biochemistry)',
            specialty: [
                'BIOCHEMISTRY'
            ],
            location: [
                'Lakadikapul'
            ],
            isdisplayed: true
        },
        {
            doctor_name: 'Dr. VAMSIDHAR KEDAR',
            qualifications: 'MBBS, DCH,( DNB ), FELLOW IN PED.INTENSIVE CARE, DIP. IN ALLERGY & ASTHMA (cmc,Vellore)',
            isdisplayed: true,
            location: [
                'Kukatpally'
            ],
            specialty: [
                'NEONATOLOGY',
                'PEDIATRICS',
                'PEDIATRICS INTENSIVE CARE'
            ]
        },
        {
            doctor_name: 'Dr. KAMALAKAR RAO NAMBURI',
            qualifications: 'MBBS, MD (PED) , IAP FELLOWSHIP IN NEONATOLOGY',
            isdisplayed: true,
            location: [
                'Kukatpally'
            ],
            specialty: [
                'NEONATOLOGY',
                'PEDIATRICS',
                'PEDIATRICS INTENSIVE CARE'
            ]
        },
        {
            doctor_name: 'Dr. YARRAGUDI VASUDEVA REDDY',
            qualifications: 'MBBS, MD, DNB (Ped)',
            isdisplayed: true,
            location: [
                'Kukatpally'
            ],
            specialty: [
                'PEDIATRICS',
                'PEDIATRICS INTENSIVE CARE'
            ]
        },
        {
            doctor_name: 'Dr. VENNAPUSA MALLIKARJUNA REDDY',
            qualifications: 'MBBS, DCH, DNB (Ped)',
            isdisplayed: true,
            location: [
                'Kukatpally'
            ],
            specialty: [
                'PEDIATRICS',
                'PEDIATRICS INTENSIVE CARE'
            ]
        },
        {
            doctor_name: 'Dr. SRIKANTH DAPPURI',
            qualifications: 'MBBS, DCH, DNB',
            isdisplayed: true,
            location: [
                'Kukatpally'
            ],
            specialty: [
                'PEDIATRICS',
                'PEDIATRICS INTENSIVE CARE'
            ]
        },
        {
            doctor_name: 'Dr. YOGA NAGENDAR',
            qualifications: 'MBBS, DNB (Ped), M.Ch ( Ped.surg)',
            isdisplayed: true,
            location: [
                'Kukatpally'
            ],
            specialty: [
                'PEDIATRIC SURGERY'
            ]
        },
        {
            doctor_name: 'Dr. V. NARASIMHA RAO',
            qualifications: 'MBBS, MS, M.Ch (NIMS)',
            isdisplayed: true,
            location: [
                'Kukatpally'
            ],
            specialty: [
                'PLASTIC SURGERY & COSMETOLOGY'
            ]
        },
        {
            doctor_name: 'Dr. MRUDULA KARNATI',
            qualifications: 'MBBS, MD, DNB (Neuro)',
            isdisplayed: true,
            location: [
                'Kukatpally'
            ],
            specialty: [
                'DEPT. OF NEUROLOGY'
            ]
        },
        {
            doctor_name: 'Dr. PRASHANTH UTAGE',
            qualifications: 'MBBS, DCH, DNB (Neuro)',
            isdisplayed: true,
            location: [
                'Kukatpally'
            ],
            specialty: [
                'DEPT. OF NEUROLOGY'
            ]
        },
        {
            doctor_name: 'Dr. ANJANI KUMAR',
            qualifications: 'B.Sc, BPT (PHYSIO)',
            isdisplayed: true,
            location: [
                'Kukatpally'
            ],
            specialty: [
                'DEPT. OF PHYSIO & REHABILITATION'
            ]
        },
        {
            doctor_name: 'Dr. SUDEEP KUMAR',
            qualifications: 'BPT (Physio)',
            isdisplayed: true,
            location: [
                'Kukatpally'
            ],
            specialty: [
                'DEPT. OF PHYSIO & REHABILITATION'
            ]
        },
        {
            doctor_name: 'Dr. MANDAVA RAMYA CHOWDARY',
            qualifications: 'BDS, MDS (PREVENTIVE PEDO DENTISTRY)',
            isdisplayed: true,
            location: [
                'Kukatpally'
            ],
            specialty: [
                'PEDIATRIC DENTISTRY'
            ]
        },
        {
            doctor_name: 'Dr. ASHWIN KUMAR PAL',
            qualifications: 'BDS, MDS (Ped Prevenntive dentistry)',
            isdisplayed: true,
            location: [
                'Kukatpally'
            ],
            specialty: [
                'PEDIATRIC DENTISTRY'
            ]
        },
        {
            doctor_name: 'Dr. SAMRIDHI GOYAL',
            qualifications: 'MBBS, MD, DNB (Ped.Neph)',
            isdisplayed: true,
            location: [
                'Kukatpally'
            ],
            specialty: [
                'PEDIATRIC NEPHROLOGY'
            ]
        },
        {
            doctor_name: 'Dr. NAGESWAR REDDY',
            qualifications: 'MBBS, MD (Nephro)',
            isdisplayed: true,
            location: [
                'Kukatpally'
            ],
            specialty: [
                'PEDIATRIC NEPHROLOGY'
            ]
        },
        {
            doctor_name: 'Dr. SUDEEP KUMAR',
            qualifications: 'MBBS, MD, DM (Card)',
            isdisplayed: true,
            location: [
                'Kukatpally'
            ],
            specialty: [
                'DEPT. OF  PED. CARDIOLOGY'
            ]
        },
        {
            doctor_name: 'Dr. PRASHANTH PATIL',
            qualifications: 'MBBS, MD (Card)',
            isdisplayed: true,
            location: [
                'Kukatpally'
            ],
            specialty: [
                'DEPT. OF  PED. CARDIOLOGY'
            ]
        },
        {
            doctor_name: 'Dr. NAGARAJU',
            qualifications: 'MBBS, MD (DERMA)',
            isdisplayed: true,
            location: [
                'Kukatpally'
            ],
            specialty: [
                'DEPT. OF DERMATOLOGY'
            ]
        },
        {
            doctor_name: 'Dr. S. KIRAN',
            qualifications: 'MBBS, MD (DERMA)',
            isdisplayed: true,
            location: [
                'Kukatpally'
            ],
            specialty: [
                'DEPT. OF DERMATOLOGY'
            ]
        },
        {
            doctor_name: 'Dr. KISHORE KUMAR',
            qualifications: 'MBBS .DLO, FAGE',
            isdisplayed: true,
            location: [
                'Kukatpally'
            ],
            specialty: [
                'DEPT. OF ENT SURGERY'
            ]
        },
        {
            doctor_name: 'Dr. MADAN MOHAN',
            qualifications: 'MBBS, MS (Ortho), M.Ch (Ortho)',
            isdisplayed: true,
            location: [
                'Kukatpally'
            ],
            specialty: [
                'DEPT. OF ORTHOPEDICS '
            ]
        },
        {
            doctor_name: 'Dr. SUSHMA TATIPALLY',
            qualifications: 'MBBS, MS (Opthal)',
            isdisplayed: true,
            location: [
                'Kukatpally'
            ],
            specialty: [
                'DEPT. OF OPTHALMOLOGY'
            ]
        },
        {
            doctor_name: 'Dr. AMARNATH KULKARNI',
            qualifications: 'MBBS, DCH, DNB (PED),FELLOWSHIP IN ADOLESCENT ENDOCRINOLOGY',
            isdisplayed: true,
            location: [
                'Kukatpally'
            ],
            specialty: [
                'DEPT. OF PEDIATRIC ENDOCRINOLOGY '
            ]
        },
        {
            doctor_name: 'MR. JAGADISH',
            qualifications: 'DIPLOMA IN EEG & NEURO ANCILLARY',
            isdisplayed: true,
            location: [
                'Kukatpally'
            ],
            specialty: [
                'DEPT OF EEG & NEURO ANCILLARY'
            ]
        },
        {
            doctor_name: 'MR. AJAY',
            qualifications: 'DIPLOMA IN BERA /EAR THERAPY',
            isdisplayed: true,
            location: [
                'Kukatpally'
            ],
            specialty: [
                'DEPT OF EEG & NEURO ANCILLARY'
            ]
        },
        {
            doctor_name: 'Dr. SUMANA.T',
            qualifications: 'MBBS, DA, DGO, DIP.IN LAP. SURG(GERMANY)',
            isdisplayed: true,
            location: [
                'Kukatpally'
            ],
            specialty: [
                'DEPT. OF OBSTETRICS & GYNECOLOGY'
            ]
        },
        {
            doctor_name: 'Dr. PAVITRA REDDY',
            qualifications: 'MBBS, MS (OBG),',
            isdisplayed: true,
            location: [
                'Kukatpally'
            ],
            specialty: [
                'DEPT. OF OBSTETRICS & GYNECOLOGY'
            ]
        },
        {
            doctor_name: 'Dr. MRIDULA KARRI',
            qualifications: 'MBBS, M.S (OBG), Dip. In LAP.SURG',
            isdisplayed: true,
            location: [
                'Kukatpally'
            ],
            specialty: [
                'DEPT. OF OBSTETRICS & GYNECOLOGY'
            ]
        },
        {
            doctor_name: 'Dr. VINODA VUNNAM',
            qualifications: 'DIPLOMA IN LACTATION & DUALA SERVICES',
            isdisplayed: true,
            location: [
                'Kukatpally'
            ],
            specialty: [
                'DEPT. OF LACTATION & DUALA SERVICES'
            ]
        },
        {
            doctor_name: 'Dr. SWETHA JAHNAVI',
            qualifications: 'MBBS, DGO, FELLOWSHIP (Lap.Surg)',
            isdisplayed: true,
            location: [
                'Kukatpally'
            ],
            specialty: [
                'GYNEC LAPAROSCOPIC SURGERY'
            ]
        },
        {
            doctor_name: 'Dr. B.R. NIRMALA',
            qualifications: 'MBBS, DGO, DNB , FELLOWSHIP IN FERTILITY',
            isdisplayed: true,
            location: [
                'Kukatpally'
            ],
            specialty: [
                'DEPT. OF FERTILITY SERVICES '
            ]
        },
        {
            doctor_name: 'Dr. RAGINI GOUD',
            qualifications: 'MBBS, DGO, FELLOW IN REPRODUCTIVE MEDICINE',
            isdisplayed: true,
            location: [
                'Kukatpally'
            ],
            specialty: [
                'DEPT. OF FERTILITY SERVICES '
            ]
        },
        {
            doctor_name: 'Dr. TAHER ALI',
            qualifications: 'MBBS, DNB (Gen. Med)',
            isdisplayed: true,
            location: [
                'Kukatpally'
            ],
            specialty: [
                'DEPT. OF DIABETOLOGY & INT. MEDICINE'
            ]
        },
        {
            doctor_name: 'Dr. SIREESHA',
            qualifications: 'MBBS, MD (Gen.Med), Dip. In Diabetology',
            isdisplayed: true,
            location: [
                'Kukatpally'
            ],
            specialty: [
                'DEPT. OF DIABETOLOGY & INT. MEDICINE'
            ]
        },
        {
            doctor_name: 'MS. AFIA HUSSAIN',
            qualifications: 'M.Sc (Nutrition)',
            isdisplayed: true,
            location: [
                'Kukatpally'
            ],
            specialty: [
                'DEPT. OF  DIETITICS & NUTRITION'
            ]
        },
        {
            doctor_name: 'Ms. SHAILU',
            qualifications: 'M.S.c (Nutrition)',
            isdisplayed: true,
            location: [
                'Kukatpally'
            ],
            specialty: [
                'DEPT. OF  DIETITICS & NUTRITION'
            ]
        },
        {
            doctor_name: 'Dr. HEMA MALINI PRASAD',
            qualifications: 'MBBS, DNB (Radiology)',
            isdisplayed: true,
            location: [
                'Kukatpally'
            ],
            specialty: [
                'DEPT. OF RADIOLOGY & IMAGING SCIENCES'
            ]
        },
        {
            doctor_name: 'Dr. SANTHOSH KONDAPALLI',
            qualifications: 'MBBS, DNB (RADIOLOGY)',
            isdisplayed: true,
            location: [
                'Kukatpally'
            ],
            specialty: [
                'DEPT. OF RADIOLOGY & IMAGING SCIENCES'
            ]
        },
        {
            doctor_name: 'Dr. SWETA PRIYANKA',
            qualifications: 'MBBS, DNB (Radiology)',
            isdisplayed: true,
            location: [
                'Kukatpally'
            ],
            specialty: [
                'DEPT. OF RADIOLOGY & IMAGING SCIENCES'
            ]
        },
        {
            doctor_name: 'Dr. RAJESH KHANNA',
            qualifications: 'MBBS. MD (ANES)',
            isdisplayed: true,
            location: [
                'Kukatpally'
            ],
            specialty: [
                'DEPT. OF ANAESTHESIA & CRITIAL CARE'
            ]
        },
        {
            doctor_name: 'Dr. VINOD KUMAR',
            qualifications: 'MBBS. MD (ANES)',
            isdisplayed: true,
            location: [
                'Kukatpally'
            ],
            specialty: [
                'DEPT. OF ANAESTHESIA & CRITIAL CARE'
            ]
        },
        {
            doctor_name: 'Dr. DAMODAR',
            qualifications: 'MBBS, MD (ANAES)',
            isdisplayed: true,
            location: [
                'Kukatpally'
            ],
            specialty: [
                'DEPT. OF ANAESTHESIA & CRITIAL CARE'
            ]
        },
        {
            doctor_name: 'Dr. IRSHAD AHMED',
            qualifications: 'MBBS, MD (Patho)',
            isdisplayed: true,
            location: [
                'Kukatpally'
            ],
            specialty: [
                'PATHOLOGY'
            ]
        },
        {
            doctor_name: 'Dr. ARCY BILLORIA',
            qualifications: 'MBBS, MD (MICRO)',
            isdisplayed: true,
            location: [
                'Kukatpally'
            ],
            specialty: [
                'MICROBIOLOGY'
            ]
        },
        {
            doctor_name: 'Dr. ARUNA KUMARI',
            qualifications: 'MBBS, MD (Biochemistry)',
            isdisplayed: true,
            location: [
                'Kukatpally'
            ],
            specialty: [
                'BIOCHEMISTRY'
            ]
        },
        {
            doctor_name: 'Dr. MOKA SUDHA',
            qualifications: 'MBBS,MRCPCH (UK),DCH (UK)',
            isdisplayed: true,
            location: [
                'L B Nagar'
            ],
            specialty: [
                'NEONATOLOGY',
                'PEDIATRICS',
                'PEDIATRICS INTENSIVE CARE'
            ]
        },
        {
            doctor_name: 'Dr. Y PALLAVI',
            qualifications: 'MBBS,DCH,DNB',
            isdisplayed: true,
            location: [
                'L B Nagar'
            ],
            specialty: [
                'NEONATOLOGY',
                'PEDIATRICS',
                'PEDIATRICS INTENSIVE CARE'
            ]
        },
        {
            doctor_name: 'Dr.TANDAVA PRASAD',
            qualifications: 'MBBS,MD (PEDIATRICS)',
            isdisplayed: true,
            location: [
                'L B Nagar'
            ],
            specialty: [
                'PEDIATRICS',
                'PEDIATRICS INTENSIVE CARE'
            ]
        },
        {
            doctor_name: 'Dr. MRUDULA KARNATI',
            qualifications: 'MBBS, MD , DNB (Neuro)',
            isdisplayed: true,
            location: [
                'L B Nagar'
            ],
            specialty: [
                'PEDIATRIC NEUROLOGY'
            ]
        },
        {
            doctor_name: 'MS. SANDHYA & Mr. ARJUN',
            qualifications: 'DIPLOMA IN EEG',
            isdisplayed: true,
            location: [
                'L B Nagar'
            ],
            specialty: [
                'DEPT. OF EEG & NEURO ANCILLARY'
            ]
        },
        {
            doctor_name: 'Dr. ANJANI KUMAR',
            qualifications: 'B.Sc, BPT (PHYSIO)',
            isdisplayed: true,
            location: [
                'L B Nagar'
            ],
            specialty: [
                'DEPT. OF PHYSIOTHERAPY & REHABILITATION'
            ]
        },
        {
            doctor_name: 'Dr. SUDEEP KUMAR',
            qualifications: 'BPT (Physio)',
            isdisplayed: true,
            location: [
                'L B Nagar'
            ],
            specialty: [
                'DEPT. OF PHYSIOTHERAPY & REHABILITATION'
            ]
        },
        {
            doctor_name: 'Dr. AMARNATH KULKARNI',
            qualifications: 'MBBS, DCH, DNB (PED),FELLOWSHIP IN ADOLESCENT ENDOCRINOLOGY',
            isdisplayed: true,
            location: [
                'L B Nagar'
            ],
            specialty: [
                'DEPT. OF PEDIATRIC ENDOCRINOLOGY'
            ]
        },
        {
            doctor_name: 'Dr. SAMRIDHI GOYAL',
            qualifications: 'MBBS, MD, DNB (PED. NEPH)',
            isdisplayed: true,
            location: [
                'L B Nagar'
            ],
            specialty: [
                'DEPT. OF PEDIATRIC NEPHROLOGY'
            ]
        },
        {
            doctor_name: 'Dr. YOGA NAGENDRA',
            qualifications: 'MBBS, M.S, M.Ch (Ped. Surg)',
            isdisplayed: true,
            location: [
                'L B Nagar'
            ],
            specialty: [
                'DEPT. OF PEDIATRIC SURGERY'
            ]
        },
        {
            doctor_name: 'Dr. RAJESH',
            qualifications: 'MBBBS, MS, M.Ch (Ped. Surg)',
            isdisplayed: true,
            location: [
                'L B Nagar'
            ],
            specialty: [
                'DEPT. OF PEDIATRIC SURGERY'
            ]
        },
        {
            doctor_name: 'Dr. SAI KRISHNA REDDY',
            qualifications: 'MBBS, M.S . (ENT)',
            isdisplayed: true,
            location: [
                'L B Nagar'
            ],
            specialty: [
                'DEPT. OF ENT SURGERY'
            ]
        },
        {
            doctor_name: 'Dr. HARIN REDDY MANDADI',
            qualifications: 'MBBS, MD (DERMA), DRL',
            isdisplayed: true,
            location: [
                'L B Nagar'
            ],
            specialty: [
                'DEPT. OF DERMATOLOGY'
            ]
        },
        {
            doctor_name: 'Dr. PENDYAL SUNITHA',
            qualifications: 'MBBS, DGO, DNB',
            isdisplayed: true,
            location: [
                'L B Nagar'
            ],
            specialty: [
                'DEPT. OF OBSTETRICS & GYNAECOLOGY'
            ]
        },
        {
            doctor_name: 'Dr. SUSHMITHA',
            qualifications: 'MBBS, DGO, DNB , Fellowship in Fertility',
            isdisplayed: true,
            location: [
                'L B Nagar'
            ],
            specialty: [
                'DEPT. OF OBSTETRICS & GYNAECOLOGY  '
            ]
        },
        {
            doctor_name: 'Dr. VINODA VUNNAM',
            qualifications: 'DIPLOMA IN LACTATION & DUALA SERVICES',
            isdisplayed: true,
            location: [
                'L B Nagar'
            ],
            specialty: [
                'DEPT. OF LACTATION & DUALA SERVICES'
            ]
        },
        {
            doctor_name: 'DR. TAHER ALI',
            qualifications: 'MBBS, DNB (GEN. MEDICINE)',
            isdisplayed: true,
            location: [
                'L B Nagar'
            ],
            specialty: [
                'DEPT. OF DIABETOLOGY & INT. MEDICINE'
            ]
        },
        {
            doctor_name: 'MS. AFIA HUSSAIN',
            qualifications: 'M.Sc, (Nutrition)',
            isdisplayed: true,
            location: [
                'L B Nagar'
            ],
            specialty: [
                'DEPT. OF DIETITICS & NUTRITION'
            ]
        },
        {
            doctor_name: 'DR. HEMA MALINI PRASAD',
            qualifications: 'MBBS, DNB (RAD)',
            isdisplayed: true,
            location: [
                'L B Nagar'
            ],
            specialty: [
                'DEPT. OF RADIOLOGY & IMAGING SERVICES'
            ]
        },
        {
            doctor_name: 'Dr. SWETHA',
            qualifications: 'MBBS, DMRD (RADIOLOGY)',
            isdisplayed: true,
            location: [
                'L B Nagar'
            ],
            specialty: [
                'DEPT. OF RADIOLOGY & IMAGING SERVICES'
            ]
        },
        {
            doctor_name: 'Dr. SRIDHAR',
            qualifications: 'MBBS, D.A (Osm)',
            isdisplayed: true,
            location: [
                'L B Nagar'
            ],
            specialty: [
                'DEPT. OF ANAESTHESIA'
            ]
        },
        {
            doctor_name: 'DR. IRSHAD AHMED',
            qualifications: 'MBBS, MD (Patho)',
            isdisplayed: true,
            location: [
                'L B Nagar'
            ],
            specialty: [
                'PATHOLOGY'
            ]
        },
        {
            doctor_name: 'Dr. ARCY BILLORIA',
            qualifications: 'MBBS, MD (MICRO)',
            isdisplayed: true,
            location: [
                'L B Nagar'
            ],
            specialty: [
                'MICROBIOLOGY'
            ]
        },
        {
            doctor_name: 'Dr. ARUNA KUMARI',
            qualifications: 'MBBS, MD (Biochemistry)',
            isdisplayed: true,
            location: [
                'L B Nagar'
            ],
            specialty: [
                'BIOCHEMISTRY'
            ]
        },
        {
            doctor_name: 'Dr. B MURALI SANTHOSH',
            qualifications: 'MBBS, DNB (PED) , Fellowship in Neonatalogy',
            isdisplayed: true,
            location: [
                'Visakhapatnam'
            ],
            specialty: [
                'NEONATOLOGY',
                'PEDIATRIC INTENSIVE CARE'
            ]
        },
        {
            doctor_name: 'Dr. GANESH SANKU',
            qualifications: 'MBBS, MD (PED) Neonatal Perinatal medicine',
            isdisplayed: true,
            location: [
                'Visakhapatnam'
            ],
            specialty: [
                'NEONATOLOGY',
                'PEDIATRIC INTENSIVE CARE'
            ]
        },
        {
            doctor_name: 'Dr.P. A.V. LAKSHMANA SAI',
            qualifications: 'MBBS, MD, FELLOW IN PED.EMERGENCY',
            isdisplayed: true,
            location: [
                'Visakhapatnam'
            ],
            specialty: [
                'PEDIATRICS '
            ]
        },
        {
            doctor_name: 'Dr. SHRIKANTH. R',
            qualifications: 'MBBS, DNB (PED)',
            isdisplayed: true,
            location: [
                'Visakhapatnam'
            ],
            specialty: [
                'PEDIATRICS '
            ]
        },
        {
            doctor_name: 'Dr. VATSAVAI RAVI VARMA',
            qualifications: 'MBBS, DCH,',
            isdisplayed: true,
            location: [
                'Visakhapatnam'
            ],
            specialty: [
                'PEDIATRICS '
            ]
        },
        {
            doctor_name: 'Dr. V. ANANTH',
            qualifications: 'MBBS, MD (PED) ,',
            isdisplayed: true,
            location: [
                'Visakhapatnam'
            ],
            specialty: [
                'PEDIATRICS '
            ]
        },
        {
            doctor_name: 'Dr. PURNIMA KOLLI',
            qualifications: 'MBBS, DCH, DNB (PED)',
            isdisplayed: true,
            location: [
                'Visakhapatnam'
            ],
            specialty: [
                'PEDIATRICS '
            ]
        },
        {
            doctor_name: 'Dr. I. VANI',
            qualifications: 'MBBS, MD (OBG)',
            isdisplayed: true,
            location: [
                'Visakhapatnam'
            ],
            specialty: [
                'DEPT. OF OBSTETRICS & GYNECOLOGY'
            ]
        },
        {
            doctor_name: 'Dr. RADHIKA TELUGU',
            qualifications: 'MBBS, DGO,',
            isdisplayed: true,
            location: [
                'Visakhapatnam'
            ],
            specialty: [
                'DEPT. OF OBSTETRICS & GYNECOLOGY'
            ]
        },
        {
            doctor_name: 'Dr. AVANTHI GUDIPUDI',
            qualifications: 'MBBS, DNB (OBG)',
            isdisplayed: true,
            location: [
                'Visakhapatnam'
            ],
            specialty: [
                'DEPT. OF OBSTETRICS & GYNECOLOGY'
            ]
        },
        {
            doctor_name: 'Dr. SUGUNA DEEPTHI',
            qualifications: 'MBBS, DGO',
            isdisplayed: true,
            location: [
                'Visakhapatnam'
            ],
            specialty: [
                'DEPT. OF OBSTETRICS & GYNECOLOGY'
            ]
        },
        {
            doctor_name: 'Dr. N.V. VASUDHA',
            qualifications: 'MBBS, MD, DIP.IN RPM',
            isdisplayed: true,
            location: [
                'Visakhapatnam'
            ],
            specialty: [
                'DEPT. OF OBSTETRICS & GYNECOLOGY'
            ]
        },
        {
            doctor_name: 'Dr. SRUJAN YELLA',
            qualifications: 'MBBS, MS (OBG)',
            isdisplayed: true,
            location: [
                'Visakhapatnam'
            ],
            specialty: [
                'DEPT. OF OBSTETRICS & GYNECOLOGY'
            ]
        },
        {
            doctor_name: 'Dr. K SUBBA RAJU',
            qualifications: 'MBBS, M.S (OBG)',
            isdisplayed: true,
            location: [
                'Visakhapatnam'
            ],
            specialty: [
                'DEPT. OF OBSTETRICS & GYNECOLOGY'
            ]
        },
        {
            doctor_name: 'Dr. B SIRISHA RANI',
            qualifications: 'MBBS, DGO',
            isdisplayed: true,
            location: [
                'Visakhapatnam'
            ],
            specialty: [
                'DEPT. OF OBSTETRICS & GYNECOLOGY'
            ]
        },
        {
            doctor_name: 'Dr. K. SWAMY',
            qualifications: 'MBBS, MD (Radiology)',
            isdisplayed: true,
            location: [
                'Visakhapatnam'
            ],
            specialty: [
                'DEPT. OF RADIOLOGY & IMAGING SCIENCES'
            ]
        },
        {
            doctor_name: 'DR RAGHU TEJA',
            qualifications: 'MBBS, MD (Radiology)',
            isdisplayed: true,
            location: [
                'Visakhapatnam'
            ],
            specialty: [
                'DEPT. OF RADIOLOGY & IMAGING SCIENCES'
            ]
        },
        {
            doctor_name: 'DR S ARUNA',
            qualifications: 'MBBS, MD (Radiology)',
            isdisplayed: true,
            location: [
                'Visakhapatnam'
            ],
            specialty: [
                'DEPT. OF RADIOLOGY & IMAGING SCIENCES'
            ]
        },
        {
            doctor_name: 'Dr. KARRI ARUNA',
            qualifications: 'MBBS, MD (Pathology)',
            isdisplayed: true,
            location: [
                'Visakhapatnam'
            ],
            specialty: [
                'PATHOLOGY'
            ]
        },
        {
            doctor_name: 'DR SURYA NARAYANA',
            qualifications: 'MBBS, MD',
            isdisplayed: true,
            location: [
                'Visakhapatnam'
            ],
            specialty: [
                'ANESTHESIA'
            ]
        },
        {
            doctor_name: 'DR.R TRIVENI REDDY',
            qualifications: 'MBBS, MD',
            isdisplayed: true,
            location: [
                'Visakhapatnam'
            ],
            specialty: [
                'GENERAL PHYSICIAN'
            ]
        },
        {
            doctor_name: 'DR S VIJAY GANESH',
            qualifications: 'MS,MCH,FMAS,FIAG',
            isdisplayed: true,
            location: [
                'Visakhapatnam'
            ],
            specialty: [
                'PAEDIATRIC SURGEON'
            ]
        },
        {
            doctor_name: 'DR G RAJENDRA PRASAD',
            qualifications: 'MS,MCH',
            isdisplayed: true,
            location: [
                'Visakhapatnam'
            ],
            specialty: [
                'PAEDIATRIC SURGEON'
            ]
        },
        {
            doctor_name: 'DR V UMA MAHESWARA RAO',
            qualifications: 'MBBS,MS',
            isdisplayed: true,
            location: [
                'Visakhapatnam'
            ],
            specialty: [
                'OPHTHALMOLOGIST'
            ]
        },
        {
            doctor_name: 'DR P PAVAN KUMAR',
            qualifications: 'MPT',
            isdisplayed: true,
            location: [
                'Visakhapatnam'
            ],
            specialty: [
                'PHYSIOTHERAPY'
            ]
        }
    ];


    dpLocation = new DropdownConfigModel();
    dpSpecialty = new DropdownConfigModel();

    locations = ['Lakadikapul', 'Kukatpally', 'L B Nagar', 'Visakhapatnam'];
    specialties = [
        'NEONATOLOGY (NICU)',
        'PEDIATRICS',
        'PEDIATRICS INTENSIVE CARE',
        'PEDIATRIC NEPHROLOGY',
        'PEDIATRIC ALLERGY & ASTHMA',
        'PEDIATRIC GASTROENTEROLOGY',
        'PEDIATRIC HEMATOLOGY & ONCOLOGY',
        'PEDIATRIC NEUROLOGY',
        'PEDIATRIC NEURO SURGERY',
        'PEDIATRIC NEURO REHABILITATION AND PHYSIOTHERAPY',
        'DEPT. OF EEG & NEURO ANCILLARY',
        'PEDIATRIC DERMATOLOGY',
        'PEDIATRIC ENDOCRINOLOGY',
        'PEDIATRIC DENTISTRY',
        'GENETIC AND METABOLOSIM',
        'PEDIATRIC SURGERY',
        'PEDIATRIC PLASTIC & COSMETIC SURGERY',
        'PEDIATRIC ENT SURGERY',
        'PEDIATRIC OPTHALMOLOGY',
        'PEDIATRIC ORTHOPEDICS',
        'DEPT. OF PULMONOLOGY',
        'PEDIATRIC CARDIOLOGY',
        'DEPT. OF ANESTHESIA & CRITICAL CARE',
        'DEPT. OF OBSTETRICS & GYNECOLOGY',
        'DEPT. OF LACTATION & DUALA SERVICES',
        'GYNEC LAPAROSCOPIC SURGERY',
        'DEPT. OF FERTILITY',
        'DEPT. OF DIABETOLOGY & INT. MEDICINE',
        'DEPT. OF DIETICS & NUTRITION',
        'DEPT. OF RADIOLOGY & IMAGING SCIENCES', 'DEPT. OF DIAGNOSTIC LABORATORY'];
    selectedSpecialty;
    selectedLocation;

    endslice = 16;

    constructor(private title: Title, private meta: Meta) {
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
    }

    search(): void {
        // Filter By String
        for (const doctor of this.doctors) {
            doctor.isdisplayed = true;

            if (this.searchText && this.searchText.trim().length > 0) {
                doctor.isdisplayed = doctor.doctor_name.toLowerCase().includes(this.searchText.toLowerCase()) || doctor.specialty.toString().toLowerCase().includes(this.searchText.toLowerCase()) || doctor.qualifications.toString().toLowerCase().includes(this.searchText.toLowerCase());
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
