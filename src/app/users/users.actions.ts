import { createAction, props } from '@ngrx/store';
import { UserData } from '../userData.model';

export const loadUsers = createAction(
  '[Users] Load Userss',
  props<{searchTerm: string}>()
);

export const loadUsersSuccess = createAction(
  '[Users] Load Userss Success',
  props<{ data: UserData }>()
);

export const loadUsersFailure = createAction(
  '[Users] Load Userss Failure',
  props<{ error: any }>()
);

