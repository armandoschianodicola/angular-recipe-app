import { Injectable } from '@angular/core';
import { RECIPES } from 'src/app/data/mock/recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipeListService {

  constructor() { }

  getRecipes() {
    return RECIPES
  }
}
