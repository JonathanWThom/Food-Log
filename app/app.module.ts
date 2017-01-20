import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { MealListComponent } from './meal-list.component';
import { NewMealComponent } from './new-meal.component';
import { EditMealComponent } from './edit-meal.component';
import { AverageCaloriesComponent } from './average-calories.component';
import { CaloriesPipe } from './calories.pipe';
import { MealDatesPipe } from './mealDates.pipe';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    MealListComponent,
    NewMealComponent,
    EditMealComponent,
    AverageCaloriesComponent,
    CaloriesPipe,
    MealDatesPipe
   ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
