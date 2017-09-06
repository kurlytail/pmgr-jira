'use strict';

var RP = require('request-promise');
var rejectUnauthorized = true;
var _ = require('lodash');

var authToken = undefined;

function setBaseUrl(url) {
    RP = RP.defaults({baseUrl:url});
}

if (typeof window === 'undefined') {
    rejectUnauthorized = false;
} else {
    setBaseUrl(window.location.origin);
}

function getRequest(url, headers, options) {
    var reqOptions = {
        headers: {
            'Accept' : 'application/json;odata.metadata=full',
        },
        json: true,
        rejectUnauthorized : rejectUnauthorized,
        contentType: 'application/json;charset=utf-8',
    };

    _.extend(reqOptions.headers, headers);
    _.extend(reqOptions, options);

    if(authToken) {
        reqOptions.headers['Authorization'] = authToken;
    }

    Object.assign(reqOptions, options);

    reqOptions.url = url;
    return RP(reqOptions);
}

function patchRequest(url, object, headers, options) {
    var reqOptions = {
        method: 'PATCH',
        headers: {
            'Accept' : 'application/json;odata.metadata=full',
        },
        body : object,
        json: true,
        rejectUnauthorized : rejectUnauthorized,
        contentType: 'application/json;charset=utf-8',
    };
    _.extend(reqOptions.headers, headers);
    _.extend(reqOptions, options);

    if(authToken) {
        reqOptions.headers['Authorization'] = authToken;
    }

    reqOptions.url = url;
    return RP(reqOptions);
}

function postRequest(url, object, headers, options) {
    var reqOptions = {
        method: 'POST',
        headers: {
            'Accept' : 'application/json;odata.metadata=full',
        },
        body : object,
        json: true,
        rejectUnauthorized : rejectUnauthorized,
        contentType: 'application/json;charset=utf-8',
    };

    _.extend(reqOptions.headers, headers);
    _.extend(reqOptions, options);

    if(authToken) {
        reqOptions.headers['Authorization'] = authToken;
    }

    reqOptions.url = url;
    return RP(reqOptions);
}

function deleteRequest(url, object, headers, options) {
    var reqOptions = {
        method: 'DELETE',
        headers: {
            'Accept' : 'application/json;odata.metadata=full',
        },
        body : object,
        json: true,
        rejectUnauthorized : rejectUnauthorized,
        contentType: 'application/json;charset=utf-8',
    };

    _.extend(reqOptions.headers, headers);
    _.extend(reqOptions, options);

    if(authToken) {
        reqOptions.headers['Authorization'] = authToken;
    }

    reqOptions.url = url;
    return RP(reqOptions);
}

function setAuthToken(token) {
    authToken = token;
}

export {getRequest, patchRequest, deleteRequest, postRequest, setAuthToken};
