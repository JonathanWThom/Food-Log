import { Component, Input } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'average-calories',
  template: `
    <h3>Average Calories Per Day: {{averageCalories}}</h3>
  `
})

export class AverageCaloriesComponent {
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

  ngOnInit() {
    var that = this;
    setInterval(function() {
      that.averageCalories = null;
      that.totalCalories = 0;
      that.noDuplicateDates = [];
      that.justTheDates = [];
      that.calculateAverage();
    }, 1000);
  }
}
