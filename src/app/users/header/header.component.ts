import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { EventEmitter } from '@angular/core';

import { GitthubApiService } from '../gitthub-api.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 
  public searchForm: FormGroup = this.builder.group({
    searchString: ['', Validators.required]
    });
    @Output() searchEvent = new EventEmitter();
  constructor(private builder: FormBuilder, private gitubApiService: GitthubApiService) {

  }

  ngOnInit() {
  }

  public search() {
    const formValues = {
      searchTerm: this.searchForm.get('searchString').value
    };
    this.searchEvent.emit(formValues);
  }

}
