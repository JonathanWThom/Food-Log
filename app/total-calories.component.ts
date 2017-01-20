import { Component, Input, OnInit } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'total-calories',
  template: `
    <h3>Total Calories for selected filters: {{totalCaloriesForFilter}}</h3>
  `
})

export class TotalCaloriesComponent implements OnInit {
  @Input() secondChildMealList: Meal[];
  totalCaloriesForFilter: number = 0;

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
