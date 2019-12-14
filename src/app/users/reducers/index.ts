import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on
} from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/userData.model';
import { loadUsersSuccess } from '../users.actions';



export const userStateFeatureKey = 'userState';

export interface UsersState {
  users: User[];
  totalUsers: number;
}

export const initialUsersState: UsersState = {
  users: undefined,
  totalUsers: 0
};

export const reducers = createReducer(
  initialUsersState,
  on(loadUsersSuccess, (state, action) => {
    return {
      ...state,
      users: action.data.users,
      totalUsers : action.data.totalCount
    };
  }),
);


export const metaReducers: MetaReducer<UsersState>[] = !environment.production ? [] : [];
