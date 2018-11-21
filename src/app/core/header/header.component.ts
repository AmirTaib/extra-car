import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import * as screenfull from 'screenfull';
import { AuthGuardService } from '../../05_shared/services/authGuard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  isLogin = true;
  currentUserName: string;

  @Output() toggleSidenav = new EventEmitter<void>();
  @Output() toggleNotificationSidenav = new EventEmitter<void>();

  constructor(private router: Router, private auteGuardService: AuthGuardService) {
    this.auteGuardService.currentUserName.subscribe(userName => {
      this.currentUserName = userName;
    });
  }


  ngOnInit() {
  }

  fullScreenToggle(): void {
    if (screenfull.enabled) {
      screenfull.toggle();
    }
  }

  signup() {
    this.router.navigate(['/', 'signin']);
  }

  logout() {
    this.currentUserName = '';
    this.auteGuardService.logout();
  }

}
