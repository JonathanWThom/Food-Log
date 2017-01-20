import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <select (change)="filterMealsByCalories($event.target.value)">
      <option value="allMeals">All Meals</option>
      <option value="highCalorieMeals">High Calorie Meals (500 calories or more)</option>
      <option value="lowCalorieMeals">Low Calorie Meals (Less than 500 calories)</option>
    </select>
    <select (change)="filterMealsByDate($event.target.value)">
      <option value="allDates">All Dates</option>
      <option *ngFor="let currentDate of noDuplicateDates" value={{currentDate}}>{{currentDate}}</option>
    </select>
    <total-calories [secondChildMealList]="childMealList | calories:filterByCalories | mealDates:filterByDate" [calorieFilter]="filterByCalories" [dateFilter]="filterByDate"></total-calories>
    <div *ngFor="let currentMeal of childMealList | calories:filterByCalories | mealDates:filterByDate">
      <p>Meal: {{currentMeal.name}}</p>
      <p>Calories: {{currentMeal.calories}}</p>
      <p>Details: {{currentMeal.details}}</p>
      <p>Date: {{currentMeal.date}}</p>
      <button (click)="editMeal(currentMeal)">Edit Meal</button>
    </div>
  `
})

export class MealListComponent implements OnInit {
  @Input() childMealList: Meal[];
  @Output() editMealClickSender = new EventEmitter();

  filterByCalories: string = "allMeals";
  filterByDate: string = null;
  noDuplicateDates: String[] = [];

  filterMealsByCalories(calorieOption) {
    this.filterByCalories = calorieOption;
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('this ran');
  //   this.removeDuplicates();
  //   console.log(this.noDuplicateDates);
  // }

  removeDuplicates() {
    var justTheDates: String[] = [];
    for (var i = 0; i < this.childMealList.length; i++) {
      justTheDates.push(this.childMealList[i].date);
    }
    this.noDuplicateDates = justTheDates.filter( function( item, index, inputArray ) {
      return inputArray.indexOf(item) == index;
    });
  }

//Couldn't get ngOnChanges to work so that it would update the available dates when
//a new object was added. This is a workaround.
  ngOnInit() {
    var that = this;
    setInterval(function() {
      that.removeDuplicates();
    }, 1000);
  }

  filterMealsByDate(date) {
    this.filterByDate = date;
  }

  editMeal(currentMeal: Meal) {
    this.editMealClickSender.emit(currentMeal);
  }
}
