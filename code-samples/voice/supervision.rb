#!usr/bin/ruby

# You get the environment parameters from your 
# application dashbord in your developer account 
# https://developers.ringcentral.com

require 'ringcentral'
require 'dotenv/load'

$rc = RingCentral.new(ENV['RC_CLIENT_ID'],
                      ENV['RC_CLIENRT_SECRET'],
                      ENV['RC_SERVER_URL'])

$rc.authorize(jwt: ENV['RC_JWT'])

res = $rc.post('/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/supervise',
               payload: {  
                 mode: "Listen",
                 extensionNumber: "108",
                 deviceId: "60727004"
               })
