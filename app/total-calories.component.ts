import { Component, Input, DoCheck } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'total-calories',
  template: `
    <h3>Total Calories for {{calorieFilter}} on {{dateFilter}}:</h3> <h3 class="calories">{{totalCaloriesForFilter}}</h3>
  `
})

export class TotalCaloriesComponent implements DoCheck {
  @Input() secondChildMealList: Meal[];
  totalCaloriesForFilter: number = 0;
  @Input() calorieFilter: String;
  @Input() dateFilter: String;


  ngDoCheck() {
    this.totalCaloriesForFilter = 0;
    for (var i = 0; i < this.secondChildMealList.length; i++) {
      this.totalCaloriesForFilter += this.secondChildMealList[i].calories;
    }
  }

}
