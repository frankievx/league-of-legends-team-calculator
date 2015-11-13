
$(document).ready(function ( ) {
    //bind event handlers
    //$('.buttons a').click(function(e){e.preventDefault()});
    //$('.showChampions').click(function(){});
    // get JSON data
    
    var data = $.getJSON('champions.json');
    var championList = $.each(data, function(champion){
            
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
    };
        
});

