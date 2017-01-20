import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="header">
      <h1>
        Food
        <img src="../resources/img/silverware.png" alt="Silverware">
        Log
      </h1>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <meal-list [childMealList]="masterMealList" (editMealClickSender)="editMeal($event)"></meal-list>
      </div>
      <div class="col-sm-6">
        <h1>More</h1>
        <average-calories [childMealList]="masterMealList"></average-calories>
        <new-meal (newMealSender)="addMeal($event)"></new-meal>
        <edit-meal [childSelectedMeal]="selectedMeal" (doneEditingSender)="doneEditing()"></edit-meal>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  masterMealList: Meal[] = [
    new Meal('Omelet', 300, 'With salsa', '2017-01-20'),
    new Meal('Sandwich', 400, 'Salami on Rye', '2017-01-20'),
    new Meal('Beef Stew', 600, 'Ate a ton of this', '2017-01-20'),
    new Meal('Kulshan Red Ale', 200, 'Delicious', '2017-01-20'),
    new Meal('Pancakes', 650, 'With butter AND syrup', '2017-01-19'),
    new Meal('Taco Salad', 450, 'All the fixings', '2017-01-19'),
    new Meal('Chicken Tikka Masala', 400, 'From Trader Joe\s', '2017-01-19'),
    new Meal('Wanderale', 225, 'One of my favorites', '2017-01-19'),
  ];
  selectedMeal: Meal = null;

  addMeal(newMealFromChild: Meal) {
    this.masterMealList.unshift(newMealFromChild);
    //add form validation in lower component, inluding numbers
  }

  editMeal(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }

  doneEditing() {
    this.selectedMeal = null;
  }


}
