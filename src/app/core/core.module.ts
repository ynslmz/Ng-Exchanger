import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SymbolsComponent } from './components/symbols/symbols.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    NavbarComponent,
    SymbolsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [

  ]
})
export class CoreModule { }
