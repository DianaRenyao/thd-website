import { Component, OnInit } from '@angular/core';
import { NoticeMessage } from '../../_models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notice-management',
  templateUrl: './notice-management.component.html',
  styleUrls: ['./notice-management.component.scss']
})
export class NoticeManagementComponent implements OnInit {

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit() {
  }

  onNoticeAdded(notice: NoticeMessage) {
    console.log('notice added', notice);
    this.router.navigate(['/']);
  }
}
