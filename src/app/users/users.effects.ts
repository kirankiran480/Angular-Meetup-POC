import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { GitthubApiService } from './gitthub-api.service';
import { of } from 'rxjs';
import { UserData, User } from '../userData.model';
import { loadUsers, loadUsersSuccess } from './users.actions';

@Injectable()
export class UsersEffects {
 constructor(private actions$: Actions , private gitService: GitthubApiService) {}

 getUsers$ = createEffect(() =>
 this.actions$
     .pipe(
         ofType(loadUsers),
         switchMap((action) => this.gitService.getGithubUserList(action.searchTerm)),
         switchMap((usersData: UserData) => of(loadUsersSuccess({data: usersData})))
     )
);


}
