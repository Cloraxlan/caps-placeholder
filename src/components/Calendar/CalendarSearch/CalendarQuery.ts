// import Recipe from "../../../Interfaces-Classes/Recipe";
// import { Day } from "../../../Interfaces-Classes/Day";
import { RecipeDate } from "../../../features/recipeSearch/calendarSlice";

export interface Query {
	searchString: string;
}
export default class SearchQuery {
	private _searchString: string;

	constructor(query: Query) {
		this._searchString = query.searchString.toLowerCase();
	}
	//Sees if recipe name ingidients or description contains the search term
	public basicSearch(days: Array<RecipeDate>): Array<RecipeDate> {
		let results: Array<RecipeDate> = [];
		days.forEach((day: RecipeDate) => {
			let ingredientIncludes = false;
			day.recipe.ingredients.forEach((ingredient) => {
				if (
					ingredient.ingredientName.toLowerCase().includes(this._searchString)
				) {
					ingredientIncludes = true;
				}
			});
			if (
				day.recipe.name.toLowerCase().includes(this._searchString) ||
				(day.recipe.description &&
					day.recipe.description.toLowerCase().includes(this._searchString)) ||
				ingredientIncludes
			) {
				results.push(day);
			}
		});
		return results;
	}
}
