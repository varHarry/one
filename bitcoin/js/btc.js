$(document).ready(function() {
    var bitcoinPrice = ("https://blockchain.info/q/24hrprice");
    $.getJSON(bitcoinPrice, function(cost) {
        console.info('1 bitcoin = $', cost);
        $(".bitcoin-price").append("<span>" + cost + "</span>");
        var slushStats = ("https://mining.bitcoin.cz/stats/json/947244-fb33810230dadb19c00f1e13068cd5d6");
        $.getJSON(slushStats, function(btcstats) {
                    console.info(btcstats.length);
          for (var i = 0; i < btcstats.length; i++) {
                    console.info(btcstats);
                    console.info(btcstats.blocks);
                    console.info(btcstats.blocks[i].confirmations);
                    console.info(btcstats.blocks[i].reward);
                  }
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
