import { Component, Input, OnInit } from '@angular/core';
import { UserInfoMessage } from '../_models';

@Component({
  selector: 'app-user-reference',
  templateUrl: './user-reference.component.html',
  styleUrls: ['./user-reference.component.scss']
})
export class UserReferenceComponent implements OnInit {

  @Input()
  userInfo: UserInfoMessage;

  constructor() {
  }

  ngOnInit() {
  }

}
