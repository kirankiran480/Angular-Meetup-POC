import { Component, OnInit } from '@angular/core';
import { GitthubApiService } from '../gitthub-api.service';

import { Store, select } from '@ngrx/store';
import { UsersState } from '../reducers';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { loadUsers } from '../users.actions';
import { selectUserList, selectTotalCount } from '../users.selectors';
import { Router } from '@angular/router';
import { User } from 'src/app/userData.model';



@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users$ = this.usersStore.pipe(select(selectUserList));
  public title = 'github-search-app';
  public users: User[];
  public totalCount$ =  this.usersStore.pipe(select(selectTotalCount));
  public formValues: any;
  public recordsPerPage = 10;
  public totalResults = 'Total Results';
  constructor(private gitthubApiService: GitthubApiService, private usersStore: Store<UsersState> ,
              private router: Router) { }

  ngOnInit() {
  }

  public handleSearch(formValues: { searchTerm: string; sortType: any; }) {
    this.formValues = formValues;
    if (formValues.searchTerm) {
      const searchTerm = formValues.searchTerm;
      this.usersStore.dispatch(loadUsers({searchTerm}));
    }
  }
}
