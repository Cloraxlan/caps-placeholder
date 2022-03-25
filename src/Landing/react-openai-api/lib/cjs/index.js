"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var config_1 = require("./config");
var utils_1 = require("./utils");
var axios_1 = __importDefault(require("axios"));
var OpenAIAPI = function (_a) {
    var apiKey = _a.apiKey, _b = _a.callType, callType = _b === void 0 ? config_1.CALL_TYPES.COMPLETION : _b, payload = _a.payload, responseHandler = _a.responseHandler, errorHandler = _a.errorHandler;
    var sendRequest = function (url, method, opts) {
        var data = {};
        for (var key in opts) {
            data[utils_1.camelToUnderscore(key)] = opts[key];
        }
        return axios_1.default({
            url: url,
            headers: {
                Authorization: "Bearer " + apiKey,
                "Content-Type": "application/json",
            },
            data: Object.keys(data).length ? data : "",
            method: method,
        });
    };
    react_1.useEffect(function () {
        if (!payload.engine) {
            payload.engine = config_1.DEFAULT_ENGINE;
        }
        var url = "";
        switch (callType) {
            case config_1.CALL_TYPES.COMPLETION:
                url = utils_1.completionURL(payload.engine);
                delete payload.engine;
                break;
        }
        sendRequest(url, "post", payload)
            .then(function (res) {
            responseHandler(res.data);
        })
            .catch(function (err) {
            if (errorHandler)
                errorHandler(err);
        });
    }, [apiKey, payload]);
    return react_1.default.createElement(react_1.default.Fragment, null);
};
exports.default = OpenAIAPI;
