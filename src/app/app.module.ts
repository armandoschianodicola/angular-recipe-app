import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeComponent } from './shared/components/atoms/recipe/recipe.component';
import { HomeComponent } from './pages/home/home.component';
import { RecipeListComponent } from './shared/components/organisms/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './shared/components/atoms/recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    HomeComponent,
    RecipeListComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
