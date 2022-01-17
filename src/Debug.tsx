import React from 'react'
import BulkIngredient from './Interfaces-Classes/BulkIngredient'
import Ingredient, {  } from './Interfaces-Classes/Ingredient'
import { constructIngredientFromString } from './Interfaces-Classes/Recipe'
import Unit from './Interfaces-Classes/Unit'

interface Props {
    
}

const Debug = (props: Props) => {
    const LITER: Unit = {
	fullName: "Liter",
	abbreviations: ["L", "L."],
	system: "METRIC",
	measure: "VOLUME",
	convertionFactor: 1,
}
    let x: Ingredient =  constructIngredientFromString("5 cups of apples")
    let y: Ingredient =  constructIngredientFromString("five pints of butter")
        let z: Ingredient =  constructIngredientFromString("fifty-seven vannila bean pods")
    let ingredients: Ingredient[] = [x,y,z];
    ingredients.map((i)=>{
        if(i.isBulk()){
            let  c : BulkIngredient = (i as BulkIngredient);
            c.convertUnits(LITER);
            console.log(c.magnitude +" " + c.unit.fullName + " of "+ c.ingredientName)
        }else{
                        console.log(i.magnitude + " of "+ i.ingredientName)

        }
    })

    
    return (
        <div>
            {x.magnitude}
        </div>
    )
}

export default Debug
