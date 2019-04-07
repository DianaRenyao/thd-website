import { Component, Input, OnInit } from '@angular/core';
import { NoticeMessage } from '../_models';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent implements OnInit {

  @Input()
  notice: NoticeMessage;

  constructor() {
  }

  ngOnInit() {
    console.log(typeof this.notice.timeCreated);
  }

}
