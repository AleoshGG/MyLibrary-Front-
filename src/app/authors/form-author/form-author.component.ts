import { Component, OnInit } from '@angular/core';
import { NationalitiesService } from '../services/nationalities.service';
import { iNationality } from '../models/iNationality';

@Component({
  selector: 'app-form-author',
  templateUrl: './form-author.component.html',
  styleUrl: './form-author.component.css',
})
export class FormAuthorComponent implements OnInit {
  constructor(private _service: NationalitiesService) {}

  nationalities: iNationality[] = [];

  ngOnInit(): void {
    this._service.getNationalities().subscribe((response) => {
      console.log(response), (this.nationalities = response);
    });
  }
}
