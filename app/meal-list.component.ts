import { Component, Input } from '@angular/core';
//may need to add output and event emitter
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <div *ngFor="let currentMeal of childMealList">
      <p>Meal: {{currentMeal.name}}</p>
      <p>Calories: {{currentMeal.calories}}</p>
      <p>Details: {{currentMeal.details}}</p>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
}
