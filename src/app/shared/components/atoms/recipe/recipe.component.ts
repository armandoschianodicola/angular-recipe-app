import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent {
  @Input() item: any = {}
  @Output() selected = new EventEmitter<any>()

  recipeWasSelected(item: any) {
    this.selected.emit(this.item)
  }

}
