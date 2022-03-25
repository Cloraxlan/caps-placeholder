export var ENGINE_LIST = [
    "ada",
    "babbage",
    "curie",
    "davinci",
    "davinci-instruct-beta",
    "curie-instruct-beta",
];
export var DEFAULT_ENGINE = "davinci";
export var ORIGIN = "https://api.openai.com";
export var API_VERSION = "v1";
export var OPEN_AI_URL = ORIGIN + "/" + API_VERSION;
export var CALL_TYPES;
(function (CALL_TYPES) {
    CALL_TYPES["COMPLETION"] = "completion";
    CALL_TYPES["SEARCH"] = "search";
    CALL_TYPES["ANSWERS"] = "answers";
    CALL_TYPES["ENGINES"] = "engines";
})(CALL_TYPES || (CALL_TYPES = {}));
