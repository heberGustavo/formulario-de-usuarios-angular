import { Component, OnInit } from '@angular/core';
import { CountriesService } from './services/countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'formulario-usuarios';

  constructor(
    private readonly _countriesService: CountriesService
  ) { }

  ngOnInit() {
    this._countriesService.getCountries().subscribe((data) => { console.log(data) });
  }
}
