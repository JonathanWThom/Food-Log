import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template:`
    <h3>Log New Meal</h3>
    <div>
      <label>Meal Name</label>
      <input #newName>
    </div>
    <div>
      <label>Calories</label>
      <input #newCalories>
    </div>
    <div>
      <label>Details</label>
      <input #newDetails>
    </div>
    <button (click)="newMeal(newName.value, newCalories.value, newDetails.value); newName.value=''; newCalories.value=''; newDetails.value='';">Log</button>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();

  newMeal(name: string, calories: number, details: string) {
    var newMeal: Meal = new Meal(name, calories, details);
    this.newMealSender.emit(newMeal);
  }
}
