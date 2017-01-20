import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Food Log</h1>
    <meal-list></meal-list>
  </div>
  `
})

export class AppComponent {
  masterMealList: Meal[] = [
    new Meal('Ice Cream', 1000, 'Several bowls'),
    new Meal('Cake', 1500, 'The whole cake'),
    new Meal('Spinach', 2, 'One leaf of spinach')
  ]
}
