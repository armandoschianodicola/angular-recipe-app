import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent {

  @Input() item: any
  @Output() selected = new EventEmitter<any>()

  recipeWasSelected(item: any) {
    console.log(item)
    this.selected.emit(this.item)
  }

}
