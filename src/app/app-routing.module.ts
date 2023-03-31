import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RecipeDetailComponent } from './shared/components/atoms/recipe-detail/recipe-detail.component';
import { RecipeComponent } from './shared/components/atoms/recipe/recipe.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipe/:id', component: RecipeDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
