import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: "mealDates",
  pure: false
})

export class MealDatesPipe implements PipeTransform {
  transform(input: Meal[], whatDate) {
    var output: Meal[] = [];
    if (whatDate === "allDates") {
      return input;
    } else if (whatDate) {
      for (var i = 0; i < input.length; i++) {
        if (input[i].date === whatDate) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
