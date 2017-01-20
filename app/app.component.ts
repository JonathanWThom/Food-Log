import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Food Log</h1>
    <div class="row">
      <div class="col-sm-6">
        <meal-list [childMealList]="masterMealList" (editMealClickSender)="editMeal($event)"></meal-list>
      </div>
      <div class="col-sm-6">
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
    new Meal('Ice Cream', 1000, 'Several bowls', '2017-01-20'),
    new Meal('Cake', 1500, 'The whole cake', '2017-01-20'),
    new Meal('Spinach', 2, 'One leaf of spinach', '2017-01-19')
  ];
  selectedMeal: Meal = null;

  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
    //add form validation in lower component, inluding numbers
  }

  editMeal(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }

  doneEditing() {
    this.selectedMeal = null;
  }


}
