import { Component, Input, DoCheck } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'average-calories',
  template: `
    <h3>Average Calories Per Day:</h3>
    <h3 class="calories">{{averageCalories}}</h3>
  `
})

export class AverageCaloriesComponent implements DoCheck {
  @Input() childMealList: Meal[];
  averageCalories: number = null;
  totalCalories: number = 0;
  noDuplicateDates: String[] = [];
  justTheDates: String[] = [];

  noDuplicates() {
    for (var i = 0; i < this.childMealList.length; i++) {
      this.justTheDates.push(this.childMealList[i].date);
    }
    this.noDuplicateDates = this.justTheDates.filter( function( item, index, inputArray ) {
      return inputArray.indexOf(item) == index;
    });
  }

  calculateTotal() {
    for (var i = 0; i < this.childMealList.length; i++) {
      this.totalCalories += this.childMealList[i].calories;
    }
  }

  calculateAverage() {
    this.noDuplicates();
    this.calculateTotal();
    this.averageCalories = this.totalCalories / this.noDuplicateDates.length;
  }

  ngDoCheck() {
    this.averageCalories = null;
    this.totalCalories = 0;
    this.noDuplicateDates = [];
    this.justTheDates = [];
    this.calculateAverage();
  }
}
