import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
/**
 * Created by moham on 07-Jun-17.
 */
export const APP_ROUTES_PROVIDERS: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full'},
    { path: 'recipes', component: RecipesComponent},
    { path: 'shopping-list', component: ShoppingListComponent}
];
export const routing = RouterModule.forRoot(APP_ROUTES_PROVIDERS);
