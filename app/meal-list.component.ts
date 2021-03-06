import { Component, Input, Output, EventEmitter, DoCheck } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <h1>Eaten</h1>
    <div class="filters">
      <h3>Apply Filters</h3>
      <h5>Calorie Content</h5>
      <select class="form-control" (change)="filterMealsByCalories($event.target.value)">
        <option value="All Meals">All Meals</option>
        <option value="High Calorie Meals">High Calorie Meals (500 calories or more)</option>
        <option value="Low Calorie Meals">Low Calorie Meals (Less than 500 calories)</option>
      </select>
      <h5>Date</h5>
      <select class="form-control" (change)="filterMealsByDate($event.target.value)">
        <option value="All Dates">All Dates</option>
        <option *ngFor="let currentDate of noDuplicateDates" value={{currentDate}}>{{currentDate}}</option>
      </select>
    </div>
    <total-calories [secondChildMealList]="childMealList | calories:filterByCalories | mealDates:filterByDate" [calorieFilter]="filterByCalories" [dateFilter]="filterByDate"></total-calories>
    <div *ngFor="let currentMeal of childMealList | calories:filterByCalories | mealDates:filterByDate" class="meals">
      <p>Meal: {{currentMeal.name}}</p>
      <p>Calories: {{currentMeal.calories}}</p>
      <p>Details: {{currentMeal.details}}</p>
      <p>Date: {{currentMeal.date}}</p>
      <button class="btn btn-info" (click)="editMeal(currentMeal)">Edit Meal</button>
    </div>
  `
})

export class MealListComponent implements DoCheck {
  @Input() childMealList: Meal[];
  @Output() editMealClickSender = new EventEmitter();

  filterByCalories: string = "All Meals";
  filterByDate: string = "All Dates";
  noDuplicateDates: String[] = [];

  filterMealsByCalories(calorieOption) {
    this.filterByCalories = calorieOption;
  }

  filterMealsByDate(date) {
    this.filterByDate = date;
  }

  ngDoCheck() {
    var justTheDates: String[] = [];
    for (var i = 0; i < this.childMealList.length; i++) {
      justTheDates.push(this.childMealList[i].date);
    }
    this.noDuplicateDates = justTheDates.filter( function( item, index, inputArray ) {
      return inputArray.indexOf(item) == index;
    });
  }

  editMeal(currentMeal: Meal) {
    this.editMealClickSender.emit(currentMeal);
  }
}
