import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState } from './reducers';

const selectUsers = createFeatureSelector<UsersState>('userState');
export const selectUserList = createSelector(
    selectUsers,
    (state: UsersState) => state.users
  );

export const selectTotalCount = createSelector(
    selectUsers,
    (state: UsersState) => state.totalUsers
  );
