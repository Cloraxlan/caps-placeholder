"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CALL_TYPES = exports.OPEN_AI_URL = exports.API_VERSION = exports.ORIGIN = exports.DEFAULT_ENGINE = exports.ENGINE_LIST = void 0;
exports.ENGINE_LIST = [
    "ada",
    "babbage",
    "curie",
    "davinci",
    "davinci-instruct-beta",
    "curie-instruct-beta",
];
exports.DEFAULT_ENGINE = "davinci";
exports.ORIGIN = "https://api.openai.com";
exports.API_VERSION = "v1";
exports.OPEN_AI_URL = exports.ORIGIN + "/" + exports.API_VERSION;
var CALL_TYPES;
(function (CALL_TYPES) {
    CALL_TYPES["COMPLETION"] = "completion";
    CALL_TYPES["SEARCH"] = "search";
    CALL_TYPES["ANSWERS"] = "answers";
    CALL_TYPES["ENGINES"] = "engines";
})(CALL_TYPES = exports.CALL_TYPES || (exports.CALL_TYPES = {}));
