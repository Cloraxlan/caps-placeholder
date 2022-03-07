import React, { useState } from 'react'
import OpenAIAPI from 'react-openai-api';
import {
    CompletionResponse,
} from "react-openai-api/lib/esm/types";
import dotenv from 'dotenv';
dotenv.config();

const promptTextDefault = `
Interesting Nutrition Facts: 

- Asparagus is a good source of vitamins A, C and E, B-complex vitamins, potassium and zinc.

- An avocado has more than twice as much potassium as a banana.

- Broccoli contains twice the vitamin C of an orange and almost as much calcium as whole milk, and the calcium is better absorbed!

- Celery is the best vegetable source of naturally occurring sodium.

- Kale contains lutein and zeaxanthin, which protect the eyes from macular degeneration.

- To increase the protein in peanut butter, Brewer’s yeast can be mixed in - a useful tip for vegetarians.

- Pumpkin seeds are high in zinc, which is good for the prostate and building the immune system.

- Lemons are considered one of the world's healthiest foods - one lemon contains your daily dose of vitamin C, it cleanses the liver, boosts your immunity and aids in weight loss. Try adding it to a mug of warm water to kick start your day!

- Eggs contain the highest quality food protein known. All parts of an egg are edible, including the shell which has a high calcium content.

- The mushroom is the only non-animal natural source of vitamin D.
`;

const loadMessage: string = "Loading ..."

const NutriFacts = () => {
    const [promptText, setPromptText] = useState<string>(loadMessage);
    
    
    const responseHandler = (openAIResponse: CompletionResponse) => {
        console.log("NEW RESPONSE")
        setPromptText(openAIResponse.choices[0].text)
    }

    const textToList = (text: string) => {
        if (text===loadMessage)
            return <h2>{text}</h2>
        else
            return (
                <React.Fragment>
                    <h2>Interesting Nutrition Facts:</h2>
                    <ul>
                        {text.split('\n\n').map((fact: string)=> {
                            return <li>{fact}</li>
                        })}
                    </ul>
                </React.Fragment>
            )
    }

    return (
        <React.Fragment>
            {/* <p style={{ whiteSpace: "pre-line" }}>{promptText}</p> */}
            {textToList(promptText)}
            <OpenAIAPI
                apiKey={process.env.REACT_APP_OPENAI_API_KEY as string}
                payload={
                    {
                        prompt: promptTextDefault,
                        maxTokens: 1000,
                        temperature: 0.7,
                        frequencyPenalty: 0.8,
                    }
                }
                responseHandler={responseHandler}
            />
        </React.Fragment>
    )
}

export default NutriFacts