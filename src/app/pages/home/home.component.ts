import { Component } from '@angular/core';
import { RecipeListService } from 'src/app/shared/services/recipe-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  items: any[] = []

  constructor(
    private recipeListService: RecipeListService
  ) {}

  recipeWasSelected(item: any) {
    console.log('Recipe was selected', item)
  }

  ngOnInit() {
    this.items = this.recipeListService.getRecipes()
  }

}
