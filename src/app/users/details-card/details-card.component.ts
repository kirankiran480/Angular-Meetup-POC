import { Component, Input, } from '@angular/core';
import { GitthubApiService } from '../gitthub-api.service';
import { Repo, User } from 'src/app/userData.model';


@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.scss']
})
export class DetailsCardComponent  {
  @Input() public user: User;
  public isOpened = false;
  public repoList: Repo[];
  constructor(private gitthubApiService: GitthubApiService) { }


}
