import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RECIPES } from 'src/app/data/mock/recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipeDetailService {

  constructor() { }

  getItem(id: number): Observable<any> {
    const item = RECIPES.find(item => item.id === id)
    return of(item)
  }
    
}
