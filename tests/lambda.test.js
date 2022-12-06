const lambda = require('../index');
const lambdaTester = require("lambda-tester");

const request = {

};

test('well-formatted request should result in a 200 OK response', async () => {
    let response = await lambdaTester(lambda.handler).event(request).expectResult();
    console.log('## RESPONSE: ' + JSON.stringify(response, null, 2));
});

test('invalid request should result in a 4xx CLIENT_ERROR response', async () => {
    // ...
});
