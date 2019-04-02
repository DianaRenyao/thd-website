import { Component, OnInit } from '@angular/core';
import { SessionService } from '../_services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private sessionService: SessionService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout(): void {
    this.sessionService.logout();
    this.router.navigate(['/']);
  }
}
