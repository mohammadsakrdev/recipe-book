import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://files.namnak.com/users/kk/aup/201701/125_pics/%D8%B4%D9%86%DB%8C%D8%B3%D9%84-%D8%B1%D9%88%D8%B3%DB%8C.jpg', []),
    new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
  ];
@Output() recipeSelected = new EventEmitter<Recipe>();
recipe = new Recipe('Dummy', 'Dummy',
  'https://slm-assets1.secondlife.com/assets/9889950/view_large/(GL)_training_dummy_3.jpg?1403622529ng ', []);
  constructor() { }

  ngOnInit() {
  }
  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
