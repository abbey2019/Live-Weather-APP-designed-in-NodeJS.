var http = require('http')
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Haldwani&appid=d5d7bd1308b63076bf7c018e402f5eaf&units=metric'
//On the above line change city name ie (?q= your city name&app) and set the search to your city..



var server = http.createServer(function(request, response){
    
    var request = require('request')
    request(url ,function(err,res,body){
        var data = JSON.parse(body)
        response.write("<html><body style = 'background-color :grey;'><div id ='container'>")
        response.write('<h1>' +'City Name-:' +data['name'] + '<br>' + '</h1>')
        response.write('<h2>' + 'Temperature -: '+ data.main['temp'] + '<br>' + '</h2>')
        response.write('<h2>' + 'SunSet Time -:' + new Date(data.sys['sunset']+1000)+'</h2>')
        response.write('</div></body></html>')
        console.log('Continue to localhost:3000 where you can see the current weather.')
    })
}).listen(3000)