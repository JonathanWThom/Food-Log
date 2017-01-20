import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { MealListComponent } from './meal-list.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    MealListComponent
   ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
