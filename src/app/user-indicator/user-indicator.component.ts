import { Component, OnInit } from '@angular/core';
import { SessionService } from '../_services';
import { SessionMessage } from '../_models';

@Component({
  selector: 'app-user-indicator',
  templateUrl: './user-indicator.component.html',
  styleUrls: ['./user-indicator.component.scss']
})
export class UserIndicatorComponent implements OnInit {

  session: SessionMessage;

  constructor(
    private sessionService: SessionService
  ) { }

  ngOnInit() {
    this.session = this.sessionService.currentSessionValue;
    this.sessionService.currentSession.subscribe(
      session => {
        this.session = session;
      }
    );
  }
}
