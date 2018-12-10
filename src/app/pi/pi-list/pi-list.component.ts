import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromPersonalInformation from '../store/pi.reducers';

@Component({
  selector: 'app-pi-list',
  templateUrl: './pi-list.component.html',
  styleUrls: ['./pi-list.component.css']
})

export class PiListComponent implements OnInit {
  personalInformationState: Observable<fromPersonalInformation.State>;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private store: Store<fromPersonalInformation.FeatureState>) {
  }

  ngOnInit() {
    this.personalInformationState = this.store.select('personalInformations');
  }

  // onNewPersonalInformation() {
  //   this.router.navigate(['new'], {relativeTo: this.route});
  // }
}
