const SDK = require('@ringcentral/sdk').SDK

RINGCENTRAL_CLIENTID = "<ENTER CLIENT ID>"
RINGCENTRAL_CLIENTSECRET = "<ENTER CLIENT SECRET>"
RINGCENTRAL_SERVER = "https://platform.ringcentral.com"

RINGCENTRAL_USERNAME = "<YOUR ACCOUNT PHONE NUMBER or EMAIL>"
RINGCENTRAL_PASSWORD = "<YOUR ACCOUNT PASSWORD>"
RINGCENTRAL_EXTENSION = "" // optional, you can leave this as empty string or provide <YOUR EXTENSION NUMBER>

const rcsdk = new SDK({
    server: RINGCENTRAL_SERVER,
    clientId: RINGCENTRAL_CLIENTID,
    clientSecret: RINGCENTRAL_CLIENTSECRET
});
const platform = rcsdk.platform();

platform.login({
    username: RINGCENTRAL_USERNAME,
    password: RINGCENTRAL_PASSWORD,
    extension: RINGCENTRAL_EXTENSION
    })
    .then(function(resp) {
        platform.get('/restapi/v1.0/account/~/extension/~/conferencing')
        .then(function(resp) {
           console.log( resp.json() )
        })
});
