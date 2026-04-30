import { Component, OnInit } from '@angular/core';
import { CountriesService } from './services/countries.service';
import { StatesService } from './services/states.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'formulario-usuarios';

  constructor(
    private readonly _countriesService: CountriesService,
    private readonly _statesService: StatesService,
  ) { }

  ngOnInit() {
    //this._countriesService.getCountries().subscribe((data) => { console.log("Countries: ", data) });
    this._statesService.getStates('Brazil').subscribe((data) => console.log("States: ", data));
  }
}
