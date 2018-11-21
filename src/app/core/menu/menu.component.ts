import { Component, NgZone, ViewChild, Output, EventEmitter } from '@angular/core';
import { MenuService } from './menu.service';

import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../05_shared/services/auth.service';

@Component({
  selector: 'app-menu',
  template: `
    <mat-nav-list appAccordion class="navigation">
      <mat-list-item
        *ngFor="let menuitem of menuService.getAll()" group="{{menuitem.state}}"
        appAccordionLink
        >
        <a appAccordionToggle class="relative" [routerLink]="['/', menuitem.state]"
        *ngIf="menuitem.type === 'link' && isItemVisibleForCurrentUser(menuitem.forRole)">
          <mat-icon>{{ menuitem.icon }}</mat-icon>
          <span>{{ menuitem.name | translate }}</span>
          <span fxFlex></span>
          <span class="menu-badge mat-{{ badge.type }}" *ngFor="let badge of menuitem.badge">{{ badge.value }}</span>
        </a>
        <a appAccordionToggle class="relative" href="{{menuitem.state}}" *ngIf="menuitem.type === 'extLink'">
          <mat-icon>{{ menuitem.icon }}</mat-icon>
          <span>{{ menuitem.name | translate }}</span>
          <span fxFlex></span>
          <span class="menu-badge mat-{{ badge.type }}" *ngFor="let badge of menuitem.badge">{{ badge.value }}</span>
        </a>
        <a appAccordionToggle class="relative" href="{{menuitem.state}}" target="_blank" *ngIf="menuitem.type === 'extTabLink'">
          <mat-icon>{{ menuitem.icon }}</mat-icon>
          <span>{{ menuitem.name | translate }}</span>
          <span fxFlex></span>
          <span class="menu-badge mat-{{ badge.type }}" *ngFor="let badge of menuitem.badge">{{ badge.value }}</span>
        </a>
        <a appAccordionToggle
        class="relative" href="javascript:;" *ngIf="menuitem.type === 'sub' && isItemVisibleForCurrentUser(menuitem.forRole)">
          <mat-icon>{{ menuitem.icon }}</mat-icon>
          <span>{{ menuitem.name | translate }}</span>
          <span fxFlex></span>
          <span class="menu-badge mat-{{ badge.type }}" *ngFor="let badge of menuitem.badge">{{ badge.value }}</span>
          <mat-icon class="menu-caret">arrow_drop_down</mat-icon>
        </a>
        <mat-nav-list class="sub-menu" *ngIf="menuitem.type === 'sub'">
          <mat-list-item *ngFor="let childitem of menuitem.children" routerLinkActive="open">
            <a [routerLink]="['/', menuitem.state, childitem.state ]" class="relative">{{ childitem.name | translate }}</a>
          </mat-list-item>
        </mat-nav-list>
      </mat-list-item>
    </mat-nav-list>`,
  providers: [MenuService]
})
export class MenuComponent {
  currentLang = 'en';

  getRole(): string {
    return this.authService.getRole();
  }

  isItemVisibleForCurrentUser(menuItemPermission: string) {
    const userRole = this.getRole();
    if (!menuItemPermission) {
      return true;
    }
    if (userRole === 'admin') {
      return true;
    }

    if ((menuItemPermission === 'employee' || menuItemPermission === 'customer') && userRole === 'employee') {
      return true;
    }

    if (menuItemPermission === 'customer' && userRole === 'customer') {
      return true;
    }

    return false;





  }

  constructor(
    public authService: AuthService,
    public menuService: MenuService,
    public translate: TranslateService) {
  }

  addMenuItem(): void {
    this.menuService.add({
      state: 'menu',
      name: 'MENU',
      type: 'sub',
      icon: 'trending_flat',
      children: [
        { state: 'menu', name: 'MENU' },
        { state: 'timeline', name: 'MENU' }
      ]
    });
  }
}
