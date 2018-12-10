import { Component, OnInit, Input } from '@angular/core';

import { PersonalInformation } from '../../pi.model';

@Component({
  selector: 'app-pi-item',
  templateUrl: './pi-item.component.html',
  styleUrls: ['./pi-item.component.css']
})
export class PiItemComponent implements OnInit {
  @Input() personalInformation: PersonalInformation;
  @Input() index: number;

  ngOnInit() {
  }
}
