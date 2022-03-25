import React, { useEffect } from "react";
import { CALL_TYPES, DEFAULT_ENGINE } from "./config";
import { camelToUnderscore, completionURL } from "./utils";
import axios from "axios";
var OpenAIAPI = function (_a) {
    var apiKey = _a.apiKey, _b = _a.callType, callType = _b === void 0 ? CALL_TYPES.COMPLETION : _b, payload = _a.payload, responseHandler = _a.responseHandler, errorHandler = _a.errorHandler;
    var sendRequest = function (url, method, opts) {
        var data = {};
        for (var key in opts) {
            data[camelToUnderscore(key)] = opts[key];
        }
        return axios({
            url: url,
            headers: {
                Authorization: "Bearer " + apiKey,
                "Content-Type": "application/json",
            },
            data: Object.keys(data).length ? data : "",
            method: method,
        });
    };
    useEffect(function () {
        let isMounted = true;
        if (!payload.engine) {
            payload.engine = DEFAULT_ENGINE;
        }
        var url = "";
        //eslint-disable-next-line
        switch (callType) {
            case CALL_TYPES.COMPLETION:
                url = completionURL(payload.engine);
                delete payload.engine;
                break;
        }
        sendRequest(url, "post", payload)
            .then(function (res) {
            if (isMounted) responseHandler(res.data);
        })
            .catch(function (err) {
            if (errorHandler)
                errorHandler(err);
        });
        return () => { isMounted = false };
        //eslint-disable-next-line
    }, []);
    return React.createElement(React.Fragment, null);
};
export default OpenAIAPI;
