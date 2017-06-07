import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
@Output() recipeSelected = new EventEmitter<Recipe>();
recipe = new Recipe('Dummy', 'Dummy',
  'https://slm-assets1.secondlife.com/assets/9889950/view_large/(GL)_training_dummy_3.jpg?1403622529ng ', []);
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
