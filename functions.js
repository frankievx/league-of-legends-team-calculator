
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
    console.log(championData);
    var search = function(championName) {
        console.log(championData[championName]);
    };
    search("Aatrox");
    var showAll = function(championData) {
        $(".champList").each(function(champion) {
            $(".champList").after("<div class=champStats>");
            $(".champInfo").after(" <h2>" +champion.name+ "</h2>");
        });
    };
    showAll(championData);
    /*        $("")
            <div class="champInfo">
                <h2>Aatrox</h2>
                <img src="img%20copy/champion/Aatrox.png">
                <p>"Aatrox is a legendary warrior, one of only five that remain of an ancient race known as the Darkin. He wields his massive blade with grace and poise, slicing through legions in a style that is hypnotic to behold. With each foe felled, Aatrox's ..."</p>
                <p>HP: 537.8</p>
                <p>HPperLevel: 85</p>
            </div>
        }
        
    }

    
    /*function(champions) {
        var data = [];
        console.log(champions.aatrox);
        
        $.each(champions, function(key, val) {
            data.push(key, val);
        });
        console.log(data);
        data.map(function(champion) {
            var championName = champion.id;
            var championImage = champion.image.full;
            $.each(champion.image, function(key, val) {
                championImage.push(key, val);
            });
                
            
            var championStats = champion;
            console.log(champion.blurb);
            var championBlurb = champion.blurb;
            return {
                html:'<div class="champInfo">'+
                     '<h2>'+championName+'</h2>'+
                    '<img src="img%20copy/champion/'+championImage+'">'+
                    '<p>'+championBlurb+'</p>'+
                    '<p>HP: "'+championStats.hp+'"</p>'+
                    '<p>HPperLevel: "'+championStats.hpperlevel+'</p>'+
                    '</div>'
            };
            
            
        })
    };

    
    /*data.$.each(champion, function(key, val) {
            data.push(key, val);
        });
    console.log(data);
    /*var championList = $.each(data, function(champion){
            
            console.log(champion);
            
            var championImage = champion.image.full;
            var championStats = champion.stats;
            var championBlurb = champion.blurb;
            return {
                html:'<div class="champInfo">'+
                     '<h2>'+champion+'</h2>'+
                    '<img src="img%20copy/champion/'+championImage+'">'+
                    '<p>'+championBlurb+'</p>'+
                    '<p>HP: "'+championStats.hp+'"</p>'+
                    '<p>HPperLevel: "'+championStats.hpperlevel+'</p>'+
                    '</div>'
                
            };  
    });
        
    showAll();
    
    
    
        
                         
    function showAll() {
        return createHTML(championList);
    };
    
    function createHTML(dataArray) {
        dataArray.map(function(champion) {
            return champion.html;
        });
    };*/
        
});

