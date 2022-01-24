// import Recipe from "../../../Interfaces-Classes/Recipe";
import { Day } from "../../../Interfaces-Classes/Day";

export interface Query {
	searchString: string;
}
export default class SearchQuery {
	private _searchString: string;

	constructor(query: Query) {
		this._searchString = query.searchString.toLowerCase();
	}
	//Sees if recipe name ingidients or description contains the search term
	public basicSearch(days: Array<Day>): Array<Day> {
		let results: Array<Day> = [];
        days.map((day: Day) => {
            day.events.map((event) => {
                console.log(this._searchString);
                let ingredientIncludes = false;
                event.recipe.ingredients.map((ingredient) => {
                    if (ingredient.ingredientName.toLowerCase().includes(this._searchString)) {
                        ingredientIncludes = true;
                    }
                });
                if (
                    event.recipe.name.toLowerCase().includes(this._searchString) ||
                    event.recipe.description.toLowerCase().includes(this._searchString) ||
                    ingredientIncludes
                ) {
                    results.push(day);
                }
            });
		});
        console.log(results);
		return results;
	}
}
