import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {switchMap, withLatestFrom, map} from 'rxjs/operators';
import {HttpClient, HttpRequest} from '@angular/common/http';
import {Store} from '@ngrx/store';

import * as PersonalInformationActions from '../store/pi.actions';
import { PersonalInformation } from '../pi.model';
import * as fromPersonalInformation from '../store/pi.reducers';

@Injectable()
export class PiEffects {
  @Effect()
  personalInformationFetch = this.actions$
    .ofType(PersonalInformationActions.FETCH_PERSONALINFORMATIONS)
    .pipe(switchMap((action: PersonalInformationActions.FetchPersonalInformations) => {
      return this.httpClient.get<PersonalInformation[]>('personalInformations.json', {
        observe: 'body',
        responseType: 'json'
      });
    }), map(
      (personalInformations) => {
        console.log(personalInformations);
        for (const personalInformation of personalInformations) {
          if (!personalInformation['guarantors']) {
            personalInformation['guarantors'] = [];
          }
        }
        return {
          type: PersonalInformationActions.SET_PERSONALINFORMATIONS,
          payload: personalInformations
        };
      }
    ));

  @Effect({dispatch: false})
  recipeStore = this.actions$
    .ofType(PersonalInformationActions.STORE_PERSONALINFORMATIONS)
    .pipe(withLatestFrom(this.store.select('personalInformations')),
      switchMap(([action, state]) => {
        const req = new HttpRequest('PUT', 'personalInformations.json', state.personalInformations, {reportProgress: true});
        return this.httpClient.request(req);
      }));

  constructor(private actions$: Actions,
              private httpClient: HttpClient,
              private store: Store<fromPersonalInformation.FeatureState>) {
  }
}
