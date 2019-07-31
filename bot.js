var twit = require("twit");

var Twitter = new twit(
    {
        consumer_key: 'AXuzs9Emx859uSxr06Ecxtj7F',
        consumer_secret:'adnr1sy1Q5zijiRG104iLFSFHy76TXxh9brIGHcz9QkdLk8jL2',
        access_token: '1155177255125049346-UDY086PZbI0AHFm7y2GU2wa5Pvc2aG',
        access_token_secret: '7qrTTAlACIavQTzXDX0MTlj06MAVq9m4xvtbtK6c2c64U',
        timeout_ms: 60 * 1000,
        strictSSL: true,

    }
)

var retweet = function () {
    var parameters = {
        q: 'from:@TTCnotices, Line, 1 OR 2, delays OR service OR closure, -elevator',
        result_type: 'recent',
        lang: 'en'
    }
    Twitter.get('search/tweets', parameters, function (err, data){
        if (!err){
            var retweetId = data.statuses[0].id_str;
            Twitter.post('statuses/retweet/:id', {
                id: retweetId
            }, function (err, response){
                if (response){
                    console.log('Retweeted!');
                }
                if (err) {
                    console.log(err);
                    console.log('Problem Retweeting');
                }
            });
        }
        else{
            console.log('Error during tweet search call');
        }
    });
};

retweet();

