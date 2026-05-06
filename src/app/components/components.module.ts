import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PipesModule } from "../pipes/pipes.module";
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
    declarations: [
        UsersListComponent
    ],
    imports: [
        PipesModule,
        AngularMaterialModule,
        CommonModule,
    ],
    exports: [
        UsersListComponent,
    ],
})
export class ComponentsModule {

}