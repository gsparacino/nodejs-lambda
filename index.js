// Request Handler
exports.handler = async function(event, context) {
    console.log('## CONTEXT: ' + serialize(context));
    console.log('## EVENT: ' + serialize(event));
    try {
        return formatResponse();
    } catch(error) {
        return formatError(error);
    }
};

let formatResponse = function(body){
    return {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json"
        },
        "isBase64Encoded": false,
        "body": body
    }
};

let formatError = function(error){
    return {
        "statusCode": error.statusCode,
        "headers": {
            "Content-Type": "text/plain",
            "x-amzn-ErrorType": error.code
        },
        "isBase64Encoded": false,
        "body": error.code + ": " + error.message
    }
};

let serialize = function(object) {
    return JSON.stringify(object, null, 2)
};