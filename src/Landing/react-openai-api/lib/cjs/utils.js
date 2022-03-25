"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.completionURL = exports.camelToUnderscore = void 0;
var config_1 = require("./config");
var camelToUnderscore = function (key) {
    var result = key.replace(/([A-Z])/g, " $1");
    return result.split(" ").join("_").toLowerCase();
};
exports.camelToUnderscore = camelToUnderscore;
var completionURL = function (engine) {
    if (!config_1.ENGINE_LIST.includes(engine)) {
        engine = config_1.DEFAULT_ENGINE;
    }
    return config_1.OPEN_AI_URL + "/engines/" + engine + "/completions";
};
exports.completionURL = completionURL;
