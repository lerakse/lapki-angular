import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HeaderComponent } from './header/header.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetCardComponent } from './pet-card/pet-card.component';

@NgModule({
  declarations: [App, HeaderComponent, PetListComponent, PetCardComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
