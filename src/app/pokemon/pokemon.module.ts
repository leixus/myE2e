import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shares/shares.module';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonService } from './pokemon-list/pokemon.service';
import { NgxNavDrawerModule } from '@ngx-lite/nav-drawer';
import { NgxModalModule } from '@ngx-lite/modal';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PokemonRoutingModule,
    NgxNavDrawerModule,
    NgxModalModule
  ],
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent
  ],
  providers: [
    PokemonService
  ]
})
export class PokemonModule { }
