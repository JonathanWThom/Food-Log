import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div *ngIf="childSelectedMeal">
      <h3>Edit Meal</h3>
      <label>Meal Name</label>
      <input [(ngModel)]="childSelectedMeal.name">
      <label>Calories</label>
      <input [(ngModel)]="childSelectedMeal.calories" type="number">
      <label>Details</label>
      <input [(ngModel)]="childSelectedMeal.details">
      <button class="btn btn-success"(click)="doneEditing()">Done Editing</button>
    </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneEditingSender = new EventEmitter();

  doneEditing() {
    this.doneEditingSender.emit();
  }
}
