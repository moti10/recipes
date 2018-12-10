import { PersonalInformation } from '../pi.model';
import { Guarantor } from '../../shared/guarantor.model';
import * as PersonalInformationActions from './pi.actions';
import * as fromApp from '../../store/app.reducers';

export interface FeatureState extends fromApp.AppState {
  personalInformations: State
}

export interface State {
  personalInformations: PersonalInformation[];
}

const initialState: State = {
  personalInformations: [
    new PersonalInformation(
      'מוטי',
       'גרינוולד', 
      '498478537',
      '07/06/1990',
      'נשוי',
      '03/10/2014',
      'האילות 65', 
      'גבעת זאב',
       '056435643',
        'test@gmail.com',
        '',
       'לאומי', 
       '904',
        433332,
        18000,
      [
        new Guarantor('שלמה',
         'פרבר',
         '',
         '',
         '',
         '',
         '',
         '',
         '',
         '',
          444,
           555,
           ''),
        new Guarantor('חיים',
         'קליין',
         '',
         '',
         '',
         '',
         '',
         '',
         '',
         '',
          444,
           555,
           '')
      ]
    ),
      new PersonalInformation(
        'יוסי',
        'כהן',
       '6643766', 
       '07/06/1990',
       'נשוי',
       '03/10/2014',
       'האילות 65', 
       'גבעת זאב',
        '056435643',
         'test@gmail.com',
         '',
        'לאומי', 
        '904',
        554555,
        10000,
      [
        new Guarantor('בנימין', 'נתניהו','','','','','','','','', 444, 555,''),
        new Guarantor('דוד', 'וייס','','','','','','','','', 444, 555,'')
      ]
    )
  ]
};

export function PiReducer(state = initialState, action: PersonalInformationActions.PersonalInformationActions) {
  switch (action.type) {
    case (PersonalInformationActions.SET_PERSONALINFORMATIONS):
      return {
        ...state,
        personalInformations: [...action.payload]
      };
    case (PersonalInformationActions.ADD_PERSONALINFORMATION):
      return {
        ...state,
        personalInformations: [...state.personalInformations, action.payload]
      };
    case (PersonalInformationActions.UPDATE_PERSONALINFORMATION):
      const personalInformation = state.personalInformations[action.payload.index];
      const updatedPersonalInformation = {
        ...personalInformation,
        ...action.payload.updatedPersonalInformation
      };
      const personalInformations = [...state.personalInformations];
      personalInformations[action.payload.index] = updatedPersonalInformation;
      return {
        ...state,
        personalInformations: personalInformations
      };
    case (PersonalInformationActions.DELETE_PERSONALINFORMATION):
      const oldPersonalInformations = [...state.personalInformations];
      oldPersonalInformations.splice(action.payload, 1);
      return {
        ...state,
        personalInformations: oldPersonalInformations
      };
    default:
      return state;
  }
}
