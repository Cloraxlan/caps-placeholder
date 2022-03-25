import { AxiosError } from "axios";
export declare type CallType = "completion";
export declare type OpenAIAPIProps = {
    apiKey: string;
    callType?: CallType;
    payload: CompletionPayload;
    responseHandler: (response: CompletionResponse) => any;
    errorHandler?: (error: AxiosError) => any;
};
export declare type CompletionPayload = {
    engine?: string;
    prompt?: string;
    maxTokens?: number;
    temperature?: number;
    topP?: number;
    n?: number;
    stream?: boolean;
    logprobs?: number;
    echo?: boolean;
    stop?: string | string[];
    presencePenalty?: number;
    frequencyPenalty?: number;
    bestOf?: number;
    logitBias?: {
        [token: string]: number;
    };
};
export declare type CompletionResponse = {
    id: string;
    object: string;
    created: number;
    model: string;
    choices: Choice[];
};
export declare type Choice = {
    text: string;
    index: number;
    logprobs: any;
    finish_reason: string;
};
