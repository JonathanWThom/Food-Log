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
      <input [(ngModel)]="childSelectedMeal.calories">
      <label>Details</label>
      <input [(ngModel)]="childSelectedMeal.details">
    </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
}
