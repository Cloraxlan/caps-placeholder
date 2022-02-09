import { useAppSelector } from "../../../app/hooks";
import { selectRecipeDates } from "../../../features/recipeSearch/calendarSlice";
import Recipe from "../../../Interfaces-Classes/Recipe";
import { RecipeDate } from "../../../features/recipeSearch/calendarSlice";
import { ReactNode } from "react";

interface Props {
    recipe: Recipe;
    onDateFound: (date: RecipeDate | undefined) => void;
}


const FindRecipe = (props: Props) => {
    console.log("ran");
    const recipeDateList: RecipeDate[] = useAppSelector(selectRecipeDates);
    const foundDate = recipeDateList.find((recDate: RecipeDate) => {
        return recDate.recipe.name == props.recipe.name;
    });
    console.log("In FindRecipe: \n");
    console.log(foundDate);

    let execute = () => {
        props.onDateFound(foundDate);
    }

    return <button onClick={execute}>Find</button>;
};

export default FindRecipe;
