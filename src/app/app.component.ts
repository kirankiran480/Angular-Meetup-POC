import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-meetup-POC';
  loading: boolean;
  isLoggedIn$: any;
  isLoggedOut$: any;
  constructor(private router: Router,
              private store: Store<AppState>) {

}
  ngOnInit() {

}

}
