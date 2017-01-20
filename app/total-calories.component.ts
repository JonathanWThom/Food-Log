import { Component, Input, OnInit } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'total-calories',
  template: `
    <h3>Total Calories for {{calorieFilter}} on {{dateFilter}}:</h3> <h3 class="calories">{{totalCaloriesForFilter}}</h3>
  `
})

export class TotalCaloriesComponent implements OnInit {
  @Input() secondChildMealList: Meal[];
  totalCaloriesForFilter: number = 0;
  @Input() calorieFilter: String;
  @Input() dateFilter: String;

  totalCalories() {
    for (var i = 0; i < this.secondChildMealList.length; i++) {
      this.totalCaloriesForFilter += this.secondChildMealList[i].calories;
    }
  }


  ngOnInit() {
    var that = this;
    setInterval(function() {
      that.totalCaloriesForFilter = 0;
      that.totalCalories();
    }, 1000);
  }
}
