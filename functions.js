
var data = [];
$(document).ready(function ( ) {
    //bind event handlers
    //$('.buttons a').click(function(e){e.preventDefault()});
    //$('.showChampions').click(function(){});
    // get JSON data
    /*var mongodb = require('mongodb').MongoClient;
    MongoClient.connect("mongodb://localhost:27017/LeagueOfLegends", function(err, db) {
    if(!err) {
    console.log("We are connected");
    }
    });
    */
    $.getJSON("champions.json", function (response) { 
        data = response;
        var champions = Object.keys(data);
        for(var i=0; i<champions.length; i++) {
            console.log(data[champions[i]]);
            console.log(data[champions[i]]["name"]);
            var champInfo = '<div class="champStats">'+
                                '<h2>'+data[champions[i]]["name"]+'</h2>'+
                                '<img src="img%20copy/champion/'+data[champions[i]]["image"]["full"]+'">'+
                                '<p>'+data[champions[i]]["stats"]["hp"]+'</p>'
                                '<p>'+data[champions[i]]["stats"]["hpperlevel"]+'</p>'+
                            '</div>';
            $(".champList").append(champInfo);
        }
    });
    
    /*Object.prototype.each = function(collection, callback){
    if(Array.isArray(collection)){
        for(var i=0; i<collection.length; i++){
           callback(collection[i]);
           }
        }
     else {
         for(var x in collection){
             callback(collection[x]);
             }
     }
}*/

    Array.prototype.concatAll = function() {
        var results = [];
        this.forEach(function(subArray) {
            results.push.apply(results, subArray);
            return results;
        });
    };
    console.log(championData);
    var search = function(championName) {
        console.log(championData[championName]);
    };
    //each(championData, console.log());
    /*var showAll = function(championData) {
        forEach(championData, function() {
            var champInfo = '<div class="champStats">'+
                                '<h2>'this.name'</h2>'+
                                '<img src="'this.image.full'">'+
                                '<p>'this.stats.hp'</p>'
                                '<p>'this.stats.hpperlevel'</p>'+
                            '</div>';
            return $(".champList").append(champInfo);
        });
    };*/
});

