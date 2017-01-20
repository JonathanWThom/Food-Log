import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template:`
    <h3>Log New Meal</h3>
    <div class="form-group">
      <label>Meal Name</label>
      <input #newName class="form-control">
    </div>
    <div class="row">
      <div class="form-group col-sm-6">
        <label>Date</label>
        <input #newDate type="date" class="form-control">
      </div>
      <div class="form-group col-sm-6">
        <label>Calories</label>
        <input #newCalories type="number" class="form-control">
      </div>
    </div>
    <div class="form-group">
      <label>Details</label>
      <input #newDetails class="form-control">
    </div>

    <button class="btn btn-success" (click)="newMeal(newName.value, newCalories.value, newDetails.value, newDate.value); newName.value=''; newCalories.value=''; newDetails.value=''; newDate.value='';">Log</button>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();

  newMeal(name: string, calories: number, details: string, date: string) {
    calories = Number(calories);

    if (!name || !date || !calories || !details) {
      alert('Please fill out all fields.');
    } else if (calories < 0) {
      alert('Please enter a valid calorie count.');
    } else {
      var newMeal: Meal = new Meal(name, calories, details, date);
      this.newMealSender.emit(newMeal);
    }

  }
}
