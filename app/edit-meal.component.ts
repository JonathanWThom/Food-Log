import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div *ngIf="childSelectedMeal">
      <h3>Edit Meal</h3>
      <h5 *ngIf="formInvalid" class="red">Please fill out all fields.</h5>
      <h5 *ngIf="caloriesInvalid" class="red">Please enter a valid calorie number.</h5>
      <div class="form-group">
        <label>Meal Name</label>
        <input [(ngModel)]="childSelectedMeal.name" class="form-control">
      </div>
      <div class="row">
        <div class="form-group col-sm-6">
          <label>Date</label>
          <input [(ngModel)]="childSelectedMeal.date" type="date" class="form-control">
        </div>
        <div class="form-group col-sm-6">
          <label>Calories</label>
          <input [(ngModel)]="childSelectedMeal.calories" type="number" class="form-control">
        </div>
      </div>
      <div class="form-group">
        <label>Details</label>
        <input [(ngModel)]="childSelectedMeal.details" class="form-control">
      </div>
      <button class="btn btn-success"(click)="doneEditing()">Done Editing</button>
    </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneEditingSender = new EventEmitter();
  formInvalid: boolean = false;
  caloriesInvalid: boolean = false;

  doneEditing() {
    if (!this.childSelectedMeal.name || !this.childSelectedMeal.date || !this.childSelectedMeal.calories || !this.childSelectedMeal.details) {
      this.formInvalid = true;
    } else if (this.childSelectedMeal.calories < 0) {
      this.caloriesInvalid = true;
    } else {
      this.doneEditingSender.emit();
    }
  }
}
