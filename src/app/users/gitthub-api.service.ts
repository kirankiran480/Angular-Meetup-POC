import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {  HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { UserData, Repo } from '../userData.model';


@Injectable()
export class GitthubApiService { 
  constructor(private httpClient: HttpClient) {

   }

  public getGithubUserList(term= '', pageNumber= 1, recordsPerPage= 10): Observable<UserData> {
    const url = 'https://api.github.com/search/users?q=' + term + '&page=' + pageNumber + '&per_page=' + recordsPerPage;
    return this.httpClient
    .get<UserData>(url).pipe(map(x => new UserData(x)));
  }
  public getUserDetails(reposUrl): Observable<Repo[]> {
    return this.httpClient
    .get<Repo[]>(reposUrl).pipe(map(response => response.map((item) => {
        return new Repo(item);
    })));
  }
}
