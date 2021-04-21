import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ThemeTogglerComponent } from './components/theme-toggler/theme-toggler.component';
import { DomDirective } from './directives/dom.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ThemeTogglerComponent,
    DomDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
