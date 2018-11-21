import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  forRole?: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: '/',
    name: 'HOME',
    type: 'link',
    icon: 'explore'
  },
  {
    state: 'about-us',
    name: 'ABOUT US',
    type: 'link',
    icon: 'face'
  },
  {
    state: 'contact-us',
    name: 'CONTACT US',
    type: 'link',
    icon: 'navigation'
  },
  {
    state: 'cars',
    name: 'OUR SERVICES',
    type: 'sub',
    icon: 'show_chart',
    children: [
      { state: 'branches', name: 'BRANCHES' },
      { state: 'car-list', name: 'CARS' }
    ]
  },
  {
    state: 'customer',
    name: 'CUSTOMERS',
    forRole: 'customer',
    type: 'sub',
    icon: 'show_chart',
    children: [
      { state: 'edit-customer', name: 'CUSTOMER DETAILS' },
      { state: 'order-list-by-customer', name: 'ORDER LIST' }
    ]
  },
  {
    state: 'employee',
    name: 'EMPLOYEES',
    type: 'sub',
    forRole: 'employee',
    icon: 'show_chart',
    children: [
      { state: 'login-employees', name: 'כניסת עובד' },
      { state: 'edit-employee', name: 'הוסף עובד' },
      { state: 'car-return', name: 'CAR RETURN' }
    ]
  },
  {
    state: 'admin',
    name: 'ADMIN',
    type: 'sub',
    forRole: 'admin',
    icon: 'show_chart',
    badge: [
      { type: 'red', value: '5' }
    ],
    children: [
      { state: 'login', name: 'כניסת מנהל' },
      { state: 'cars-list-management', name: 'CAR LIST' },
      { state: 'car-type-list', name: 'CAR TYPE LIST' },
      { state: 'users-list-management', name: 'USER LIST' },
      { state: 'branches-list-management', name: 'BRANCHES LIST' },
      { state: 'order-list', name: 'ORDER LIST' },
    ]
  }
 ];

@Injectable()
export class MenuService {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  add(menu) {
    MENUITEMS.push(menu);
  }
}
