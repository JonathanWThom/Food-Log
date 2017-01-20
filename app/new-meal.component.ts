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
      <input #newCalories type="number">
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
    var failure: boolean = false;
    if (name === "") {
      alert('Please fill in the meal\'s name');
      failure = true;
    }

    if (!calories) {
      alert('Please include calories');
      failure = true;
    }

    if (calories < 0) {
      alert('Calories must be a positive number');
      failure = true;
    }

    if (details === '') {
      alert('Please fill in details about this meal');
      failure = true;
    }

    if (failure === false) {
      var newMeal: Meal = new Meal(name, calories, details);
      this.newMealSender.emit(newMeal);
    }
  }
}
