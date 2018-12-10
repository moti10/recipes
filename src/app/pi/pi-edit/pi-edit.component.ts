import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';

import * as PersonalInformationActions from '../store/pi.actions';
import * as fromPersonalInformation from '../store/pi.reducers';
import { Guarantor } from '../../shared/guarantor.model';

@Component({
  selector: 'app-pi-edit',
  templateUrl: './pi-edit.component.html',
  styleUrls: ['./pi-edit.component.css']
})
export class PiEditComponent implements OnInit {

  id: number;
  editMode = false;
  personalInformationForm: FormGroup;
  maritalStatus = ['נשוי', 'רוק', 'אחר'];


  constructor(private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromPersonalInformation.FeatureState>) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id =+params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {

    if (this.editMode) {
      this.store.dispatch(new PersonalInformationActions.UpdatePersonalInformation({
        index: this.id,
        updatedPersonalInformation: this.personalInformationForm.value
      }));
    } else {
      this.store.dispatch(new PersonalInformationActions.AddPersonalInformation(this.personalInformationForm.value));
    }
    this.onCancel();
  }

  onAddGuarantor() {
    (<FormArray>this.personalInformationForm.get('guarantors')).push(
      new FormGroup({
        'firstName': new FormControl(null, Validators.required),
        'lastName': new FormControl(null, Validators.required),
        'id': new FormControl(null, Validators.required),
        'birthDate': new FormControl(null),
        'address': new FormControl(null, Validators.required),
        'city': new FormControl(null),
        'mobile': new FormControl(null, Validators.required),
        'stationary': new FormControl(null),
        'checkbox': new FormControl(null),

        'bank': new FormControl(null, Validators.required),
        'branch': new FormControl(null, Validators.required),
        'invoice': new FormControl(null, Validators.required),
        'lineOfCredit': new FormControl(null, Validators.required),
        'remarks1': new FormControl(null)
      })
    );
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.personalInformationForm.get('guarantors')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private initForm() {
    let piFirstName = '';
    let piLastName = '';
    let piId = '';
    let piBirthDate = '';
    let piDateIssueIdentityCard = '';
    let piMaritalStatus = '';
    let piAddress = '';
    let piCity = '';
    let piMobile = '';
    let piStationary = '';
    let piCheckBox = false;
    let piRemarks1 = '';


    let piBank = '';
    let piBranch = '';
    let piInvoice = 0;
    let piLineOfCredit = 0;

    let piGuarantors = new FormArray([]);

    if (this.editMode) {
      this.store.select('personalInformations')
        .pipe(take(1))
        .subscribe((personalInformationState: fromPersonalInformation.State) => {
          const personalInformation = personalInformationState.personalInformations[this.id];
          piFirstName = personalInformation.firstName;
          piLastName = personalInformation.lastName;
          piId = personalInformation.id;
          piBirthDate = personalInformation.birthDate;
          piDateIssueIdentityCard = personalInformation.dateIssueIdentityCard;
          piMaritalStatus = personalInformation.maritalStatus;
          piAddress = personalInformation.address;
          piCity = personalInformation.city;
          piMobile = personalInformation.mobile;
          piStationary = personalInformation.stationary;
          piCheckBox = personalInformation.checkbox;
          piRemarks1 = personalInformation.remarks1;

          piBank = personalInformation.bank;
          piBranch = personalInformation.branch;
          piInvoice = personalInformation.invoice;
          piLineOfCredit = personalInformation.lineOfCredit;

          if (personalInformation['guarantors']) {
            for (let guarantor of personalInformation.guarantors) {
              piGuarantors.push(
                new FormGroup({
                  'firstName': new FormControl(guarantor.firstName, Validators.required),
                  'lastName': new FormControl(guarantor.lastName, Validators.required),
                  'id': new FormControl(null, Validators.required),
                  'birthDate': new FormControl(null),
                  'address': new FormControl(null, Validators.required),
                  'city': new FormControl(null),
                  'mobile': new FormControl(null, Validators.required),
                  'stationary': new FormControl(null),

                  'bank': new FormControl(null, Validators.required),
                  'branch': new FormControl(null, Validators.required),
                  'invoice': new FormControl(null, Validators.required),
                  'lineOfCredit': new FormControl(null, Validators.required),
                  'remarks1': new FormControl(null)
                })
              );
            }
          }
        });
    }

    this.personalInformationForm = new FormGroup({
      'firstName': new FormControl(piFirstName, Validators.required),
      'lastName': new FormControl(piLastName, Validators.required),
      'id': new FormControl(piId, Validators.required),
      'birthDate': new FormControl(piBirthDate),
      'dateIssueIdentityCard': new FormControl(piDateIssueIdentityCard),
      'maritalStatus': new FormControl(piMaritalStatus),
      'address': new FormControl(piAddress, Validators.required),
      'city': new FormControl(piCity),
      'mobile': new FormControl(piMobile),
      'stationary': new FormControl(piStationary),
      'checkbox': new FormControl(piCheckBox),
      'remarks1': new FormControl(piRemarks1),

      'bank': new FormControl(piBank, Validators.required),
      'branch': new FormControl(piBranch, Validators.required),
      'invoice': new FormControl(piInvoice, Validators.required),
      'lineOfCredit': new FormControl(piLineOfCredit, Validators.required),

      'guarantors': piGuarantors
    });
  }

  getControls() {
    return (<FormArray>this.personalInformationForm.get('guarantors')).controls;
  }

}
