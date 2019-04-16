import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from '../_services';
import { AlertMessage } from '../_models';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {
  message: AlertMessage;
  private subscription: Subscription;

  constructor(private alertService: AlertService) {
  }

  ngOnInit() {
    this.subscription = this.alertService.message.subscribe(message => {
      this.message = message;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
