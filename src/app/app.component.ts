import { Component, OnInit } from '@angular/core';
import { CountriesService } from './services/countries.service';
import { StatesService } from './services/states.service';
import { CitiesService } from './services/cities.service';
import { UsersService } from './services/users.service';
import { UsersListResponse } from './types/users-list-response';
import { take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  usersList: UsersListResponse = [];
  currentTabIndex: number = 1;

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
    
    
    // Take é usado para ouvir apenas a primeira emissão de um Observable e depois se desinscrever automaticamente.
    // Isso é útil para evitar vazamentos de memória em casos onde o Observable pode emitir múltiplos valores ao longo do tempo, mas você só precisa do primeiro valor.
    this._usersService.getUsers().pipe(take(1)).subscribe((data) => this.usersList = data);
  }
}
