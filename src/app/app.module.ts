import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RecipeListComponent } from './shared/components/organisms/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './shared/components/atoms/recipe-detail/recipe-detail.component';
import { RecipeCardComponent } from './shared/components/organisms/recipe-card/recipe-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
