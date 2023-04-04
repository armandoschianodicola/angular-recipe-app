import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeDetailService } from 'src/app/shared/services/recipe-detail.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent {
  @Input() item: any = {}

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private recipeDetailService: RecipeDetailService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getItem()
  }

  getItem(): void {
    const id = Number(this.activatedRoute.snapshot.params['id'])
    this.recipeDetailService.getItem(id).subscribe(item => {
      this.item = item
    })
  }

  goBack(): void {
    this.location.back();
  }

}
