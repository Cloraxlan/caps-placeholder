import React from 'react'
import BulkIngredient from './Interfaces-Classes/BulkIngredient'
import Ingredient, {  } from './Interfaces-Classes/Ingredient'
import { constructIngredientFromString } from './Interfaces-Classes/Recipe'

interface Props {
    
}

const Debug = (props: Props) => {
    
    let x: Ingredient =  constructIngredientFromString("5 cups of apples")
    if(x.measure == "VOLUME"){
        console.log(x.magnitude+ " " + (x as BulkIngredient).unit )
        console.log((x as BulkIngredient).unit)
    }
    return (
        <div>
            {x.magnitude}
        </div>
    )
}

export default Debug
