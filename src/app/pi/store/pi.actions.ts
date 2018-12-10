import { Action } from '@ngrx/store';

import { PersonalInformation } from '../pi.model';

export const SET_PERSONALINFORMATIONS = 'SET_PERSONALINFORMATIONS';
export const ADD_PERSONALINFORMATION = 'ADD_PERSONALINFORMATION';
export const UPDATE_PERSONALINFORMATION = 'UPDATE_PERSONALINFORMATION';
export const DELETE_PERSONALINFORMATION = 'DELETE_PERSONALINFORMATION';
export const STORE_PERSONALINFORMATIONS = 'STORE_PERSONALINFORMATIONS';
export const FETCH_PERSONALINFORMATIONS = 'FETCH_PERSONALINFORMATIONS';

export class SetPersonalInformations implements Action {
  readonly type = SET_PERSONALINFORMATIONS;

  constructor(public payload: PersonalInformation[]) {}
}

export class AddPersonalInformation implements Action {
  readonly type = ADD_PERSONALINFORMATION;

  constructor(public payload: PersonalInformation) {}
}

export class UpdatePersonalInformation implements Action {
  readonly type = UPDATE_PERSONALINFORMATION;

  constructor(public payload: {index: number, updatedPersonalInformation: PersonalInformation}) {}
}

export class DeletePersonalInformation implements Action {
  readonly type = DELETE_PERSONALINFORMATION;

  constructor(public payload: number) {}
}

export class StorePersonalInformations implements Action {
  readonly type = STORE_PERSONALINFORMATIONS;
}

export class FetchPersonalInformations implements Action {
  readonly type = FETCH_PERSONALINFORMATIONS;
}

export type PersonalInformationActions = SetPersonalInformations |
  AddPersonalInformation |
  UpdatePersonalInformation |
  DeletePersonalInformation |
  StorePersonalInformations |
  FetchPersonalInformations;
