$(document).ready(function() {
    var bitcoinPrice = ("https://blockchain.info/q/24hrprice");
    $.getJSON(bitcoinPrice, function(cost) {
        console.info("%c1 bitcoin = $", "background-color:yellow;" ,cost);
        $(".bitcoin-price").append("<span>" + cost + "</span>");
        var slushStats = ("https://mining.bitcoin.cz/stats/json/947244-fb33810230dadb19c00f1e13068cd5d6");
        $.getJSON(slushStats, function(btcstats) {
          var $output = $('.pool-info'), tempHTML = '';
            $.each(btcstats.blocks, function(key, value) {
              $output.append('<h1>' + key + '<h1>');
              tempHTML += '<table>';
              $.each(value, function(k,v){
                tempHTML += '<tr><td>' + k + '</td><td>' + v + '</td></tr>';
                console.info("inner k: "+ k + " inner v: " + v);
              })
              tempHTML += '</table>';
              $output.append(tempHTML);
                console.info("key is " + key + " and value is " + value);
            });
            var monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];
            var h = new Date();
            var day = h.getDate();
            var year = h.getFullYear();
            var hours = h.getHours();
            var minutes = h.getMinutes();
            var seconds = h.getSeconds();
            var milliSeconds = h.getMilliseconds();
            $(".btc-day").append("<span>" + monthNames[h.getMonth()] + " " + day + " " + year + " @ " + hours + ":" + minutes + ":" + seconds + ":" + milliSeconds + " </span>");
            console.info("%cTimestamp: " + monthNames[h.getMonth()] + " " + day + " " + year + " @ " + hours + ":" + minutes + ":" + seconds + ":" + milliSeconds, "background-color:#00fa12;");
        });
    });
});
