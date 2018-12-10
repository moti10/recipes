import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

// import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';
import * as fromPersonalInformation from '../store/pi.reducers';
import * as PersonalInformationActions from '../store/pi.actions';

@Component({
  selector: 'app-pi-detail',
  templateUrl: './pi-detail.component.html',
  styleUrls: ['./pi-detail.component.css']
})
export class PiDetailComponent implements OnInit {
  personalInformationState: Observable<fromPersonalInformation.State>;
  id: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: Store<fromPersonalInformation.FeatureState>) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.personalInformationState = this.store.select('personalInformations');
        }
      );
  }

  // onAddToShoppingList() {
  //   this.store.select('recipes')
  //     .pipe(take(1))
  //     .subscribe((personalInformationState: fromPersonalInformation.State) => {
  //       this.store.dispatch(new ShoppingListActions.AddGuarantors(
  //         personalInformationState.personalInformations[this.id].guarantors)
  //       );
  //     });

  // }

  onEditPersonalInformation() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeletePersonalInformation() {
    this.store.dispatch(new PersonalInformationActions.DeletePersonalInformation(this.id));
    this.router.navigate(['/personalInformations']);
  }

}
