import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template:`
    <h3>Log New Meal</h3>
    <div class="form-group">
      <label>Meal Name</label>
      <input #newName [class]="nameClass" [ngClass]="['form-control']">
    </div>
    <div class="row">
      <div class="form-group col-sm-6">
        <label>Date</label>
        <input #newDate type="date" [class]="dateClass" [ngClass]="['form-control']">
      </div>
      <div class="form-group col-sm-6">
        <label>Calories</label>
        <input #newCalories type="number" [class]="caloriesClass" [ngClass]="['form-control']">
      </div>
    </div>
    <div class="form-group">
      <label>Details</label>
      <input #newDetails [class]="detailsClass" [ngClass]="['form-control']">
    </div>
    <button class="btn btn-success" (click)="newMeal(newName.value, newCalories.value, newDetails.value, newDate.value); newName.value=''; newCalories.value=''; newDetails.value=''; newDate.value='';">Log</button>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  nameClass: string = null;
  dateClass: string = null;
  caloriesClass: string = null;
  detailsClass: string = null;

  newMeal(name: string, calories: number, details: string, date: string) {
    calories = Number(calories);
    var failure: boolean = false;

    if (!name) {
      this.nameClass = "red-border form-control";
      failure = true;
    }

    if (!date) {
      this.dateClass = "red-border form-control";
      failure = true;
    }

    if (!calories || calories < 0) {
      this.caloriesClass = "red-border form-control";
      failure = true;
    }

    if (!details) {
      this.detailsClass = "red-border form-control";
      failure = true;
    }

    if (failure === false) {
      var newMeal: Meal = new Meal(name, calories, details, date);
      this.newMealSender.emit(newMeal);
      this.nameClass = null;
      this.dateClass = null;
      this.caloriesClass = null;
      this.detailsClass = null;
    }

  }
}
