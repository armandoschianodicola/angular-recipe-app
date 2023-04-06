import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  @Input() items: {id: number}[] = []
  
  constructor(
    private router: Router
  ) { }

  selected(e: any) {
      // this.router.navigate(['/recipe', e.id], e)
    this.router.navigateByUrl(`/recipe/${e.id}`, { state: e })
  }

}
