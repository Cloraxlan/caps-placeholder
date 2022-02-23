// import got from 'got';
import axios from 'axios';
import dotenv from 'dotenv';
import React from 'react';
dotenv.config();

const prompt = "5 Interesting Nutrition Facts:\n\n";
let output: string;


export default class NutriFacts extends React.Component {
    state = {
        facts: ""
    }

    componentDidMount() {
        (() => {
            const url = 'https://api.openai.com/v1/engines/davinci/completions';
            const params = {
                "prompt": prompt,
                "max_tokens": 160,
                "temperature": 0.7,
                "frequency_penalty": 0.5
            };
            const headers = {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
            };
            
            try {
                axios.post(url, { json: params, headers: headers }).then(res => {
                    output = `${prompt}${(res as any).choices[0].text}`;
                })
                console.log(output);
                this.setState(output);
            } catch (err) {
                console.log(err);
            }
        })();
    }

    render() {
        return (
            <p>{this.state.facts}</p>
        );
    }

}