import Recipe from "../../Interfaces-Classes/Recipe";

export interface Query {
	searchString: string;
}
export default class SearchQuery {
	private _searchString: string;

	constructor(query: Query) {
		this._searchString = query.searchString;
	}
	//Sees if recipe name or description contains the search term
	public basicSearch(recipes: Array<Recipe>): Array<Recipe> {
		let results: Array<Recipe> = [];
		recipes.map((recipe) => {
			console.log(this._searchString);
			if (
				recipe.name.includes(this._searchString) ||
				recipe.description.includes(this._searchString)
			) {
				results.push(recipe);
			}
		});
		return results;
	}
}
