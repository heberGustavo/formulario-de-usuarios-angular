import { Component, OnInit } from '@angular/core';
import { CountriesService } from './services/countries.service';
import { StatesService } from './services/states.service';
import { CitiesService } from './services/cities.service';
import { UsersService } from './services/users.service';

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
    private readonly _citiesService: CitiesService,
    private readonly _usersService: UsersService
  ) { }

  ngOnInit() {
    //this._countriesService.getCountries().subscribe((data) => { console.log("Countries: ", data) });
    //this._statesService.getStates('Brazil').subscribe((data) => console.log("States: ", data));
    //this._citiesService.getCitiesInCountryAndState('Brazil', 'Acre').subscribe((data) => console.log("Cities: ", data));
    this._usersService.getUsers().subscribe((data) => console.log("Users: ", data));
  }
}
