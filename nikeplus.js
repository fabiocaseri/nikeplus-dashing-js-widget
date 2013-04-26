var http = require('https')
  , access_token = require('./nikeplus_access_token');

var options = {
  hostname: 'api.nike.com',
  path: '/me/sport/activities?access_token=' + access_token,
  headers: {
    'appid': 'nikeplus-dashing-js-widget',
    'Accept': 'application/json'
  }
};
function fetchNikePlus() {
  http.get(options, function(res) {
    if (res.statusCode == 200) {
      var body = '';
      res.on('data', function(chunk) {
        body += chunk;
      });
      res.on('end', function() {
        body = JSON.parse(body);
        var activities = body.data;
        if (activities && activities.length) {
          var summary = activities[0].metricSummary;
          summary && send_event('nikeplus', {
            calories: summary.calories,
            fuel: summary.fuel,
            distance: parseFloat(summary.distance, 10).toFixed(2),
            duration: summary.duration
          });
        }
      });
    } else {
      console.log('nikeplus status code: ' + res.statusCode);
    }
  }).on('error', function(err) {
    console.log('Error reading from nikeplus: ', err);
  });
}

setInterval(fetchNikePlus, 15 * 60 * 1000);
fetchNikePlus();

/*
require "net/http"
require "json"
require "nike_v2"

# widget configuration
access_token = "ACCESS_TOKEN"

SCHEDULER.every "15m", :first_in => 0 do |job|
  person        = NikeV2::Person.new(access_token: access_token)
  activity      = person.activities.first
  
  if activity
    summary = activity.fetch_data['metricSummary']

    send_event "nikeplus", { 
      calories: summary['calories'],
      fuel:     summary['fuel'],
      distance: summary['distance'].round(2),
      duration: summary['duration'][0...-4]
    }
  end
end
*/