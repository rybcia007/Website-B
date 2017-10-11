import { CaruselImageComponent } from './viewitems/carusel-image/carusel-image.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TopmenuComponent } from './viewitems/topmenu/topmenu.component';
import { FooterComponent} from './viewitems/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopmenuComponent,
    FooterComponent,
    
    CaruselImageComponent
],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
