import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  @Input() items: any[] = []
  
  constructor(
    private router: Router
  ) { }

  selected(e: any) {
    this.router.navigate(['/recipe', e.id])
  }

}
