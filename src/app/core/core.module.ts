import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    NavbarComponent,
  ],
  exports: [NavbarComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class CoreModule { }
