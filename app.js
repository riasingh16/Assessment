var express=require('express');
var app= express();
var hotelList=require('./hotel.json');

app.get('/home', function(req, res)
{
    names = [];
    hotel.forEach(element =>
    {
        names.push(element);
    });
    res.send(names);
})
    
app.get('/searchByCity',function(req,res){
    keyword = req.query.city;
    match = [];
    hotel.forEach(element =>
    {
        if(keyword == element.city)
        {
            match.push(element.name); 
        }
    });
    res.send(match)

})

app.get("/searchByType", function(req, res)
{
    keyword = req.query.sType;
    searchType = [];
    hotel.forEach(element =>
    {
        if(keyword == element.type)
        {
            searchType.push(element.name); // this will only send name of the hotel, for full detail use push(element)
        }
    });
    res.send(searchType);
})
app.get("/searchByCuisine", function(req, res)
{
    keyword = req.query.sType;
    Cuisine = [];
    hotel.forEach(element =>
    {
        if(keyword == element.type)
        {
            Cuisine.push(element.name); // this will only send name of the hotel, for full detail use push(element)
        }
    });
    res.send(Cuisine);
})

app.get(3000,function(req,res){
    console.log('server listening to port 3000')
})